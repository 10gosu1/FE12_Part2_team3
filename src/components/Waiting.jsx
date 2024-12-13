import styled from 'styled-components';
import SponsorModal from '../modal/SponsorModal';
import { useState } from 'react';

let StyleTest = styled.div`
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
`;

const Waiting = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <StyleTest>
      <div className="">후원을 기다리는 조공</div>
      <button onClick={() => setModalState((prev) => !prev)}>후원하기</button>
      {modalState && <SponsorModal />}
    </StyleTest>
  );
};

export default Waiting;
