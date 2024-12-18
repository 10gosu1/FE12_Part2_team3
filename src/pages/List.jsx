import styled from 'styled-components';
import Credit from '../components/Credit';
import Waiting from '../components/DonationList';
import Chart from '../components/Chart';

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
