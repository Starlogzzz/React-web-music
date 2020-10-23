import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from './../pages/discover/c-pages/recommend/store';
import { reducer as albumReducer } from "./../pages/discover/c-pages/album/store";
import { reducer as playerReducer } from "./../pages/player/store"

const cReducer = combineReducers({
  recommend: recommendReducer,
  album: albumReducer,
  player: playerReducer
});
  
export default cReducer;
  
