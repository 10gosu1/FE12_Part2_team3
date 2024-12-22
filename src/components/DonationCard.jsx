import React, { useState } from 'react';
import styled from 'styled-components';
import DonationModal from '../modal/DonationModal';
import DonateButton from './DonateButton';
import CreditIcon from '../assets/waiting/credit.svg';

const Card = styled.div`
  position: relative;
  width: 280px;
  height: 400px;
  background: #222;
  border-radius: 8px;
  color: white;
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
`;

const Content = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
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
  gap: 8px;
  margin-top: 10px;

  img {
    width: 20px;
    height: 20px;
  }
`;

const DeadlineContainer = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: white; /* 글자색을 흰색으로 변경 */
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between; /* targetDonation과 남은 날짜를 한 줄에 배치 */
  align-items: center;
  margin-top: 10px;
`;

const DonationCard = ({ donation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(
    (donation.receivedDonations / donation.targetDonation) * 100,
  );

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setProgress((donation.receivedDonations / donation.targetDonation) * 100);
    setIsModalOpen(false);
  };

  // Deadline 계산 함수
  const calculateRemainingDays = (deadline) => {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    const timeDiff = deadlineDate - currentDate;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24)); // 밀리초를 일로 변환
    return daysRemaining;
  };

  const remainingDays = calculateRemainingDays(donation.deadline);

  return (
    <>
      <Card>
        <Image src={donation.idol.profilePicture} alt={donation.idol.name} />
        <Overlay />
        <Content>
          <DonateButton label="후원하기" onClick={handleOpenModal} />
          <Subtitle>{donation.subtitle}</Subtitle>
          <Title>{donation.title}</Title>
          <ProgressBarContainer>
            <ProgressBar $percentage={progress} />
          </ProgressBarContainer>
          <InfoContainer>
            <GoalContainer>
              <img src={CreditIcon} alt="Credit Icon" />
              <span>{donation.targetDonation.toLocaleString()}</span>
            </GoalContainer>

            <DeadlineContainer>{remainingDays}일 남음</DeadlineContainer>
          </InfoContainer>
        </Content>
      </Card>
      {isModalOpen && (
        <DonationModal donation={donation} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default DonationCard;
