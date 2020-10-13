import { getSongDetail } from "@/services/player"

import * as actionTypes from "./constants"

const changeSongDetailAction = res => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: res.songs[0]
})

export const getSongDetailAction = (ids) => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeSongDetailAction(res))
    })
  }
}