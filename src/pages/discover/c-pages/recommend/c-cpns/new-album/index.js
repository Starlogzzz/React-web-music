import React, { memo, useEffect, useRef } from 'react'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getNewAlbumAction } from '../../store/actionCreators';
import { shallowEqual } from 'react-redux';

import { Carousel } from 'antd';
import { NewAlbumWrapper } from './style';
import ZCThemeHeaderRCM from '@/components/theme-header-rcm';

export default memo(function ZCNewAlbum() {

  const dispatch = useDispatch();

  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual);
  console.log(newAlbums);
  
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch]);

  const CarouselRef = useRef();
  return (
    <NewAlbumWrapper>
      <ZCThemeHeaderRCM title="新碟上架" path="/discover/album"/>
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={e => CarouselRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={CarouselRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                        return <div>{iten.name}</div>
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={e => CarouselRef.current.next()}></button>
      </div>
    </NewAlbumWrapper>
  )
})
