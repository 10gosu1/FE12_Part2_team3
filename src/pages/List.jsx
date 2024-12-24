import React from 'react';
import Credit from '../components/Credit';
import Waiting from '../components/DonationList';
import Chart from '../MontlyChart/Chart';
import { ChartProvider } from '../hooks/ChartContext';

import LackModal from '../modal/LackModal';

const List = () => {
  return (
    <>
      <Credit />
      <Waiting />
      <ChartProvider>
        <Chart />
      </ChartProvider>
    </>
  );
};

export default List;
