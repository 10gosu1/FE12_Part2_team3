import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { CreditContextValue, CreditContextAction } from './../App';

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
  width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  color: #fff;
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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
  width: 24px;
  height: 24px;
`;

const ArtistList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ArtistItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #1e1e1e;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  border: ${({ selected }) => (selected ? '2px solid #ff6b6b' : 'none')};

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

const ArtistName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const ArtistVotes = styled.div`
  font-size: 14px;
  color: #bbb;
`;

const RadioInput = styled.input`
  margin-left: auto;
  cursor: pointer;
`;

const VoteButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #ff6b6b;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4c4c;
  }

  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;

const VoteModal = ({ idols, onClose, onSubmit }) => {
  const myCredit = useContext(CreditContextValue);
  const { handleCreditMinus } = useContext(CreditContextAction);

  const [selectedIdolId, setSelectedIdolId] = useState(null);
  const [idolData, setIdolData] = useState(idols);

  const handleVote = () => {
    if (myCredit >= 1000 && selectedIdolId) {
      handleCreditMinus(1000);
      setIdolData((prevData) =>
        prevData.map((idol) =>
          idol.id === selectedIdolId
            ? { ...idol, votes: idol.votes + 1 }
            : idol,
        ),
      );
      alert('투표가 완료되었습니다!');
      onSubmit(selectedIdolId);
    } else {
      alert('크레딧이 부족하거나 아이돌을 선택하지 않았습니다.');
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>이달의 여자 아이돌</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ArtistList>
          {idolData.map((idol) => (
            <ArtistItem
              key={idol.id}
              selected={selectedIdolId === idol.id}
              onClick={() => setSelectedIdolId(idol.id)}
            >
              <ArtistInfo>
                <ArtistImage src={idol.imageUrl} alt={idol.name} />
                <ArtistName>{idol.name}</ArtistName>
              </ArtistInfo>
              <ArtistVotes>{idol.votes}표</ArtistVotes>
              <RadioInput
                type="radio"
                name="vote"
                checked={selectedIdolId === idol.id}
                readOnly
              />
            </ArtistItem>
          ))}
        </ArtistList>
        <VoteButton
          onClick={handleVote}
          disabled={!selectedIdolId || myCredit < 1000}
        >
          투표하기
        </VoteButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default VoteModal;
