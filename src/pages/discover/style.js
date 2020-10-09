import styled from 'styled-components';

export const DiscoverWrapper = styled.div`
  height: 30px;
  background-color: #C20C0C;
`
export const TopMenu = styled.div`
  position: relative;
  padding-left: 180px;
  top: -5px;
  a {
    display: inline-block;
    height: 20px;
    color: #fff;
    padding: 0 13px;
    margin: 7px 17px 0;
    border-radius: 20px;
    line-height: 21px;
    &:hover, &.active {
      text-decoration: none;
      background: #9B0909;
    }
  }
`