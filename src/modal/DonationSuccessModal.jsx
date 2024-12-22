import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CloseIcon from './../assets/waiting/close.svg';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContainer = styled.div`
  background: var(--black-200);
  padding: 20px;
  border-radius: 8px;
  width: 360px;
  max-width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const ModalHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalHeader = styled.h2`
  margin: 0;
  font-size: 20px;
  color: var(--white);
`;

const CloseBtn = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin: 10px 0;
  color: var(--white);
  width: 100%;
`;

const DonationSuccessModal = ({ creditValue, onClose }) => {
  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeaderContainer>
          <ModalHeader>후원 완료</ModalHeader>
          <CloseBtn src={CloseIcon} onClick={onClose} />
        </ModalHeaderContainer>
        <ModalContent>
          <Title>크레딧을 후원했습니다!🎉 </Title>
        </ModalContent>
      </ModalContainer>
    </Overlay>,
    document.getElementById('modal-root')
  );
};

export default DonationSuccessModal;


