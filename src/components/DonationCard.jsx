import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DonationModal from '../modal/DonationModal';
import CreditIcon from '../assets/waiting/credit.svg';
import DonationCover from '../assets/waiting/donationCover.png';
import DonateButton from './DonateButton';

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  min-width: 200px; 
  aspect-ratio: 7 / 10;
  background: #222;
  border-radius: 8px;
  color: white;
  overflow: visible; 

  @media (max-width: 375px) {
    aspect-ratio: 7 / 12;
  }

  @media (min-width: 376px) and (max-width: 744px) {
    aspect-ratio: 7 / 10.5;
  }

  @media (min-width: 745px) and (max-width: 1920px) {
    aspect-ratio: 7 / 10.2;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 62%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 62%;
  background-image: url(${DonationCover});
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  padding: 15px;
  text-align: center;
  background-color: var(--black-200);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(38%);
  box-sizing: border-box;

  @media (max-width: 375px) {
    padding: 10px;
    height: calc(40%);
  }

  @media (min-width: 376px) and (max-width: 744px) {
    padding: 12px;
    height: calc(39%);
  }

  @media (min-width: 745px) and (max-width: 1920px) {
    padding: 14px;
    height: calc(38.5%);
  }
`;

const DonateButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
`;

const Title = styled.h3`
  font-size: 20px;
  margin: 5px 0;
  text-align: left;

  @media (max-width: 375px) {
    font-size: 14px;
    margin: 3px 0;
  }

  @media (min-width: 376px) and (max-width: 744px) {
    font-size: 16px;
    margin: 4px 0;
  }

  @media (min-width: 745px) and (max-width: 1920px) {
    font-size: 18px;
    margin: 4.5px 0;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #aaa;
  margin: 5px 0;
  text-align: left;

  @media (max-width: 375px) {
    font-size: 12px;
    margin: 3px 0;
  }

  @media (min-width: 376px) and (max-width: 744px) {
    font-size: 14px;
    margin: 4px 0;
  }

  @media (min-width: 745px) and (max-width: 1920px) {
    font-size: 15px;
    margin: 4.5px 0;
  }
`;

const ProgressBarContainer = styled.div`
  background: #444;
  height: 1px; 
  border-radius: 1px; 
  margin: 10px 0;
  overflow: visible; 
  min-height: 1px;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  background: var(--coralpink);
  border-radius: 1px; 
`;

const GoalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  img {
    width: 16px;
    height: 16px;

    @media (max-width: 744px) {
      width: 14px;
      height: 14px;
    }

    @media (max-width: 375px) {
      width: 12px;
      height: 12px;
    }
  }

  @media (max-width: 744px) {
    font-size: 12px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const DeadlineContainer = styled.div`
  font-size: 14px;
  color: white;

  @media (max-width: 744px) {
    font-size: 12px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const DonationCard = ({ donation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(() => {
    const savedProgress = localStorage.getItem(`progress-${donation.id}`);
    return savedProgress
      ? parseFloat(savedProgress)
      : (donation.receivedDonations / donation.targetDonation) * 100;
  });

  useEffect(() => {
    localStorage.setItem(`progress-${donation.id}`, progress);
  }, [progress, donation.id]);

  const handleOpenModal = () => {
    if (progress >= 100) {
      alert('크레딧 조공이 마감되었습니다!');
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setProgress((donation.receivedDonations / donation.targetDonation) * 100);
    setIsModalOpen(false);
  };

  const calculateRemainingDays = (deadline) => {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    const timeDiff = deadlineDate - currentDate;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysRemaining;
  };

  const remainingDays = calculateRemainingDays(donation.deadline);

  return (
    <>
      <Card>
        <Image src={donation.idol.profilePicture} alt={donation.idol.name} />
        <Overlay />
        <Content>
          <DonateButtonContainer>
            <DonateButton
              label="후원하기"
              hasValue={true}
              onClick={handleOpenModal}
            />
          </DonateButtonContainer>
          <Subtitle>{donation.subtitle}</Subtitle>
          <Title>{donation.title}</Title>
          <ProgressBarContainer>
            <ProgressBar $percentage={progress} />
          </ProgressBarContainer>
          <GoalContainer>
            <div>
              <img src={CreditIcon} alt="Credit Icon" />
              <span>{donation.targetDonation.toLocaleString()}</span>
            </div>
            <DeadlineContainer>{remainingDays}일 남음</DeadlineContainer>
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