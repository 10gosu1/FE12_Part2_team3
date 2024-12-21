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

const DonationCard = ({ donation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
      {isModalOpen && (
        <DonationModal donation={donation} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default DonationCard;
