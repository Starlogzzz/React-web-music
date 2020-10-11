import React, { memo } from 'react'

import { 
  getCount,
  getSizeImage
} from './../../utils/format-utils';
import { SongsCoverWrapper } from "./style"


export default memo(function ZCSongsCover(props) {
  const { info } = props;

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt=""/>
        {/* <a className="goTo" href={`/playlist?id=${info.id}`}>&nbsp;</a> */}
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span className="info_left">
              <i className="sprite_icon erji"></i>
              <span className="nb">{getCount(info.playCount)}</span>
            </span>
            <a className="sprite_icon play"></a>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
    </SongsCoverWrapper>
  )
})
