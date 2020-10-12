import React, { memo } from 'react'
import PropTypes from "prop-types"

import { HeaderWrapper } from "./style"
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const ZCThemeHeaderRCM =  memo(function(props) {
  const { title, keywords, path, isShowLink } = props;
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="todo">{item}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      {
        !isShowLink ?  
        <div className="right">
          <NavLink to={path}>更多</NavLink>
          <i className={"icon sprite_02"}></i>
        </div> : null
      }
      
    </HeaderWrapper>
  )
})

ZCThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
  path: PropTypes.string
}

ZCThemeHeaderRCM.defaultProps = {
  keywords: []
}



export default ZCThemeHeaderRCM
