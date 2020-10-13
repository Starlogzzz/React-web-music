import styled from "styled-components";

export const AppPlayerBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 53px;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 47px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }
`
export const Control = styled.div`
  display: flex;
  align-items: center;
  width: 137px;
  height: 42px;

  .prev, .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0  -165px;
  }

  .next {
    background-position: -80px -130px;
  }
`
export const PlayInfo = styled.div`
  width: 642px;
  display: flex;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    width: 608px;
    margin-left: 10px;
    .song {
      position: relative;
      top: 8px;
      left: 8px;
      .song-name {
        font-size: 12px;
        color: #e8e8e8;
      }
      .singer-name {
        margin-left: 15px;
        color: #9b9b9b;
      }
    }
  }
  .progress {
    display: flex;
    align-items: center;

    .ant-slider {
      width: 493px;
      margin-right: 10px;

      .ant-slider-rail {
        height: 9px;
        background: url(${require("@/assets/img/progress_bar.png")}) right 0;
      }

      .ant-slider-track {
        height: 9px;
        background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
      }

      .ant-slider-handle {
        width: 22px;
        height: 24px;
        border: none;
        margin-top: -7px;
        background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
      }
    }

    .time {
      .now-time {
        color: #a1a1a1;
      }
      .divider {
        margin: 0 3px;
      }
      .duration {
        color: #797979;
      }
    }
  }
`
export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 5px;
  margin-left: 20px;

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    
    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: ${props => {
        switch(props.sequence) {
          case 1:
            return "-66px -248px"
          case 2:
            return "-66px -344px"
          default:
            return "-3px -344px"
        }
      }};
    }

    .playlist {
      width: 59px;
      background-position: -42px -68px;
    }
  }
`