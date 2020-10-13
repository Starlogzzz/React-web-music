import * as actionTypes from "./constants"
import { Map } from 'immutable';

const defaultState = Map({
  currentSong: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong)
    default:
      return state
  }
}

export default reducer