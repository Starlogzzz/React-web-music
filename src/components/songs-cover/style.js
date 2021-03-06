import styled from "styled-components";

export const SongsCoverWrapper = styled.div`
  width: 140px;
  height: 204px;
  margin: 20px ${props => (props.right || 0)} 20px 0;
  .cover-top {
    position: relative;
    width: 140px;
    height: 140px;

    &>img {
      width: 100%;
      height: 100%;
    }
    .goTo {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .cover {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;
      color: #ccc;
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: 0 -537px;
        color: #ccc;
        height: 27px;
        .info_left {
          .nb {
            display: inline-block;
          }
          .erji {
            display: inline-block;
            width: 14px;
            height: 11px;
            margin-right: 5px;
            background-position: 0 -24px;
          }
        }
        .play {
            display: inline-block;
            position: absolute;
            right: 10px;
            bottom: 5px;
            width: 16px;
            height: 17px;
            background-position: 0 0;
          }
      }
    }
  }

  .cover-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
    padding-bottom: 30px;
    line-height: 18px;
  }

`