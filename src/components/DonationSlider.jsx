// DonationSlider.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import DonationCard from './DonationCard';

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

const CardContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => props.translateX}px);
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  img {
    width: 40px;
    height: auto;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const DonationSlider = ({ donations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 300; // 카드 너비 + margin (너비는 DonationCard의 스타일과 일치시켜야 함)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, donations.length - 1));
  };

  return (
    <SliderContainer>
      {/* 왼쪽 화살표 버튼 */}
      <ArrowButton className="left" onClick={handlePrev}>
        <img src="/assets/waiting/leftarrow.png" alt="Previous" />
      </ArrowButton>

      {/* 카드 컨테이너 */}
      <CardContainer translateX={-currentIndex * cardWidth}>
        {donations.map((donation) => (
          <DonationCard key={donation.id} donation={donation} />
        ))}
      </CardContainer>

      {/* 오른쪽 화살표 버튼 */}
      <ArrowButton className="right" onClick={handleNext}>
        <img src="/assets/waiting/rightarrow.png" alt="Next" />
      </ArrowButton>
    </SliderContainer>
  );
};

export default DonationSlider;
