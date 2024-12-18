import React, { useState } from 'react'; 
import styled from 'styled-components';
import CreditIcon from '../assets/waiting/credit.svg';
import CloseIcon from '../assets/mypage/icon_close.svg'; 
import DonateButton from '../components/DonateButton';
import GlobalStyle from '../styles/global';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: all;
`;

const ModalContainer = styled.div`
  background-color: var(--black-100);
  padding: 20px;
  border-radius: 8px;
  width: 327px;
  max-width: 100%;
  height: 509px;
  max-height: 90vh;  /* 화면 크기에 따라 모달 크기 조정 */
  color: var(--white);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 3000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;  /* 스크롤 가능하도록 설정 */
`;

const ModalHeader = styled.h2`
  color: var(--white);
  font-size: 24px;
`;

const ModalContent = styled.div`
  margin-top: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 158px;
  height: 206px;
  object-fit: cover;
  border-radius: 8px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-top: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  position: relative;
  
  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #444;
    margin-right: 10px;
    background-color: #272F3D;
    color: var(--white);
  }

  img {
    position: absolute;
    right: 10px;
    width: 20px;
    height: 20px;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
`;

const DonationModal = ({ donation, onClose }) => {
  const [credit, setCredit] = useState('');

  const handleCreditChange = (e) => setCredit(e.target.value);

  const handleDonate = () => {
    alert(`후원금액 ${credit} 크레딧으로 ${donation.title}에 후원하셨습니다.`);
    onClose();
  };

  return (
    <>
      <GlobalStyle />
      <ModalOverlay onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClose}>
            <img src={CloseIcon} alt="Close" />
          </CloseButton>
          <ModalHeader>후원하기</ModalHeader>  
          <ModalContent>
            <Image src={donation.idol.profilePicture} alt={donation.idol.name} />
            <Subtitle>{donation.subtitle}</Subtitle>
            <Title>{donation.title}</Title>

            <InputContainer>
              <input
                type="number"
                placeholder="크레딧 입력"
                value={credit}
                onChange={handleCreditChange}
              />
              <img src={CreditIcon} alt="Credit Icon" />
            </InputContainer>

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px' }}>
              <DonateButton label="후원하기" onClick={handleDonate} />
            </div>
          </ModalContent>
        </ModalContainer>
      </ModalOverlay>
    </>
  );
};

export default DonationModal;