import { getSongDetail } from "@/services/player"

import { getRandomNumber } from "@/utils/math-utils"

import * as actionTypes from "./constants"

const changeSongDetailAction = currentSong => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

const changePlayListAction = playList => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

const changeCurrentSongIndexAction = index => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
})

export const changeSequenceAction = sequence => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
})

export const changeCurrentSong = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"])
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"])
    const sequence = getState().getIn(["player", "sequence"])

    switch(sequence) {
      case 1: // 随机播放
        let randomIndex = getRandomNumber(playList.length);
        while (currentSongIndex === randomIndex) {
          randomIndex = getRandomNumber(playList.length);
        }
        currentSongIndex = randomIndex;
        break;
      default: // 顺序播放
        currentSongIndex += tag;
        if (currentSongIndex >= playList.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
    }

    const currentSong = playList[currentSongIndex];
    dispatch(changeSongDetailAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
  }
}

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 1.根据id查找playlist中是否已存在该歌曲
    const playList = getState().getIn(["player", "playList"])
    const songIndex = playList.findIndex(song => song.id === ids)

    // 2.判断是否找到了歌曲
    if(songIndex !== -1) { // 找到了歌曲
      dispatch(changeCurrentSongIndexAction(songIndex));
      const song = playList[songIndex];
      dispatch(changeSongDetailAction(song))
    } else { // 没找到歌曲
      // 1.请求歌曲数据
      getSongDetail(ids).then(res => {
        const song = res.songs && res.songs[0];
        if(!song) return;

        // 2.将歌曲添加到列表中
        const newPlayList = [...playList];
        newPlayList.push(song);

        // 3.修改redux中的值
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeSongDetailAction(song));
      })
    }
  }
}