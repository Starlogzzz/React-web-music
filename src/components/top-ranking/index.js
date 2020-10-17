import React, { memo } from 'react'
import { useDispatch } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils';
import { getSongDetailAction } from "@/pages/player/store";

import { TopRankingWrapper } from "./style"

export default memo(function ZCTopRanking(props) {
  const dispatch = useDispatch();

  const { info } = props;
  const { tracks = [] } = info;

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id))
  }
  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt={info.name}/>
          <a href="/todo" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <a className="name text-nowrap" href="/todo">{item.name}</a>
                  <div className="operate">
                    <button className="btn sprite_02 play" onClick={e => playMusic(item)}></button>
                    <button className="btn sprite_icon2 addto"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="/todo">查看全部&gt;</a>
      </div>
    </TopRankingWrapper>
  )
})
