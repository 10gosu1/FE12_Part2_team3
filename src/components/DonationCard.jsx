// DonationCard.jsx
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 280px;
  background: #222;
  border-radius: 8px;
  overflow: hidden;
  color: white;
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 5px 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #aaa;
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
  width: ${(props) => props.percentage}%;
  background: #ff4d4d;
`;

const DonationCard = ({ donation }) => {
  return (
    <Card key={donation.id}>
      <Image src={donation.idol.profilePicture} alt={donation.idol.name} />
      <Content>
        <Subtitle>{donation.subtitle}</Subtitle>
        <Title>{donation.title}</Title>
        <ProgressBarContainer>
          <ProgressBar
            percentage={(donation.receivedDonations / donation.targetDonation) * 100}
          />
        </ProgressBarContainer>
        <p>
          목표: {donation.targetDonation.toLocaleString()}원 / 현재:{' '}
          {donation.receivedDonations.toLocaleString()}원
        </p>
      </Content>
    </Card>
  );
};

export default DonationCard;

