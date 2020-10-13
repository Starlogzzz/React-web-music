import * as actionType from "./constants"
import { Map } from "immutable"

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  upRankingList: {},
  newRankingList: {},
  originRankingList: {},

  settleSings: []
});

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionType.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners)
    case actionType.CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends", action.hotRecommends)
    case actionType.CHANGE_NEW_ALBUMS:
      return state.set("newAlbums", action.newAlbums)

    case actionType.CHANGE_UP_RANKING_LIST:
      return state.set("upRankingList", action.upRankingList)
    case actionType.CHANGE_NEW_RANKING_LIST:
      return state.set("newRankingList", action.newRankingList)
    case actionType.CHANGE_ORIGIN_RANKING_LIST:
      return state.set("originRankingList", action.originRankingList)
    case actionType.CHANGE_SETTLE_SONGER:
      return state.set("settleSings", action.settleSings)
    default:
      return state
  }
}

export default reducer;