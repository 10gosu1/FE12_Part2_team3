import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import DonationCard from './DonationCard';

const Swpbox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 300px;
  min-height: 250px;

  .swp_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 78px;
    border-radius: 4px;
    background-color: rgba(27, 27, 27, 0.8);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    border: none;

    svg {
      fill: none;
      stroke: white;
      stroke-width: 2;
      stroke-linecap: round;
    }
  }

  .prev_btn {
    left: -50px;
  }

  .next_btn {
    right: -50px;
  }

  .hidden {
    opacity: 0;
    pointer-events: none;
  }

  @media (max-width: 743px) {
    .prev_btn,
    .next_btn {
      display: none;
    }
  }
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
    min-width: 200px;
  }

  .swiper-wrapper {
    display: flex;
  }
`;

const DonationSlider = ({ donations }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(); // Swiper 인스턴스의 slidePrev 호출
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); // Swiper 인스턴스의 slideNext 호출
    }
  };

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;

    if (swiper) {
      // 초기 상태 업데이트
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);

      // 슬라이드 변경 시 상태 업데이트
      const updateButtonsState = () => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      };

      swiper.on('slideChange', updateButtonsState);

      // 이벤트 정리
      return () => {
        swiper.off('slideChange', updateButtonsState);
      };
    }
  }, []);

  return (
    <Swpbox>
      {/* 이전 버튼 */}
      <button
        className={`swp_btn prev_btn ${isBeginning ? 'hidden' : ''}`}
        onClick={handlePrev}
      >
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 1L1.70711 6.29289C1.31658 6.68342 1.31658 7.31658 1.70711 7.70711L7 13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <SliderContainer>
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={'auto'}
          loop={false}
          slidePerGroup={1} 
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            375: {
              slidesPerView: 1.2,
              spaceBetween: 8,
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
      {/* 다음 버튼 */}
      <button
        className={`swp_btn next_btn ${isEnd ? 'hidden' : ''}`}
        onClick={handleNext}
      >
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L6.29289 6.29289C6.68342 6.68342 6.68342 7.31658 6.29289 7.70711L1 13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </Swpbox>
  );
};

export default DonationSlider;

