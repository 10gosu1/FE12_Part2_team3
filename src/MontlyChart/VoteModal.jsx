import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { CreditContextValue, CreditContextAction } from '../App';
import useChartApi from '../hooks/useChartApi';
import postVotes from '../hooks/postVotes';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  background-color: #121212;
  border-radius: 15px;
  padding: 20px;
  width: 525px;
  height: 693px;
  overflow-y: auto;
  color: #fff;
  font-family: 'Noto Sans KR', sans-serif;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
`;

const ArtistList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ArtistItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #1e1e1e;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #292929;
  }
`;

const ArtistInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ArtistImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const ArtistRank = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #ff6b6b;
  margin-right: 10px;
`;

const ArtistName = styled.span`
  font-size: 16px;
`;

const VoteButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #ff4c4c;
  }

  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;

const CreditsInfo = styled.p`
  font-size: 14px;
  color: #aaa;
  text-align: center;
  margin-top: 10px;
`;

const VoteModal = ({ activeTab, onClose, onVoteSuccess }) => {
  const [selectedIdol, setSelectedIdol] = useState(null);
  const { data: idols, fetchAllData } = useChartApi(activeTab, 1000);
  const userCredits = useContext(CreditContextValue);
  const { handleCreditMinus } = useContext(CreditContextAction);

  useEffect(() => {
    fetchAllData();
  }, [activeTab]);

  const sortedIdols = [...idols].sort((a, b) => b.totalVotes - a.totalVotes);

  const handleVote = async () => {
    if (!selectedIdol) {
      alert('아이돌을 선택해주세요.');
      return;
    }

    if (userCredits < 1000) {
      alert('크레딧이 부족합니다.');
      return;
    }

    try {
      await postVotes(selectedIdol.id); // 투표 API 호출
      handleCreditMinus(1000); // 크레딧 차감
      alert(`${selectedIdol.name}에게 투표 완료!`);
      onVoteSuccess(); // 부모 컴포넌트에서 데이터 새로고침 처리
      onClose();
    } catch (error) {
      alert('투표 처리 중 문제가 발생했습니다. 다시 시도해주세요.');
      console.error(error);
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>
            이달의 {activeTab === 'female' ? '여자' : '남자'} 아이돌
          </ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        <ArtistList>
          {sortedIdols.map((idol, index) => (
            <ArtistItem
              key={idol.id}
              onClick={() => setSelectedIdol(idol)}
              style={{
                border: selectedIdol?.id === idol.id ? '2px solid #ff6b6b' : '',
              }}
            >
              <ArtistInfo>
                <ArtistRank>{index + 1}</ArtistRank>
                <ArtistImage src={idol.profilePicture} alt={idol.name} />
                <ArtistName>{idol.name}</ArtistName>
              </ArtistInfo>
              <span>{idol.totalVotes}표</span>
            </ArtistItem>
          ))}
        </ArtistList>

        <VoteButton
          onClick={handleVote}
          disabled={!selectedIdol || userCredits < 1000}
        >
          투표하기
        </VoteButton>
        <CreditsInfo>남은 크레딧: {userCredits.toLocaleString()}</CreditsInfo>
      </ModalContent>
    </ModalContainer>
  );
};

export default VoteModal;
