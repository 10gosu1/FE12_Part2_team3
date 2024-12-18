import React from 'react';
import styled from 'styled-components';

const ChartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 100%;
`;

const ChartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 16px;
  box-sizing: border-box;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`;

const ProfileImageRing = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid #f96d69;
  border-radius: 50%;
  box-sizing: border-box;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: 5px;
  left: 5px;
`;

const Rank = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #f96d69;
  margin-right: 8px;
`;

const Name = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.87);
`;

const Votes = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.6);
`;

const IdolChart = ({ chartData }) => {
  return (
    <ChartList>
      {chartData.map((idol, index) => (
        <React.Fragment key={index}>
          <ChartItem>
            <Profile>
              <ProfileImageContainer>
                <ProfileImage src={idol.image} alt={idol.name} />
                <ProfileImageRing />
              </ProfileImageContainer>
              <Rank>{idol.rank}</Rank>
              <Name>{idol.name}</Name>
            </Profile>
            <Votes>{idol.votes}표</Votes>
          </ChartItem>
          {index < chartData.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </ChartList>
  );
};

export default IdolChart;
