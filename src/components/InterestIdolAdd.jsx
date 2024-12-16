import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import IdolBox from './../components/IdolBox';
import useIdolApi from './../hooks/useIdolApi';
import 'swiper/css';
import 'swiper/css/grid';

import { Grid } from 'swiper/modules';

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

const InterestIdolAdd = () => {
  // 활성화된 아이템들의 ID를 배열로 관리
  const [activeItems, setActiveItems] = useState([]);

  // 클릭 시 해당 아이템의 ID를 토글
  const handleIdolCheck = (id) => {
    setActiveItems((prevActiveItems) => {
      if (prevActiveItems.includes(id)) {
        // 이미 선택된 아이템이면, 배열에서 제거
        return prevActiveItems.filter((item) => item !== id);
      } else {
        // 선택되지 않은 아이템이면, 배열에 추가
        return [...prevActiveItems, id];
      }
    });
  };

  const {
    data: data,
    loading: loading,
    error: error,
    setOptions: setOptions,
  } = useIdolApi('pageSize=19');

  return (
    <>
      {!loading ? (
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
            {data.map((item, index) => (
              <SwiperSlide key={item.id}>
                <IdolBox
                  item={item}
                  type="add"
                  onClick={() => handleIdolCheck(item.id)} // 클릭 시 해당 아이템의 ID를 전달
                  isActive={activeItems.includes(item.id)} // activeItems 배열에 해당 ID가 있으면 active 클래스를 적용
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Swpbox>
      ) : (
        <div style={{ color: 'white' }}>Loading</div>
      )}
    </>
  );
};

export default InterestIdolAdd;
