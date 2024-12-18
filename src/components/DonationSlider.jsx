import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // 최신 Swiper에서 모듈 가져오기
import DonationCard from './DonationCard';
import 'swiper/css';
import 'swiper/css/navigation'; // 네비게이션 스타일 추가

const SliderContainer = styled.div`
  width: 100%;
  padding: 20px 0;

  .swiper-button-prev,
  .swiper-button-next {
    color: white !important;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 40px;
    height: 40px;

    &::after {
      font-size: 16px;
    }
  }
`;

const DonationSlider = ({ donations }) => {
  return (
    <SliderContainer>
      <Swiper
        modules={[Navigation]} // 네비게이션 모듈 사용
        spaceBetween={20} // 카드 간격
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











