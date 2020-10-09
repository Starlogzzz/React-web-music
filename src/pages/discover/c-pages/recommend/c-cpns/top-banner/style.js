import styled from "styled-components";

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;

  .banner {
    height: 283.89px;
    background-color: red;

    display: flex;
    position: relative;
  }

  /* .ant-carousel .slick-dots-bottom {
    bottom: 20px;
  }

  .ant-carousel ul li button {
    width: 20px;
    height: 20px;
    background: url(${require("@/assets/img/banner_sprite.png")});
    background-position: 3px -343px;
  }
  .ant-carousel ul .slick-active button {
    width: 20px;
    height: 20px;
    background: url(${require("@/assets/img/banner_sprite.png")});
    background-position: -16px -343px;
  } */
`

export const BannerLeft = styled.div`
  width: 730px;
  .banner-item {
    overflow: hidden;
    height: 283.89px;
    .image {
      height: 100%
    }
  }
`
export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank",
})`
  width: 254px;
  height: 283.89px;
  background: url(${require("@/assets/img/download.png")});
  text-decoration: none;
  .download {
    position: relative;
    top: 253px;
    left: 13px;
    color: #8d8d8d;
  }
`
export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`