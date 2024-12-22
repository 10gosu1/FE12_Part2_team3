import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // 최신 Swiper에서 모듈 가져오기
import DonationCard from './DonationCard';
import 'swiper/css';
import 'swiper/css/navigation'; // 네비게이션 스타일 추가

const SliderContainer = styled.div`
  width: 100%;
  background: var(--black-200);  
  position: relative;  
  padding: 0; 
  overflow-x: visible;
  
  .swiper-container {
    position: relative;  
    z-index: 1;
    height: auto;
  }

  .swiper-button-prev {
  left: 10px;
  }

  .swiper-button-next {
  right: 10px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: white !important;
    z-index: 10;
    background: #1B1B1B;
    border-radius: 6.67px;
    width: 40px;
    height: 78px;
    opacity: 1;  
    visibility: visible;  
    transition: visibility 0.3s ease, opacity 0.3s ease; 
  }

  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    visibility: hidden;  
    opacity: 0;  
  }
`;

const DonationSlider = ({ donations }) => {
  return (
    <SliderContainer>
      <Swiper
        modules={[Navigation]} // 네비게이션 모듈 사용
        spaceBetween={30} // 카드 간격
        slidesPerView={4} // 한 번에 보이는 카드 수 
        navigation // 네비게이션 버튼 활성화
        slidesPerGroup={1} // 한 번에 이동하는 카드 수
        loop={false} // 무한 루프 비활성화
      >
        {donations.map((donation) => (
          <SwiperSlide key={donation.id}>
            <DonationCard donation={donation} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default DonationSlider;