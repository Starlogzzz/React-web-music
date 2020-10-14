import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
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
  const [progress, setProgress] = useState(0)
  const [isChange, setIsChange] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual)

  const radioRef = useRef();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongDetailAction(1436709403))
  }, [dispatch])
  useEffect(() => {
    radioRef.current.src = getPlaySong(currentSong.id);
  }, [currentSong])

  const picUrl = (currentSong.al && currentSong.al.picUrl) || ""
  const singerName = (currentSong.ar && currentSong.ar[0].name) || ""
  const duration = (currentSong && currentSong.dt) || ""
  const showDuration = formatDate(duration, "mm:ss")
  const showCurrentTime = formatDate(audioTime, "mm:ss")

  const playRadio = () => {
    isPlaying ? radioRef.current.pause() : radioRef.current.play();
    setIsPlaying(!isPlaying)
  }
  const timeUpDate = (e) => {
    if(!isChange) {
      setAudioTime(e.target.currentTime * 1000);
      setProgress((audioTime / duration) * 100);
    }
  }
  const progressChange = useCallback((value) => {
    const currentTime = value / 100 * duration;
    setAudioTime(currentTime);
    setIsChange(true);
    setProgress(value);
  }, [duration])
  const progressChangeOver = useCallback((value) => {
    const currentTime = value / 100 * duration / 1000;
    radioRef.current.currentTime = currentTime;
    setAudioTime(currentTime * 1000)
    setIsChange(false);

    if(!isPlaying) {
      playRadio();
    }
  }, [duration])

  return (
    <AppPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
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
              <Slider defaultValue={30}
                      value={progress}
                      onChange={progressChange}
                      onAfterChange={progressChangeOver}/>
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
