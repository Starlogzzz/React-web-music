import React, { memo } from 'react'

import { RecommendRankingWrapper } from './style';
import ZCThemeHeaderRCM from '@/components/theme-header-rcm';

export default memo(function ZCRecommendRanking() {
  return (
    <RecommendRankingWrapper>
      <ZCThemeHeaderRCM title="榜单" path="/discover/toplist"/>
    </RecommendRankingWrapper>
  )
})