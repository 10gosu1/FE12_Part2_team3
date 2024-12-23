// DonationSlider.jsx
import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import DonationCard from './DonationCard';

const Swpbox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 300px; /* 최소 너비 추가 */
  min-height: 250px; /* 슬라이드 높이 유지 */
`;

const SliderContainer = styled.div`
  width: 100%;
  background: var(--black-200);
  position: relative;
  padding: 10px;
  overflow: hidden;

  .swiper-slide {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 200px; /* 슬라이드 최소 너비 */
  }

  .swiper-wrapper {
    display: flex;
  }
`;

const DonationSlider = ({ donations }) => {
  return (
    <Swpbox>
      <SliderContainer>
        <Swiper
          spaceBetween={10}
          slidesPerView={'auto'}
          loop={false}
          breakpoints={{
          //분기점을 시안보다 더 세세하게 나눈 이유 : 
          // 시안처럼 크게크게 나누었을 때 움직임이 너무 부자연스럽게 커져서 반응형이 예쁘게 구현되지 않는 점을 확인했습니다!
          // 그래서 조금 더 자연스럽게 동작하도록 하기 위해서 분기점을 세세하게 나누어서 설정해뒀습니다~! 
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            375: {
              slidesPerView: 1.2, /* 슬라이드 크기 조정 */
              spaceBetween: 8, /* 간격 조정 */
            },
            400: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            744: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 18, 
            },
            1184: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1920: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {donations.map((donation) => (
            <SwiperSlide key={donation.id}>
              <DonationCard donation={donation} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
    </Swpbox>
  );
};

export default DonationSlider;