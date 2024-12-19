// 1) useContext 불러오기
import { useContext } from 'react';
// 2) App 에서 CreditContextAction 만 불러오기 (여기선 행동과 관련된 함수만 필요하기 때문에)
import { CreditContextAction } from './../App';
import styled from 'styled-components';

const BtnListstyle = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  > button {
    flex: 1;
  }
`;

const ChargeModal = () => {
  // 3) 불러온 함수 변수에 담기 (구조분해로 사용할 함수만 가져오기 해당 페이지에선 2개 )
  const { handleCreditPlus, handleCreditMinus } =
    useContext(CreditContextAction);
  return (
    <BtnListstyle>
      {/* 4) 각 함수 알맞게 사용 */}
      <button onClick={() => handleCreditPlus(1000)} className="btn">
        +1000
      </button>
      <button onClick={() => handleCreditPlus(5000)} className="btn">
        +5000
      </button>
      <button onClick={() => handleCreditPlus(10000)} className="btn">
        +10000
      </button>
      <button onClick={() => handleCreditMinus(1000)} className="btn">
        -1000
      </button>
      <button onClick={() => handleCreditMinus(5000)} className="btn">
        -5000
      </button>
      <button onClick={() => handleCreditMinus(10000)} className="btn">
        -10000
      </button>
    </BtnListstyle>
  );
};

export default ChargeModal;
