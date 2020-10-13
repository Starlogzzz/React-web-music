import React, { memo } from 'react'
import { renderRoutes } from "react-router-config"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux";

import routes from "./router"
import store from './store/index';

import ZCAppHeader from "@/components/app-header"
import ZCAppFooter from "@/components/app-footer"
import ZCAppPlayBar from "@/pages/player/app-play-bar"

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ZCAppHeader/>
          {renderRoutes(routes)}
        <ZCAppFooter/>
        <ZCAppPlayBar/>
      </HashRouter>
    </Provider>
  )
})
