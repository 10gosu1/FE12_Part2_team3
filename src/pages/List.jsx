import styled from 'styled-components';
import Credit from '../components/Credit';
import Waiting from '../components/DonationList';
import Chart from '../components/Chart';
import IdolChart from '../components/IdolChart';

let StyleTest = styled.div`
  border: 1px solid red;
`;

const List = () => {
  return (
    <StyleTest>
      <Credit />
      <Waiting />
      <Chart />
      <IdolChart
        imgUrl="https://i.namu.wiki/i/4VHs71cs3fMK4wIXSDv7xyckxNkN5u5xZv-KHSyd4gSEVpC4GRk3Go7Zh3hr1tNb5Mn9XEoYqKvwsrJWbs0O_ZtYillaYKQfzqXo9ugS4aGRzMMmJnSpx2W5c8HqYvdMXRfuKzn6b5fv_V-yBmGSKg.webp"
        group="아이돌 그룹"
        name="아이돌 이름"
        totalVotes={1234}
        rank={1}
      />
    </StyleTest>
  );
};

export default List;
