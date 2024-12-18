import React, { useState } from 'react';
import styled from 'styled-components';
import CreditIcon from '../assets/waiting/credit.svg';
import DonateButton from '../components/DonateButton';
import GlobalStyle from '../styles/global';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2000; /* Swiper보다 높은 z-index */
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: all; /* 모달을 클릭할 수 있도록 */
`;

const ModalContainer = styled.div`
  background-color: var(--black-100);
  padding: 20px;
  border-radius: 8px;
  width: 327px;
  height: 509px;
  color: var(--white);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 3000; /* 모달이 Swiper 위에 위치하도록 */ -> 멘토님 질문 : swiper 랑 모달창이랑 독립적으로 관리하는법 + 모달창이 잘려서 보이는 현상 해결방법
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalHeader = styled.h2`
  color: var(--white);
  font-size: 24px;
`;

const ModalContent = styled.div`
  margin-top: 20px;
  text-align: left;
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
    width: 20px;
    height: 20px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: var(--white);
  font-size: 20px;
  cursor: pointer;
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
          <CloseButton onClick={onClose}>&times;</CloseButton>
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
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <DonateButton label="후원하기" onClick={handleDonate} />
            </div>
          </ModalContent>
        </ModalContainer>
      </ModalOverlay>
    </>
  );
};

export default DonationModal;