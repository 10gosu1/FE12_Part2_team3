import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import IdolChart from '../components/IdolChart';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 24px;
  width: 1200px;
  max-width: 100%;
  background-color: #02000e;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Header = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  width: auto;
  height: 26px;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  line-height: 26px;
  text-align: left;
  color: #fff;
  box-sizing: border-box;
`;

const VoteButton = styled.button`
  width: 128px;
  height: 32px;
  padding: 2px 16px 3px;
  gap: 4px;
  border-radius: 3px;
  background: linear-gradient(90deg, #f86f65 0%, #fe5493 100%);
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  span {
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 13px;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
`;

const Tabs = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const Tab = styled.button`
  width: 50%;
  height: 42px;
  padding: 12px 0;
  border: none;
  background-color: #02000e;
  color: ${(props) => (props.active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)')};
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.165px;
  box-sizing: border-box;
`;

const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0px;
  box-sizing: border-box;
`;

const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 16px;
  box-sizing: border-box;
`;

const Votes = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
`;

const IdolChartPage = () => {
  const [activeTab, setActiveTab] = useState('women');

  const womenChartData = [
    {
      rank: 1,
      name: '뉴진스 민지',
      votes: '204,000',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EB%25AF%25BC%25EC%25A7%2580%2528NewJeans%2529&psig=AOvVaw3F9nfW6MClaAZpzWPEVXCT&ust=1734564855078000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCty-P7r4oDFQAAAAAdAAAAABAE',
    },
  ];

  const menChartData = [
    {
      rank: 1,
      name: '남자아이돌1',
      votes: '200,000',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsports.chosun.com%2Fentertainment%2F2024-01-18%2F202401180100116900016467&psig=AOvVaw2xjJ29lPE5zjNxSDE-aJHq&ust=1734564878449000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjGy-_7r4oDFQAAAAAdAAAAABAE',
    },
  ];

  const handleTabClick = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  return (
    <Container>
      <Header>
        <Title>이달의 차트</Title>
        <VoteButton>
          <span>차트 투표하기</span>
        </VoteButton>
      </Header>
      <Tabs>
        <Tab
          active={activeTab === 'women'}
          onClick={() => handleTabClick('women')}
        >
          이달의 여자 아이돌
        </Tab>
        <Tab active={activeTab === 'men'} onClick={() => handleTabClick('men')}>
          이달의 남자 아이돌
        </Tab>
      </Tabs>
      <ChartContainer>
        <Column>
          {activeTab === 'women' ? (
            <IdolChart chartData={womenChartData} />
          ) : (
            <IdolChart chartData={menChartData} />
          )}
        </Column>
        <Column>
          {activeTab === 'women' ? (
            <IdolChart chartData={womenChartData} />
          ) : (
            <IdolChart chartData={menChartData} />
          )}
        </Column>
      </ChartContainer>
    </Container>
  );
};

export default IdolChartPage;
