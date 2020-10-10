import React, { memo } from 'react'

import ZCThemeHeaderRCM from "@/components/theme-header-rcm"
import { HotRecommendWrapper } from "./style"
export default memo(function ZCHotRecommend() {
  return (
    <HotRecommendWrapper>
      <ZCThemeHeaderRCM title={"热门推荐"} keywords={["华语","流行","摇滚","民谣","电子"]}/>
    </HotRecommendWrapper>
  )
})
