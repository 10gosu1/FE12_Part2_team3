import styled from 'styled-components';
import Credit from '../components/Credit';
import Waiting from '../components/Waiting';
import Chart from '../components/Chart';

let StyleTest = styled.div`
  border: 1px solid red;
`;

const List = () => {
  return (
    <StyleTest>
      <Credit />
      <Waiting />
      <Chart />
    </StyleTest>
  );
};

export default List;
