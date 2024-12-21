import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import GlobalStyle from './../styles/global';
import DonateButton from './../components/DonateButton';
import CreditIcon from './../assets/waiting/CreditIcon';
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

const ModalImage = styled.img`
  width: 160px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  color: var(--gray-200);
  margin: 0;
  font-size: 14px;
  text-align: center;
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

const CreditInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  border: 1px solid #444;
  border-radius: 4px;
  overflow: hidden;
  background-color: #272F3D;
  width: 100%; /* 입력창과 버튼의 가로 크기 동일화 */
`;

const CreditInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 700;
  background-color: #272F3D;
  line-height: 26px;
  color: white;
`;

const CreditIconStyled = styled(CreditIcon)`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  background: none;
`;

const DonateButtonStyled = styled(DonateButton)`
  margin-top: 20px;
  width: 295px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DonationModal = ({ donation, onClose }) => {
  if (!donation) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeaderContainer>
          <ModalHeader>후원하기</ModalHeader>
          <CloseBtn src={CloseIcon} onClick={onClose} />
        </ModalHeaderContainer>
        <ModalContent>
          <ModalImage src={donation.idol.profilePicture} alt={donation.title} />
          <Subtitle>{donation.subtitle}</Subtitle>
          <Title>{donation.title}</Title>
        </ModalContent>
        <CreditInputContainer>
          <CreditInput placeholder="크레딧 입력" />
          <CreditIconStyled />
        </CreditInputContainer>
        <DonateButtonStyled label="후원하기" />
      </ModalContainer>
    </Overlay>,
    document.getElementById('modal-root')
  );
};

export default DonationModal;