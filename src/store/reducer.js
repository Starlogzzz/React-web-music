import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from './../pages/discover/c-pages/recommend/store';
import { reducer as albumReducer } from "./../pages/discover/c-pages/album/store";

const cReducer = combineReducers({
    recommend: recommendReducer,
    album: albumReducer
  });
  
  export default cReducer;
  
