import React, { memo } from 'react'

import { UseLoginWrapper } from "./style"

export default memo(function ZCUseLogin() {
  return (
    <UseLoginWrapper className="sprite_02">
      <div className="set-box">
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <a className="go-login sprite_02" href="/todo">用户登录</a>
      </div> 
    </UseLoginWrapper>
  )
})
