import React from 'react';
import GlobalStyle from './../styles/global';
import box from './../assets/mypage/mypage_box.png';
import close from './../assets/mypage/icon_close.svg';
import styled from 'styled-components';

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
  color: var(--white);
  font-weight: 700;
  line-height: 1.8033;
`;

const InterestIdol = styled.ul`
  display: flex;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  > li {
    position: relative;
    width: 100px;
    margin-right: 22px;
    > .close {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        transform: scale(1.1);
      }
    }
    > .line {
      width: 100%;
      height: 100px;
      overflow: hidden;
      border-radius: 999px;
      border: 1.5px solid var(--coralpink);
      > .thum {
        overflow: hidden;
        border-radius: 999px;
        padding: 5px;
        > img {
          border-radius: 999px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    > .content {
      text-align: center;
      margin-top: 8px;
      > .name {
        color: var(--white);
        font-size: 16px;
        font-weight: 700;
        line-height: 1.625;
      }
      > .group {
        margin-top: 2px;
        color: rgba(255, 255, 255, 0.6);
        font-size: 16px;
      }
    }
  }
`;

const Mypage = () => {
  return (
    <>
      <GlobalStyle />
      <section id="mypage">
        <Inner>
          <Title>내가 관심있는 아이돌</Title>
          <InterestIdol>
            <li>
              <div className="close">
                <img src={close} alt="삭제하기" />
              </div>
              <div className="line">
                <div className="thum">
                  <img src={box} alt="" />
                </div>
              </div>
              <div className="content">
                <div className="name">리사</div>
                <div className="group">블랙핑크</div>
              </div>
            </li>
            <li>
              <div className="close">
                <img src={close} alt="삭제하기" />
              </div>
              <div className="line">
                <div className="thum">
                  <img src={box} alt="" />
                </div>
              </div>
              <div className="content">
                <div className="name">리사</div>
                <div className="group">블랙핑크</div>
              </div>
            </li>
            <li>
              <div className="close">
                <img src={close} alt="삭제하기" />
              </div>
              <div className="line">
                <div className="thum">
                  <img src={box} alt="" />
                </div>
              </div>
              <div className="content">
                <div className="name">리사</div>
                <div className="group">블랙핑크</div>
              </div>
            </li>
            <li>
              <div className="close">
                <img src={close} alt="삭제하기" />
              </div>
              <div className="line">
                <div className="thum">
                  <img src={box} alt="" />
                </div>
              </div>
              <div className="content">
                <div className="name">리사</div>
                <div className="group">블랙핑크</div>
              </div>
            </li>
            <li>
              <div className="close">
                <img src={close} alt="삭제하기" />
              </div>
              <div className="line">
                <div className="thum">
                  <img src={box} alt="" />
                </div>
              </div>
              <div className="content">
                <div className="name">리사</div>
                <div className="group">블랙핑크</div>
              </div>
            </li>
          </InterestIdol>
        </Inner>
      </section>
    </>
  );
};

export default Mypage;
