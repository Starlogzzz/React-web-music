import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getHotRecommendAction } from "../../store/actionCreators"
import { HOT_RECOMMEND_LIMIT } from "@/common/constans"

import ZCThemeHeaderRCM from "@/components/theme-header-rcm"
import { HotRecommendWrapper } from "./style"
import ZCSongsCover from "@/components/songs-cover"

export default memo(function ZCHotRecommend() {
  // redux hooks
  const dispatch = useDispatch();
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)

  // other hooks
  useEffect(()=>{
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <ZCThemeHeaderRCM title={"热门推荐"} keywords={["华语","流行","摇滚","民谣","电子"]} path={"/discover/songs"}/>
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <ZCSongsCover key={item.id} info={item}>{item.name}</ZCSongsCover>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
