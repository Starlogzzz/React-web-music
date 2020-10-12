import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopListAction } from "../../store/actionCreators"

import { RecommendRankingWrapper } from './style';
import ZCThemeHeaderRCM from '@/components/theme-header-rcm';
import ZCTopRanking from "@/components/top-ranking"

export default memo(function ZCRecommendRanking() {

  const { 
    upRankingList,
    newRankingList,
    originRankingList
  } = useSelector(state => ({
    upRankingList: state.getIn(["recommend", "upRankingList"]),
    newRankingList: state.getIn(["recommend", "newRankingList"]),
    originRankingList: state.getIn(["recommend", "originRankingList"])
  }), shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction(19723756));
    dispatch(getTopListAction(3779629));
    dispatch(getTopListAction(2884035));
  }, [dispatch]);
  
  return (
    <RecommendRankingWrapper>
      <ZCThemeHeaderRCM title="榜单" path="/discover/toplist"/>
      <div className="tops">
        <ZCTopRanking info={upRankingList}/>
        <ZCTopRanking info={newRankingList}/>
        <ZCTopRanking info={originRankingList}/>
      </div>
    </RecommendRankingWrapper>
  )
})