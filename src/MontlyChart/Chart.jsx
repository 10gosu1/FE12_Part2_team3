import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import VoteModal from './VoteModal.jsx';
import ViewMoreModal from './ViewMoreModal.jsx';
import useChartApi from '../hooks/useChartApi.jsx';
import { motion } from 'framer-motion';
import classNames from 'classnames';

const FEMALE = 'female'; // FEMALE 상수 정의
const MALE = 'male'; // MALE 상수 정의 (필요한 경우)

const ChartContainer = styled.div`
  padding: 40px 0;
  background-color: #02000e;
  color: #fff;
  font-family: 'Noto Sans KR', sans-serif;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  width: 100%;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  white-space: nowrap;
  margin-right: auto;
`;

const VoteButton = styled.button`
  background-color: #282a2c;
  color: #fff;
  border: none;
  padding: 2px 16px 3px 16px;
  border-radius: 3px 0px 0px 0px;
  cursor: pointer;
  font-weight: bold;
  height: 32px;
  font-size: 14px;
  margin-left: auto;
  width: 128px;
`;

const Tabs = styled.div`
  display: flex;
  width: 100%;
  height: 42px;
  margin: 0 auto 24px;

  > button {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #333;
    border: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.17px;
    color: #fff;

    &.current {
      background-color: #02000e;
      color: #ffffff;
      border-bottom: 2px solid #ffffff;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const ChartList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;

  li:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 8px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: 743px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const ChartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(50% - 10px); /* 한 줄에 두 개 */
  padding: 16px;
  background-color: #02000e;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  position: relative;
`;

const ArtistInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ArtistImageWrapper = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
`;

const ArtistImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const RedCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: px solid #f00;
  border-radius: 50%;
`;

const Rank = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #f00;
`;

const ArtistName = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #ffffffde;
`;

const VoteCount = styled.p`
  font-size: 14px;
  color: #ccc;
  margin-left: auto;
`;

const Chart = () => {
  const [activeTab, setActiveTab] = useState('female');
  const [isVoteModalOpen, setVoteModalOpen] = useState(false); // 모달 상태 추가
  const [selectedArtist, setSelectedArtist] = useState(null);
  const {
    data: chartData,
    loading,
    error,
    loadMore,
    hasMore,
  } = useChartApi(activeTab, 10);

  const openVoteModal = (artist) => {
    setSelectedArtist(artist); // 선택한 아티스트 설정
    setVoteModalOpen(true); // 모달 열기
  };

  const closeVoteModal = () => {
    setVoteModalOpen(false); // 모달 닫기
  };

  return (
    <ChartContainer>
      <Header>
        <Title>이달의 차트</Title>
        <VoteButton onClick={() => setVoteModalOpen(true)}>
          차트 투표하기
        </VoteButton>
      </Header>
      <Tabs>
        <button
          className={classNames({ current: activeTab === 'female' })}
          onClick={() => setActiveTab('female')}
        >
          이달의 여자 아이돌
        </button>
        <button
          className={classNames({ current: activeTab === 'male' })}
          onClick={() => setActiveTab('male')}
        >
          이달의 남자 아이돌
        </button>
      </Tabs>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ChartList>
          {chartData.map((artist, index) => (
            <ChartItem key={artist.id}>
              <ArtistInfoContainer>
                <ArtistImageWrapper>
                  <ArtistImage src={artist.imageUrl} alt={artist.name} />
                  <RedCircle />
                </ArtistImageWrapper>
                <Rank>{index + 1}</Rank>
                <ArtistName>{artist.name}</ArtistName>
              </ArtistInfoContainer>
              <VoteCount>{artist.votes} 표</VoteCount>
            </ChartItem>
          ))}
        </ChartList>
      )}
      {hasMore && <button onClick={loadMore}>더보기</button>}
      {isVoteModalOpen && (
        <VoteModal
          idols={chartData}
          onClose={closeVoteModal}
          onSubmit={(id) => console.log(`${id} 투표 완료`)}
        />
      )}
    </ChartContainer>
  );
};

export default Chart;
