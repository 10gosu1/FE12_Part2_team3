// 모달관련
import closeIcon from './../assets/waiting/close.svg';
import { useState } from 'react';
import Modal from 'react-modal';
import { enableScrollLock, disableScrollLock } from './../components/Scroll';
import './../styles/modal.css';
import creditIcon from '../assets/waiting/credit.svg';
import styled from 'styled-components';

const LackStyle = styled.div`
  width: 340px;
  text-align: center;
  > .thum {
    margin-bottom: 30px;
    > img {
      width: 113px;
      transform: scale(1.5);
    }
  }
  > .txt {
    padding-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
    > span {
      color: var(--hotpink);
    }
  }
  @media (max-width: 743px) {
    width: 100%;
  }
`;

const LackModal = (props) => {
  // 모달관련
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // 모달관련
  const openModal = () => {
    setModalIsOpen(true);
    enableScrollLock();
  };

  // 모달관련
  const closeModal = () => {
    setModalIsOpen(false);
    disableScrollLock();
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
          <div className="tit"></div>
          <button className="close" type="button" onClick={closeModal}>
            <img src={closeIcon} alt="닫기" />
          </button>
        </div>

        <div className="modal_content">
          <LackStyle>
            <div className="thum">
              <img src={creditIcon} alt="크레딧" />
            </div>
            <div className="txt">
              앗! 투표하기 위한&nbsp;<span>크레딧</span>이 부족해요
            </div>
          </LackStyle>
        </div>

        <div className="modal_button">
          <button className="btn" onClick={closeModal}>
            확인
          </button>
        </div>
      </Modal>
    </>
  );
};

export default LackModal;
