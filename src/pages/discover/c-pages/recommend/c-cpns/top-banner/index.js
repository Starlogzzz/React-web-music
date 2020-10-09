import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannerAction } from './../../store/actionCreators';

import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from "./style"

export default memo(function ZCTopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 组件和redux关联: 获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual);
  const dispatch = useDispatch()
  
  // 其他hooks
  const CarouselRef = useRef();
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch]);

  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  // 其他业务逻辑
  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + "?imageView&blur=40x20"

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="wrap-v2 banner">
        <BannerLeft>
          <Carousel effect="fade" autoplay={true} ref={CarouselRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                  </div>
                )
              })
            }
          </Carousel> 
        </BannerLeft>
        <BannerRight>
          <span className={"download"}>PC 安卓 iPhone WP iPad Mac 六大客户端</span>
        </BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => CarouselRef.current.prev()}></button>
          <button className="btn right" onClick={e => CarouselRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
