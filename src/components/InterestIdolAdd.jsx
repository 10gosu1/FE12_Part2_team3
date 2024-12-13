import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import box from './../assets/mypage/mypage_box.png';
import Title from './../components/Title';

import 'swiper/css';
import 'swiper/css/grid';

import { Grid } from 'swiper/modules';

const InterestIdolAdd = () => {
  const Swpbox = styled.div`
    display: flex;
    width: 100%;
    > .interestIdolAdd_swp {
      margin: 0;
      width: 100%;
      height: 400px;
      img {
        width: 100%;
        height: auto;
      }
    }
  `;

  return (
    <>
      <Title>관심 있는 아이돌을 추가해보세요.</Title>
      <Swpbox>
        <Swiper
          slidesPerView={8}
          spaceBetween={24}
          grid={{
            rows: 2,
          }}
          modules={[Grid]}
          className="interestIdolAdd_swp"
        >
          <SwiperSlide>
            <img src={box} alt="" />
          </SwiperSlide>
        </Swiper>
      </Swpbox>
    </>
  );
};

export default InterestIdolAdd;
