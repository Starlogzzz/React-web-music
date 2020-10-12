import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from "react-redux"

import { getHotNewAlbumAction } from './store/actionCreators';

import ZCAlbumCover from '@/components/album-cover';
import { AlbumWrapper } from "./style";
import ZCThemeHeaderRCM from '../../../../components/theme-header-rcm';

export default memo(function ZCAlbum() {
  const { hotNewAblums } = useSelector(state => ({
    hotNewAblums: state.getIn(["album", "hotNewAblums"])
  }), shallowEqual)

  console.log(hotNewAblums)
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getHotNewAlbumAction(10))
  }, [dispatch])
  
  return (
    <AlbumWrapper className="wrap-v2">
        <div className="hot-new">
          <ZCThemeHeaderRCM title="热门新碟" isShowLink={true}/>
          <div className="albums">
          {
            hotNewAblums.map((item, index) => {
              return (
                <div className="album-items" key={item.id}>
                <ZCAlbumCover info={item}
                              size={130}
                              width={153}
                              bgp={"-845px"}></ZCAlbumCover>
                </div>
              )
            })
          }
          </div>
        </div>
    </AlbumWrapper>
  )
})
