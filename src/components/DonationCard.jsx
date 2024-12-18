// DonationCard.jsx
import React from 'react';
import styled from 'styled-components';
import DonateButton from './DonateButton';
import CreditIcon from '../assets/waiting/credit.svg'; // SVG 파일 경로로 사용

// Styled-components
const Container = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
`;

const Card = styled.div`
  position: relative;
  width: 280px;
  height: 400px;
  background: #222;
  border-radius: 8px;
  overflow: hidden;
  color: white;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%; /* 아래쪽 40%를 오버레이로 차지 */
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); /* 검정색에서 투명으로 변하는 그라데이션 */
  z-index: 1; /* 이미지 위에 오버레이가 표시되도록 설정 */
`;

const Content = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2; /* Content는 오버레이 위에 표시되어야 함 */
  width: 100%; /* Content가 카드의 너비에 맞게 조정 */
  padding-bottom: 20px; /* 버튼과 텍스트 사이의 여백 */
  text-align: center; /* 내용 중앙 정렬 */
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
  gap: 8px; /* 아이콘과 텍스트 사이 간격 */
  margin-top: 10px;

  img {
    width: 20px; /* 아이콘 크기 */
    height: 20px;
  }
`;

const DonationCard = ({ donation }) => {
  return (
    <Card key={donation.id}>
      <Image src={donation.idol.profilePicture} alt={donation.idol.name} />
      <Overlay />
      <Content>
        <DonateButton
          label="후원하기"
          onClick={() => alert(`${donation.title}에 후원합니다.`)}
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
  );
};

export default DonationCard;

