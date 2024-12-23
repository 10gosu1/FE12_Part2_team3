import React, { useState, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Button from './../components/DonateButton'; 
import CreditIcon from './../assets/waiting/CreditIcon';
import CloseIcon from './../assets/waiting/close.svg';
import { CreditContextValue, CreditContextAction } from './../App';
import DonationSuccessModal from './DonationSuccessModal';

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
  width: 100%;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0;
  color: var(--white);
  width: 100%;
`;

const CreditInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  border: 1px solid ${({ isError }) => (isError ? 'red' : '#444')};
  border-radius: 4px;
  overflow: hidden;
  background-color: #272f3d;
  width: 100%;
`;

const CreditInput = styled.input`
  flex: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 700;
  background-color: #272f3d;
  line-height: 26px;
  color: white;

  -webkit-appearance: none;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-ms-clear {
    display: none;
  }
`;

const WarningMessage = styled.p`
  color: red;
  font-size: 16px;
  margin-top: 10px;
`;

const CreditIconStyled = styled(CreditIcon)`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  background: none;
  display: inline-block;
`;

const DonateButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  margin-top: 20px;
`;

const DonationModal = ({ donation, onClose }) => {
  const myCredit = useContext(CreditContextValue); // 크레딧 상태 가져오기
  const { setMyCredit } = useContext(CreditContextAction); // setMyCredit 가져오기
  const [creditInput, setCreditInput] = useState('');
  const [error, setError] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // 성공 모달 상태 추가

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // 배경 스크롤 비활성화
    return () => {
      document.body.style.overflow = 'auto'; // 모달 닫힐 때 스크롤 활성화
    };
  }, []);

  const handleInputChange = (e) => {
    setCreditInput(e.target.value);
    setError(false);
  };

  const handleDonate = () => {
    const creditValue = parseInt(creditInput, 10);

    if (isNaN(creditValue) || creditValue <= 0) {
      setError(true);
      return;
    }

    if (creditValue > myCredit) {
      setError(true);
      return;
    }

    setMyCredit((prevCredit) => {
      const updatedCredit = prevCredit - creditValue;
      localStorage.setItem('myCredit', updatedCredit); // 로컬 스토리지 업데이트
      return updatedCredit;
    });

    donation.receivedDonations += creditValue;
    setIsSuccessModalOpen(true);
    setCreditInput('');
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
    onClose();
  };

  return ReactDOM.createPortal(
    <>
      <Overlay onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <ModalHeaderContainer>
            <ModalHeader>후원하기</ModalHeader>
            <CloseBtn src={CloseIcon} onClick={onClose} />
          </ModalHeaderContainer>
          <ModalContent>
            <ModalImage
              src={donation.idol.profilePicture}
              alt={donation.title}
            />
            <Subtitle>{donation.subtitle}</Subtitle>
            <Title>{donation.title}</Title>
          </ModalContent>
          <CreditInputContainer isError={error}>
            <CreditInput
              type="number"
              placeholder="크레딧 입력"
              value={creditInput}
              onChange={handleInputChange}
            />
            <CreditIconStyled />
          </CreditInputContainer>
          {error && (
            <WarningMessage>
              갖고 있는 크레딧보다 더 많이 후원할 수 없어요
            </WarningMessage>
          )}
          <DonateButtonContainer>
            <Button
              label="후원하기"
              hasValue={!!creditInput}
              onClick={handleDonate}
            />
          </DonateButtonContainer>
        </ModalContainer>
      </Overlay>
      {isSuccessModalOpen && (
        <DonationSuccessModal
          creditValue={creditInput}
          onClose={handleSuccessModalClose}
        />
      )}
    </>,
    document.getElementById('modal-root')
  );
};

export default DonationModal;