import styled from 'styled-components';
import Credit from '../components/Credit';
import Waiting from '../components/DonationList';
import Chart from '../components/Chart';
import IdolChartPage from '../components/IdolChartPage';

const List = () => {
  return (
    <>
      <Credit />
      <Waiting />
      <Chart />
      <IdolChartPage />
    </>
  );
};

export default List;
