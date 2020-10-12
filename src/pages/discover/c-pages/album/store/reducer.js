import * as actionType from "./constants";
import { Map } from "immutable";

const defaultState = Map({
  hotNewAblums: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionType.HOT_NEW_ALBUMS:
      return state.set("hotNewAblums", action.hotNewAblums)
    default:
      return state
  }
}

export default reducer