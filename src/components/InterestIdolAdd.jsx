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
    background-color: rgba(27, 27, 27, 0.6);
    position: absolute;
    right: calc(100% + 32px);
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  > .swp_btn.next_btn {
    right: none;
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
`;

const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 255px;
  height: 48px;
  margin: 48px auto 0;
  border-radius: 999px;
  background: linear-gradient(
    91deg,
    var(--coralpink) 3.33%,
    var(--hotpink) 99.37%
  );
  transition: all 0.2s;
  &:hover {
    background: linear-gradient(
      91deg,
      var(--coralpink) 3.33%,
      var(--hotpink) 99.37%
    );
    opacity: 0.8;
  }
  > img {
    margin-right: 8px;
  }
`;

const InterestIdolAdd = ({
  data,
  handleAddIdol,
  loading,
  handleIdolCheck,
  activeData,
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      {!loading ? (
        <Swpbox>
          <div className="swp_btn prev_btn" ref={prevRef}>
            <img src={prevIcon} alt="이전으로" />
          </div>
          <div className="swp_btn next_btn" ref={nextRef}>
            <img src={nextIcon} alt="다음으로" />
          </div>
          <Swiper
            slidesPerView={8}
            spaceBetween={24}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            grid={{
              rows: 2,
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
                  isActive={activeData.includes(item)} // activeItems 배열에 해당 data를가 있으면 active 클래스를 적용
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Swpbox>
      ) : (
        <div style={{ color: 'white' }}>Loading</div>
      )}
      <AddBtn onClick={handleAddIdol}>
        <img src={plus} alt="추가하기" />
        추가하기
      </AddBtn>
    </>
  );
};

export default InterestIdolAdd;
