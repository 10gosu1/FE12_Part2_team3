import React, { useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import IdolBox from './../components/IdolBox';
import prevIcon from './../assets/mypage/prev.svg';
import nextIcon from './../assets/mypage/next.svg';
import plus from './../assets/mypage/plus.svg';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
<<<<<<< HEAD
=======
import ErrorBox from './ErrorBox';

>>>>>>> 4eb58e9dfc2c52e9834373125b0f8b74362ee015
import { Grid, Navigation } from 'swiper/modules';

const Swpbox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  > .swp_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 135px;
    border-radius: 4px;
    background-color: rgba(27, 27, 27, 0.8);
    position: absolute;
    right: calc(100% + 32px);
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  > .swp_btn.next_btn {
    right: auto;
    left: calc(100% + 32px);
  }
  > .swp_btn.swiper-button-disabled {
    opacity: 0;
    cursor: default !important;
  }
  > .interestIdolAdd_swp {
    margin: 0;
    width: 100%;
    height: 400px;
    img {
      width: 100%;
      height: auto;
    }
  }
  @media (max-width: 1200px) {
    > .swp_btn.prev_btn {
      left: 0;
      right: auto;
    }
    > .swp_btn.next_btn {
      left: auto;
      right: 0;
    }
    > .interestIdolAdd_swp {
      width: 84%;
      height: 52.5vw;
      margin: 32px auto 0;
    }
  }
  @media (max-width: 743px) {
    > .swp_btn.prev_btn {
      display: none;
    }
    > .swp_btn.next_btn {
      display: none;
    }
    > .interestIdolAdd_swp {
      width: 100%;
      height: 87vw;
      margin: 0 auto;
    }
  }
`;

const AddBtn = styled.button`
  width: 255px;
  margin: 48px auto 0;
  font-size: 16px;
  > img {
    margin-right: 8px;
  }
  @media (max-width: 743px) {
    margin: 24px auto 0;
  }
`;

const InterestIdolAdd = ({
  data,
  handleAddIdol,
  loading,
  error,
  handleIdolCheck,
  activeData,
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (error) {
    return <ErrorBox />;
  }

  if (loading) {
    return (
      <Swpbox>
        <Swiper
          slidesPerView={3}
          spaceBetween={17}
          grid={{
            rows: 2,
          }}
          breakpoints={{
            743: {
              slidesPerView: 4,
              spaceBetween: 24,
              grid: { rows: 2 },
            },
            1200: {
              slidesPerView: 8,
              spaceBetween: 24,
              grid: { rows: 2 },
            },
          }}
          modules={[Grid]}
          className="interestIdolAdd_swp"
        >
          {[...Array(16)].map((_, index) => (
            <SwiperSlide key={index}>
              <Skeleton
                circle={true}
                style={{
                  height: '0px',
                  width: '100%',
                  paddingTop: '100%',
                }}
              />
              <Skeleton
                style={{
                  width: '45px',
                  margin: '5px 0 0',
                }}
              />
              <Skeleton
                style={{
                  width: '100px',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Swpbox>
    );
  }

  return (
    <>
      <Swpbox>
        <div className="swp_btn prev_btn" ref={prevRef}>
          <img src={prevIcon} alt="이전으로" />
        </div>
        <div className="swp_btn next_btn" ref={nextRef}>
          <img src={nextIcon} alt="다음으로" />
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={17}
          grid={{
            rows: 2,
          }}
          breakpoints={{
            743: {
              slidesPerView: 4,
              spaceBetween: 24,
              grid: { rows: 2 },
            },
            1200: {
              slidesPerView: 8,
              spaceBetween: 24,
              grid: { rows: 2 },
            },
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Grid, Navigation]}
          className="interestIdolAdd_swp"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <IdolBox
                item={item}
                type="add"
                onClick={() => handleIdolCheck(item)} // 클릭 시 해당 아이템의 data를 전달
                isActive={activeData.includes(item)} // activeItems 배열에 해당 data가 있으면 active 클래스를 적용
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Swpbox>
      <AddBtn
        className="btn lg radius"
        onClick={handleAddIdol}
        disabled={activeData.length === 0}
      >
        <img src={plus} alt="추가하기" />
        추가하기
      </AddBtn>
    </>
  );
};

export default InterestIdolAdd;
