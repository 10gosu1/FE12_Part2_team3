import styled from 'styled-components';
import ChargeModal from '../modal/ChargeModal';
import creditImg from './../assets/waiting/credit.svg/';
// 1) useContext 불러오기
import { useState, useContext } from 'react';
// 2) App 에서 CreditContextValue 만 불러오기 (여기선 크레딧갯수 필요하기 때문에)
import { CreditContextValue } from './../App';

let MyCreditStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  padding: 30px 78px;
  border: 1px solid rgba(241, 238, 249, 0.8);
  border-radius: 8px;
  > .content {
    margin-right: auto;
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
    color: #f96d69;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.8px;
    line-height: 26px;
    cursor: pointer;
  }
`;

const Credit = () => {
  const [modalState, setModalState] = useState(false);
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
        <div
          className="credit_toggle"
          onClick={() => setModalState((prev) => !prev)}
        >
          충전하기
        </div>
        {/* 4) 그대로 사용 */}
      </MyCreditStyle>
      {modalState && <ChargeModal />}
    </>
  );
};

export default Credit;
