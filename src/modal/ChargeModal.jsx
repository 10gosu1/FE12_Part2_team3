import styled from 'styled-components';
// 1) useContext 불러오기
import { useContext, useState } from 'react';
// 2) App 에서 CreditContextAction 만 불러오기 (여기선 행동과 관련된 함수만 필요하기 때문에)
import { CreditContextAction } from './../App';
// 크레딧 충전 관련
import closeIcon from './../assets/waiting/close.svg';
import creditWhiteIcon from '../assets/waiting/credit_white.svg';
import creditIcon from '../assets/waiting/credit.svg';
import ridioIcon from '../assets/waiting/radio.png';
import radioCkIcon from '../assets/waiting/radio_ck.png';
// 모달관련
import Modal from 'react-modal';
import { enableScrollLock, disableScrollLock } from './../components/Scroll';
import './../styles/modal.css';

const CreditChargeList = styled.ul`
  > li {
    margin-bottom: 8px;
    > input {
      display: none;
      & + label {
        display: flex;
        align-items: center;
        width: 295px;
        height: 62px;
        padding: 18px 20px;
        background: url(${ridioIcon}) no-repeat calc(100% - 20px) 50% / 16px;
        background-color: #02000e;
        border: 1px solid var(--white);
        border-radius: 8px;
        color: #828282;
        font-size: 20px;
        font-weight: 700;
        line-height: 26px;
        transition: all 0.2s;
        cursor: pointer;
        > img {
          margin: 0 4px;
        }
      }
      &:checked + label {
        background: url(${radioCkIcon}) no-repeat calc(100% - 20px) 50% / 16px;
        background-color: #02000e;
        border: 1px solid #f96d69;
        color: var(--white);
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  > li + li {
    margin-top: 8px;
  }

  @media (max-width: 743px) {
    > li {
      > input {
        & + label {
          width: 100%;
        }
      }
    }
  }
`;

const ChargeModal = (props) => {
  // 모달관련
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // 모달관련
  const openModal = () => {
    setModalIsOpen(true);
    enableScrollLock();
  };

  // 모달관련
  const closeModal = () => {
    setChargeCredit(0);
    setModalIsOpen(false);
    disableScrollLock();
  };

  // 3) 불러온 함수 변수에 담기 (구조분해로 사용할 함수만 가져오기 해당 페이지에선 2개 )
  const { handleCreditPlus } = useContext(CreditContextAction);

  const [chargeCredit, setChargeCredit] = useState(0);

  const handleChangeChageCredit = (e) => {
    setChargeCredit(~~e.target.value);
  };

  return (
    <>
      <span onClick={openModal}>{props.children}</span>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        appElement={document.getElementById('root')}
        className="common_modal"
        overlayClassName="common_overlay"
      >
        <div className="modal_top">
          <div className="tit">크레딧 충전하기</div>
          <button className="close" type="button" onClick={closeModal}>
            <img src={closeIcon} alt="닫기" />
          </button>
        </div>

        <div className="modal_content">
          <CreditChargeList>
            <li>
              <input
                type="radio"
                name="credit"
                value="100"
                id="credit_100"
                onChange={handleChangeChageCredit}
              />
              <label htmlFor="credit_100">
                <img src={creditIcon} alt="크레딧" />
                <span>100</span>
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="credit"
                value="500"
                id="credit_500"
                onChange={handleChangeChageCredit}
              />
              <label htmlFor="credit_500">
                <img src={creditIcon} alt="크레딧" />
                <span>500</span>
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="credit"
                value="1000"
                id="credit_1000"
                onChange={handleChangeChageCredit}
              />
              <label htmlFor="credit_1000">
                <img src={creditIcon} alt="크레딧" />
                <span>1000</span>
              </label>
            </li>
          </CreditChargeList>
        </div>

        <div className="modal_button">
          <button
            className="btn"
            onClick={() => {
              handleCreditPlus(chargeCredit);
              setTimeout(() => {
                setChargeCredit(0);
                closeModal();
              }, 100);
            }}
          >
            <img src={creditWhiteIcon} alt="크레딧" />
            충전하기
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ChargeModal;
