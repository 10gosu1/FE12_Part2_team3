import styled from 'styled-components';
import Credit from '../components/Credit';
import Waiting from '../components/DonationList';
import Chart from '../components/Chart';
import IdolChartPage from '../components/IdolChartPage';

let StyleTest = styled.div`
  border: 1px solid red;
`;

const List = () => {
  return (
    <StyleTest>
      <Credit />
      <Waiting />
      <Chart />
      <IdolChartPage />
    </StyleTest>
  );
};

export default List;
