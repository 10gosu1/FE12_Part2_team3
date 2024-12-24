import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { CreditContextValue, CreditContextAction } from '../App';
import useChartApi from '../hooks/useChartApi';
import postVotes from '../hooks/postVotes';
import checkInIcon from '../assets/waiting/radio_ck.svg';
import checkOutIcon from '../assets/waiting/radio.svg';
import iconCheck from '../assets/mypage/icon_check.svg';
import LackModal from '../modal/LackModal';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 화면 중앙으로 이동 */
  width: 525px;
  height: 693px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #121212;
  border-radius: 15px;
  width: 525px;
  height: 693px;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* 내용이 넘치지 않도록 설정 */
  position: relative;
`;

const ModalHeader = styled.div`
  background-color: #121212; /* 배경색 추가 */
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 20px;
  border-bottom: 1px solid #444;
  display: flex;
  justify-content: space-between;
`;

const ModalBody = styled.div`
  flex-grow: 1; /* Body가 나머지 공간을 차지 */
  overflow-y: auto; /* 스크롤 추가 */
  padding: 20px;
   scrollbar-width: thin; /* Firefox에서 얇은 스크롤 */
  scrollbar-color: #ff6b6b #1e1e1e; /* 스크롤 색상 */
   &::-webkit-scrollbar {
    width: 8px; /* 스크롤바 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(271.36deg, #f96e68 -9.84%, #fe578f 107.18%);
    border-radius: 10px; /* 스크롤바 둥글게 */
  }

  &::-webkit-scrollbar-track {
    background: #1e1e1e;
    border-radius: 10px; /* 스크롤 트랙 둥글게 */
`;

const ModalFooter = styled.div`
  background-color: #121212; /* 배경색 추가 */
  position: sticky;
  bottom: 0;
  z-index: 10;
  padding: 20px;
  border-top: 1px solid #444;
`;

const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

const CloseButton = styled.button`
  width: 15.5px;
  height: 15.5px;
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
  align-items: center;
  padding: 10px;
  background-color: #1e1e1e;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  gap: 15px;

  &:hover {
    background-color: #292929;
  }
`;

const ArtistImageWrapper = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #ff6b6b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${(props) =>
    props.isSelected
      ? 'linear-gradient(271.36deg, #F96E68 -9.84%, #FE578F 107.18%)'
      : 'transparent'};
  opacity: ${(props) => (props.isSelected ? 0.5 : 0)};
  z-index: 1; /* 이미지 위에 위치 */
  pointer-events: none; /* 클릭 방해하지 않음 */
  transition: opacity 0.3s;
`;

const ArtistImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  z-index: 0; /* 이미지를 그라데이션 아래로 배치 */
`;

const CheckIconImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  display: ${(props) => (props.isSelected ? 'block' : 'none')};
  z-index: 2;
`;

const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

const ArtistRank = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #ff6b6b;
`;

const ArtistName = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-top: 5px;
`;

const ArtistVotes = styled.span`
  font-size: 14px;
  color: #aaa;
  margin-top: 2px;
`;

const RadioWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RadioIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const VoteButton = styled.button`
  width: 477px;
  height: 42px;
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

const StyledVoteButton = styled(VoteButton)`
  /* VoteButton에 이미 있는 스타일을 그대로 사용 */
  display: flex;
  justify-content: center;
  align-items: center;
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
    // Disable scrolling on the background when the modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto'; // Restore scrolling
    };
  }, [activeTab]);

  const sortedIdols = [...idols].sort((a, b) => b.totalVotes - a.totalVotes);

  const handleVote = async () => {
    if (!selectedIdol) {
      alert('아이돌을 선택해주세요.');
      return;
    }

    if (userCredits < 1000) {
      onClose(); // 투표 모달창 닫기
      return;
    }

    try {
      await postVotes(selectedIdol.id); // 투표 API 호출
      handleCreditMinus(1000); // 크레딧 차감
      alert(`${selectedIdol.name}에게 투표 완료!`);
      onVoteSuccess(); // 부모 컴포넌트에서 updateVote 함수 호출
      onClose();
    } catch (error) {
      alert('투표 처리 중 문제가 발생했습니다. 다시 시도해주세요.');
      console.error(error);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLackModalClose = () => {
    setIsLackModalOpen(false);
  };

  const renderVoteButton = () => {
    if (userCredits >= 1000) {
      return <StyledVoteButton onClick={handleVote}>투표하기</StyledVoteButton>;
    } else {
      return (
        <LackModal>
          <StyledVoteButton as="div">투표하기</StyledVoteButton>
        </LackModal>
      );
    }
  };

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContainer>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>
              이달의 {activeTab === 'female' ? '여자' : '남자'} 아이돌
            </ModalTitle>
            <CloseButton onClick={onClose}>&times;</CloseButton>
          </ModalHeader>

          <ModalBody>
            <ArtistList>
              {sortedIdols.map((idol, index) => (
                <ArtistItem
                  key={idol.id}
                  onClick={() => setSelectedIdol(idol)}
                  className={selectedIdol?.id === idol.id ? 'selected' : ''}
                >
                  <ArtistImageWrapper>
                    <Overlay isSelected={selectedIdol?.id === idol.id} />
                    <ArtistImage
                      isSelected={selectedIdol?.id === idol.id}
                      src={idol.profilePicture}
                      alt={idol.name}
                    />
                    <CheckIconImage
                      src={iconCheck}
                      alt="Selected"
                      isSelected={selectedIdol?.id === idol.id}
                    />
                  </ArtistImageWrapper>
                  <ArtistRank>{index + 1}</ArtistRank>
                  <ArtistInfo>
                    <ArtistName>{idol.name}</ArtistName>
                    <ArtistVotes>
                      {idol.totalVotes.toLocaleString()}표
                    </ArtistVotes>
                  </ArtistInfo>
                  <RadioWrapper>
                    <RadioIcon
                      src={
                        selectedIdol?.id === idol.id
                          ? checkInIcon
                          : checkOutIcon
                      }
                      alt={
                        selectedIdol?.id === idol.id
                          ? 'Selected'
                          : 'Not Selected'
                      }
                    />
                  </RadioWrapper>
                </ArtistItem>
              ))}
            </ArtistList>
          </ModalBody>
          <ModalFooter>
            {renderVoteButton()} {/* 버튼 또는 LackModal */}
            <CreditsInfo>
              남은 크레딧: {userCredits.toLocaleString()}
            </CreditsInfo>
          </ModalFooter>
        </ModalContent>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default VoteModal;
