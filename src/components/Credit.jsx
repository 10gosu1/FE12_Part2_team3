import styled from 'styled-components';
import ChargeModal from '../modal/ChargeModal';
import { useState } from 'react';

let StyleTest = styled.div`
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
`;

const Credit = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <StyleTest>
      <div className="">크레딧</div>
      <button onClick={() => setModalState((prev) => !prev)}>
        크레딧 충전하기
      </button>

      {modalState && <ChargeModal />}
    </StyleTest>
  );
};

export default Credit;
