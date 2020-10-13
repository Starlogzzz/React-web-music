import React, { memo, useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { shallowEqual } from 'react-redux';


import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils';
import { getSongDetailAction } from "../store/actionCreators"
import { Slider } from 'antd';

import {
  AppPlayerBarWrapper,
  Control,
  PlayInfo,
  Operator
} from "./style"

export default memo(function ZCAppPlayBar() {
  const [audioTime, setAudioTime] = useState(0)

  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual)

  const radioRef = useRef();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongDetailAction(1472480890))
  }, [dispatch])

  const picUrl = (currentSong.al && currentSong.al.picUrl) || ""
  const singerName = (currentSong.ar && currentSong.ar[0].name) || ""
  const duration = (currentSong && currentSong.dt) || ""
  const showDuration = formatDate(duration, "mm:ss")
  const showCurrentTime = formatDate(audioTime, "mm:ss")
  const progress = (audioTime / duration) * 100; 

  const playRadio = () => {
    radioRef.current.src = getPlaySong(currentSong.id);
    radioRef.current.play();
  }
  const timeUpDate = (e) => {
    setAudioTime(e.target.currentTime * 1000);
  }
  return (
    <AppPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_playbar prev"></button>
          <button className="sprite_playbar play" onClick={e => playRadio()}></button>
          <button className="sprite_playbar next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/#">
              <img src={getSizeImage(picUrl, 34)} alt="" />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} value={progress}/>
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={radioRef} onTimeUpdate={e => timeUpDate(e)} />
    </AppPlayerBarWrapper>
  )
})
