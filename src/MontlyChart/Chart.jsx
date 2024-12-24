import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useChartApi from '../hooks/useChartApi';
import VoteModal from './VoteModal.jsx';
import chartImage from '../assets/waiting/Chart.png';

const FEMALE = 'female';
const MALE = 'male';

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
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const VoteButton = styled.button`
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #3a3c3e;
  }
`;

const VoteButtonImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  border-bottom: 1px solid #444;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 10px;
  background: ${(props) => (props.active ? '#02000e' : '#333')};
  color: #fff;
  border: none;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  border-bottom: ${(props) => (props.active ? '3px solid #fff' : 'none')};

  &:hover {
    background-color: #444;
  }
`;

const ChartList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  gap: 20px;
  padding: 0;
  list-style: none;

  @media (min-width: 744px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ChartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #02000e;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1019607843);
`;

const ArtistInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ArtistImageWrapper = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid #ff6b6b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #02000e; /* Adds spacing effect */
`;

const ArtistImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const ArtistRank = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #ff6b6b;
  margin-right: 10px;
`;

const ArtistName = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const VoteCount = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff99;
`;

const MoreButton = styled.button`
  margin: 20px auto 0;
  padding: 10px 20px;
  background-color: #282a2c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  width: 326px;
  height: 42px;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 18px;
  color: #fff;
`;

const Chart = () => {
  const [activeTab, setActiveTab] = useState(FEMALE);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 744);
  const {
    data: chartData,
    loading,
    error,
    loadMore,
    hasMore,
    fetchAllData,
    updateVote, // updateVote 함수 추가
  } = useChartApi(activeTab, isMobile ? 5 : 10);
  const [showVoteModal, setShowVoteModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 744);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const initialData = await fetchAllData(); // 초기화 후 데이터 로드
        setChartData(initialData || []); // 데이터 상태 설정
        setCurrentPage(2); // 다음 페이지 설정
        setHasMoreData(initialData?.length === 10); // 10개 미만이면 데이터 없음
      } catch (err) {
        console.error('초기 데이터 로드 실패:', err);
      }
    };

    loadInitialData();
  }, [activeTab]);

  const handleShowVoteModal = () => {
    setShowVoteModal(true);
  };

  const handleVoteModalClose = () => {
    setShowVoteModal(false);
  };

  const handleVoteSuccess = () => {
    updateVote();
  };

  const sortedChartData = [...chartData].sort(
    (a, b) => b.totalVotes - a.totalVotes,
  );

  return (
    <ChartContainer>
      <Header>
        <Title>이달의 차트</Title>
        <VoteButton onClick={handleShowVoteModal}>
          <VoteButtonImage src={chartImage} alt="투표하기 아이콘" />
          차트 투표하기
        </VoteButton>
      </Header>
      <Tabs>
        <TabButton
          active={activeTab === FEMALE}
          onClick={() => setActiveTab(FEMALE)}
        >
          이달의 여자 아이돌
        </TabButton>
        <TabButton
          active={activeTab === MALE}
          onClick={() => setActiveTab(MALE)}
        >
          이달의 남자 아이돌
        </TabButton>
      </Tabs>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <ChartList>
            {sortedChartData.map((artist, index) => (
              <ChartItem key={artist.id}>
                <ArtistInfoContainer>
                  <ArtistImageWrapper>
                    <ArtistImage
                      src={artist.profilePicture}
                      alt={artist.name}
                    />
                  </ArtistImageWrapper>
                  <ArtistRank>{index + 1}</ArtistRank>
                  <ArtistName>{artist.name}</ArtistName>
                </ArtistInfoContainer>
                <VoteCount>{artist.totalVotes || 0}표</VoteCount>
              </ChartItem>
            ))}
          </ChartList>
          {hasMore && <MoreButton onClick={loadMore}>더보기</MoreButton>}
        </>
      )}

      {showVoteModal && (
        <VoteModal
          activeTab={activeTab}
          onClose={handleVoteModalClose}
          onVoteSuccess={handleVoteSuccess}
        />
      )}
    </ChartContainer>
  );
};

export default Chart;
