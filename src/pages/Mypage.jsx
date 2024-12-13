import React, { useState, useEffect } from 'react';
import GlobalStyle from './../styles/global';
import Title from './../components/Title';
import InterestIdolAdd from './../components/InterestIdolAdd';
import close from './../assets/mypage/icon_close.svg';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import useIdolApi from './../hooks/useIdolApi';

import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode } from 'swiper/modules';

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const InterestIdol = styled.div`
  display: flex;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  > .interestIdol_swp {
    margin: 0;
    .swiper-slide {
      width: 100px;
    }
  }
`;

const IdolBox = styled.div`
  position: relative;
  > .close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
  > .line {
    width: 100%;
    height: 100px;
    overflow: hidden;
    border-radius: 999px;
    border: 1.5px solid var(--coralpink);
    > .thum {
      overflow: hidden;
      border-radius: 999px;
      padding: 5px;
      > img {
        border-radius: 999px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  > .content {
    text-align: center;
    margin-top: 8px;
    > .name {
      color: var(--white);
      font-size: 16px;
      font-weight: 700;
      line-height: 1.625;
    }
    > .group {
      margin-top: 2px;
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
    }
  }
`;

const Mypage = () => {
  const {
    data: data,
    loading: loading,
    error: error,
    setOptions: setOptions,
  } = useIdolApi('pageSize=4');
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <GlobalStyle />
      <section id="mypage">
        <Inner>
          <Title>내가 관심있는 아이돌</Title>
          {!loading ? (
            <InterestIdol>
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={22}
                freeMode={true}
                modules={[FreeMode]}
                className="interestIdol_swp"
              >
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <IdolBox>
                      <div className="close">
                        <img src={close} alt="삭제하기" />
                      </div>
                      <div className="line">
                        <div className="thum">
                          <img src={item.profilePicture} alt={item.name} />
                        </div>
                      </div>
                      <div className="content">
                        <div className="name">{item.name}</div>
                        <div className="group">{item.group}</div>
                      </div>
                    </IdolBox>
                  </SwiperSlide>
                ))}
              </Swiper>
            </InterestIdol>
          ) : (
            <div style={{ color: 'white' }}>Loading</div>
          )}

          <InterestIdolAdd />
        </Inner>
      </section>
    </>
  );
};

export default Mypage;
