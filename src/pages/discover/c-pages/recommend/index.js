import React, { memo } from 'react'

import ZCTopBanner from "./c-cpns/top-banner"
import ZCHotRecommend from "./c-cpns/hot-recommend"
import ZCThemeHeaderRCM from "@/components/theme-header-rcm"
import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight 
} from './style';
function ZCRecommend(props) {
  return (
    <RecommendWrapper>
      <ZCTopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <ZCHotRecommend>
            <ZCThemeHeaderRCM/>
          </ZCHotRecommend>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
      {/* <h2>11111</h2>
      <h2>111111111</h2>
      <h2>111111111</h2>
      <h2>111111111</h2>
      <h2>111111111</h2>
      <h2>111111111</h2>
      <h2>111111111</h2> */}
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