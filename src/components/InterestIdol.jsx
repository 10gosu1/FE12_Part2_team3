import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import IdolBox from './../components/IdolBox';

import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode } from 'swiper/modules';

const Swpbox = styled.div`
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

  @media (max-width: 1200px) {
    margin-bottom: 32px;
    padding-bottom: 32px;
  }

  @media (max-width: 743px) {
    width: calc(100% + 48px);
    margin-left: -24px;
    > .interestIdol_swp {
      padding-left: 38px;
      .swiper-slide {
        width: 70px;
      }
    }
  }
`;

const InterestIdol = ({ data, loading, handleRemove }) => {
  return (
    <>
      {!loading ? (
        <Swpbox>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={32}
            freeMode={{
              enabled: true,
              momentumRatio: 0.1,
            }}
            breakpoints={{
              743: {
                spaceBetween: 22,
              },
            }}
            modules={[FreeMode]}
            className="interestIdol_swp"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <IdolBox item={item} type="my" onClick={handleRemove} />
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

export default InterestIdol;
