import React, { memo } from 'react'

import ZCTopBanner from "./c-cpns/top-banner"
import { RecommendWrapper } from './style';
function ZCRecommend(props) {
  return (
    <RecommendWrapper>
      <ZCTopBanner></ZCTopBanner>
    </RecommendWrapper>
  )
}

export default memo(ZCRecommend)


// function ZCRecommend(props) {
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners();
//   }, [getBanners])
  
//   return (
//     <div>
//       <h2>ZCRecommend:{topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// });

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(ZCRecommend))