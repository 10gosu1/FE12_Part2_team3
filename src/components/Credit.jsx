import React from 'react';
import styled from 'styled-components';
import ChargeModal from '../modal/ChargeModal';
import creditImg from './../assets/waiting/credit.svg/';
// 1) useContext 불러오기
import { useState, useContext } from 'react';
// 2) App 에서 CreditContextValue 만 불러오기 (여기선 크레딧갯수 필요하기 때문에)
import { CreditContextValue } from './../App';

let MyCreditStyle = styled.div`
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 30px 78px 40px;
  border: 1px solid rgba(241, 238, 249, 0.8);
  border-radius: 8px;
  > .content {
    > .tit {
      margin-bottom: 14px;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
    }
    > .credit {
      display: flex;
      align-items: center;
      font-size: 24px;
      font-weight: 700;
      line-height: 26px;
      color: rgba(255, 255, 255, 0.87);
      > img {
        margin-right: 4px;
      }
    }
  }
  > .credit_toggle {
    position: absolute;
    right: 78px;
    top: 50%;
    transform: translateY(-50%);
    color: #f96d69;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.8px;
    line-height: 26px;
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    margin-top: 0;
    margin-bottom: 54px;
    padding: 35px 64px;
    > .credit_toggle {
      right: 64px;
    }
  }
  @media (max-width: 743px) {
    margin-top: 15px;
    margin-bottom: 40px;
    padding: 20px;
    background-color: var(--black-200);
    > .content {
      > .tit {
        margin-bottom: 8px;
        font-size: 12px;
      }
      > .credit {
        font-size: 20px;
      }
    }
    > .credit_toggle {
      right: 20px;
      font-size: 13px;
      line-height: 2;
      letter-spacing: 0.65px;
    }
  }
`;

const Credit = () => {
  // 3) 불러온 함수 변수에 담기
  const myCredit = useContext(CreditContextValue);
  return (
    <>
      <MyCreditStyle>
        <div className="content">
          <div className="tit">내 크레딧</div>
          <div className="credit">
            <img src={creditImg} alt="크레딧" />
            <span>{myCredit.toLocaleString()}</span>
          </div>
        </div>
        <div className="credit_toggle">
          <ChargeModal>충전하기</ChargeModal>
        </div>
        {/* 4) 그대로 사용 */}
      </MyCreditStyle>
    </>
  );
};

export default Credit;
