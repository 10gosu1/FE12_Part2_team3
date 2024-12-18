import React, { useState } from 'react';
import styled from 'styled-components';
import DonationModal from '../modal/DonationModal'; // 모달 컴포넌트
import DonateButton from './DonateButton';
import CreditIcon from '../assets/waiting/credit.svg';

const Card = styled.div`
  position: relative;
  width: 280px;
  height: 400px;
  background: #222;
  border-radius: 8px;
  color: white;
  z-index: 1;  // 카드의 z-index가 낮아야 모달이 카드 위로 떠야 한다
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 2;
`;

const Content = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;  // 버튼과 텍스트는 모달보다 아래에 있어야 한다
  width: 100%;
  padding-bottom: 20px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 5px 0;
  text-align: left;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #aaa;
  text-align: left;
  margin-top: 20px;
`;

const ProgressBarContainer = styled.div`
  background: #444;
  height: 8px;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  background: #ff4d4d;
`;

const GoalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-top: 10px;

  img {
    width: 20px;
    height: 20px;
  }
`;

const DonationCard = ({ donation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  const handleOpenModal = () => setIsModalOpen(true);  // 모달 열기
  const handleCloseModal = () => setIsModalOpen(false);  // 모달 닫기

  return (
    <>
      <Card key={donation.id}>
        <Image src={donation.idol.profilePicture} alt={donation.idol.name} />
        <Overlay />
        <Content>
          <DonateButton
            label="후원하기"
            onClick={handleOpenModal} // 후원하기 버튼 클릭 시 모달 열기
          />
          <Subtitle>{donation.subtitle}</Subtitle>
          <Title>{donation.title}</Title>
          <ProgressBarContainer>
            <ProgressBar
              $percentage={(donation.receivedDonations / donation.targetDonation) * 100}
            />
          </ProgressBarContainer>
          <GoalContainer>
            <img src={CreditIcon} alt="Credit Icon" />
            <span>
              {donation.targetDonation.toLocaleString()} / 현재:{' '}
              {donation.receivedDonations.toLocaleString()}
            </span>
          </GoalContainer>
        </Content>
      </Card>

      {/* 모달을 열 때만 렌더링 */}
      {isModalOpen && (
        <DonationModal donation={donation} onClose={handleCloseModal} /> // 모달 표시
      )}
    </>
  );
};

export default DonationCard;

