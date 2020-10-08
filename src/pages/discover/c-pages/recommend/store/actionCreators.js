import * as actionTypes from "./constants";

import { getTopBanners } from '@/services/recommend';

const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
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