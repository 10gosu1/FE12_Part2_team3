import React from 'react';
import styled from 'styled-components';
import ChargeModal from '../modal/ChargeModal';
// 1) useContext 불러오기
import { useState, useContext } from 'react';
// 2) App 에서 CreditContextValue 만 불러오기 (여기선 크레딧갯수 필요하기 때문에)
import { CreditContextValue } from './../App';

let StyleTest = styled.div`
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
`;

const Credit = () => {
  const [modalState, setModalState] = useState(false);
  // 3) 불러온 함수 변수에 담기
  const myCredit = useContext(CreditContextValue);
  return (
    <StyleTest>
      {/* 4) 그대로 사용 */}
      <div className="">내 크레딧 {myCredit}</div>
      <button onClick={() => setModalState((prev) => !prev)}>
        크레딧 충전하기
      </button>
      {modalState && <ChargeModal />}
    </StyleTest>
  );
};

export default Credit;
