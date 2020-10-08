import React from "react"

import ZCDiscover from "@/pages/discover"
import ZCMine from "@/pages/mine"
import ZCFriend from "@/pages/friend"
import { Redirect } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path: "/discover",
    component: ZCDiscover
  },
  {
    path: "/mine",
    component: ZCMine
  },
  {
    path: "/friend",
    component: ZCFriend
  },
]

export default routes;