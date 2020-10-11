import * as actionTypes from "./constants";

import { 
  getTopBanners,
  getHotRecommends,
  getNewAlbums 
} from '@/services/recommend';

const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result
})

const changeNewAlbumAction = res => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.monthData
})

// 传入函数返回一个函数：因为可能在这里需要一些参数做一些事情
export const getTopBannerAction = () => {
  return dispatch => {
    // 发送网络请求，在servers中定义网络请求
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      console.log(res);
      
      dispatch(changeNewAlbumAction(res))
    })
  }
}