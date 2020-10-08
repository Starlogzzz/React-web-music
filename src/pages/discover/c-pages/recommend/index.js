import React, { memo, useEffect } from 'react'
import { connect } from "react-redux";

import { getTopBannerAction } from "./store/actionCreators"
function ZCRecommend(props) {
  const { getBanners, topBanners } = props;

  useEffect(() => {
    getBanners();
  }, [getBanners])
  
  return (
    <div>
      <h2>ZCRecommend:{topBanners.length}</h2>
    </div>
  )
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
});

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(ZCRecommend))