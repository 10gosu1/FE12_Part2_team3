// DonationList.jsx
import React, { useEffect, useState } from 'react';
import DonationCard from './DonationCard';  // DonationCard 컴포넌트 임포트
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 20px;  // 카드들 간의 간격
  overflow-x: auto;  // 가로 스크롤 활성화
  white-space: nowrap;  // 카드들이 한 줄로 나열되도록
  padding: 20px;  // 상하좌우 여백 추가
`;

const DonationList = () => {
  const [donations, setDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fandom-k-api.vercel.app/12-3/donations');
        if (!response.ok) {
          throw new Error('네트워크 응답이 실패했습니다');
        }
        const data = await response.json();

        // 데이터를 제대로 받아왔는지 확인하고, 배열이 아닌 경우 에러 처리
        if (Array.isArray(data.list)) {
          setDonations(data.list);
        } else {
          throw new Error('데이터 형식이 잘못되었습니다');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);  // 로딩 종료
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>오류 발생: {error}</div>;
  }

  if (donations.length === 0) {
    return <div>데이터가 없습니다</div>;
  }

  return (
    <Container>
      {donations.map((donation) => (
        // 각 donation 객체를 DonationCard에 전달
        <DonationCard key={donation.id} donation={donation} />
      ))}
    </Container>
  );
};

export default DonationList;
