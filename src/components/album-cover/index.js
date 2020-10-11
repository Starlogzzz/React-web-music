import React, { memo } from 'react'

import { getSizeImage } from "@/utils/format-utils"
import { AlbumCoverWrapper } from './style';

export default memo(function ZCAlbumCover(props) {

  const { info, size = 130, width = 153, bgp = "-845px" } = props
  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt=""/>
        <a href="/todo" className="cover sprite_cover">{info.name}</a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="atist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
})
