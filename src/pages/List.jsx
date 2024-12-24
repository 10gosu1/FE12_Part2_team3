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
    </>
  );
};

export default List;
