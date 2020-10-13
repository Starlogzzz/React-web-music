import React, { memo } from 'react'

import ZCTopBanner from "./c-cpns/top-banner"
import ZCHotRecommend from "./c-cpns/hot-recommend"
import ZCNewAlbum from "./c-cpns/new-album"
import ZCRecommendRanking from "./c-cpns/recommend-ranking"
import ZCUseLogin from "./c-cpns/user-login"
import ZCSettleSinger from "./c-cpns/settle-singer"
import ZCHotRadio from "./c-cpns/hot-radio"

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
          <ZCHotRecommend/>
          <ZCNewAlbum/>
          <ZCRecommendRanking/>
        </RecommendLeft>
        <RecommendRight>
          <ZCUseLogin/>
          <ZCSettleSinger/>
          <ZCHotRadio/>
        </RecommendRight>
      </Content>
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