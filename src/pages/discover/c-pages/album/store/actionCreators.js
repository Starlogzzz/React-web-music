import * as actionTypes from "./constants";

import {
  getNewAlbums 
} from "@/services/recommend";

const changeHotNewAlbumAction = (res) => ({
  type: actionTypes.HOT_NEW_ALBUMS,
  hotNewAblums: res.monthData
})

export const getHotNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeHotNewAlbumAction(res))
    })
  }
}