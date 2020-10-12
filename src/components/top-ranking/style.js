import styled from 'styled-components';

export const TopRankingWrapper = styled.div`
  flex: 1;

  .header {
    height: 100px;
    display: flex;
    margin: 20px 0 0 20px;

    .image {
      position: relative;
      width: 80px;
      height: 80px;

      img {
        width: 80px;
        height: 80px;
      }
    }

    .info {
      margin: 6px 0 0 10px;

      a {
        font-size: 14px;
        font-weight: 700;
        font-family: Arial, Helvetica, sans-serif;
        color: #333;
      }

      .btn {
        margin-top: 10px;
        width: 22px;
        height: 22px;
        margin-right: 10px;
        cursor: pointer;
      }

      .play {
        background-position: -267px -205px;
      }

      .favor {
        background-position: -300px -205px;
      }
    }
  }

  .list {
    .list-item {
      position: relative;
      display: flex;
      line-height: 32px;
      height: 32px;
      align-items: center;

      :nth-child(-n+3) .rank {
        color: #c10d0c;
      }
      
      .rank {
        width: 35px;
        height: 32px;
        text-align: center;
        font-size: 16px;
      }

      .info {
        color: #000;
        width: 170px;
        height: 17px;
        line-height: 17px;
        display: flex;
        justify-content: space-between;

        .name {
          flex: 1;
        }

        .operate {
          display: flex;
          align-items: center;
          display: none;
          width: 82px;

          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }

          .play {
            background-position: -267px -268px;
          }

          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
          }

          .favor {
            background-position: -297px -268px;
          }
        }
      }

      

      &:hover {
        .operate {
          display: block;
        }
      }
    }
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    height: 32px;
    align-items: center;
    margin-right: 32px;

    a {
      color: #000;
    }
  }
`