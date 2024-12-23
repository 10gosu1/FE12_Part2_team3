import React from 'react';
import Credit from '../components/Credit';
import Waiting from '../components/DonationList';
import Chart from '../MontlyChart/Chart';

import LackModal from '../modal/LackModal';

const List = () => {
  return (
    <>
      <Credit />
      <Waiting />
      <Chart />

      <LackModal>크레딧 부족 모달</LackModal>

      {/* 

      !!참고!!

      이런식으로 작성하면 될거같습니다!
      
      if (1000크레딧 넘게 있을경우){
        return '<기본버튼>투표하기</기본버튼>'
      }else{
        return '<LackModal>투표하기</LackModal>'
      }

      완성하시고 import, 컴포넌트, 주석 지워주세요~

      */}
    </>
  );
};

export default List;
