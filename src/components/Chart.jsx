import styled from 'styled-components';
import VoteModal from '../modal/VoteModal';
import LackModal from '../modal/LackModal';
import { useState } from 'react';

let StyleTest = styled.div`
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
`;

const Chart = () => {
  const [modalState1, setModalState1] = useState(false);
  const [modalState2, setModalState2] = useState(false);

  return (
    <StyleTest>
      <div className="">이달의 차트</div>

      <button onClick={() => setModalState1((prev) => !prev)}>
        차트 투표하기
      </button>
      <button onClick={() => setModalState2((prev) => !prev)}>
        차트 투표하기 (크레딧 부족)
      </button>

      {modalState1 && <VoteModal />}
      {modalState2 && <LackModal />}
    </StyleTest>
  );
};

export default Chart;
