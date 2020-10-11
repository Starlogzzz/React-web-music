import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
  .content {
    display: flex;
    position: relative;
    align-items: center;
    height: 186px;
    background: #f5f5f5;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    .arrow {
      width: 17px;
      height: 17px;
      cursor: pointer;
    }
    .arrow-left {
      background-position: -260px -75px;
    }

    .arrow-right {
      background-position: -300px -75px;
    }

    .album {
      width: 645px;
      height: 180px;
      overflow: hidden;
    }

    .page {
      display: flex !important;
      justify-content: space-between;
      align-items: center;
    }
  }
`