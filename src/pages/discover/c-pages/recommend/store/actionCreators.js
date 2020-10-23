import * as actionTypes from "./constants";

import { 
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
  getArtistList
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

// 不同排行榜的action
const changeUpRankingListAction = res => ({
  type: actionTypes.CHANGE_UP_RANKING_LIST,
  upRankingList: res.playlist
})
const changeNewRankingListAction = res => ({
  type: actionTypes.CHANGE_NEW_RANKING_LIST,
  newRankingList: res.playlist
})
const changeOriginRankingListAction = res => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING_LIST,
  originRankingList: res.playlist
})

// 入驻歌手
const changeSettleSingsAction = res => ({
  type: actionTypes.CHANGE_SETTLE_SONGER,
  settleSings: res.artists
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
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (id) => {
  return dispatch => {
    getTopList(id).then(res => {
 
      switch(id) {
        case 19723756:
          return dispatch(changeUpRankingListAction(res))
        case 3779629:
          return dispatch(changeNewRankingListAction(res))
        case 2884035:
          return dispatch(changeOriginRankingListAction(res))
        default:
      }
    })
  }
}

export const getSettleSingers = () => {
  return dispath => {
    getArtistList(5, -1).then(res => {
      dispath(changeSettleSingsAction(res))
    })
  }
}