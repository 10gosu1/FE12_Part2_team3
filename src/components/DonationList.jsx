import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/global';
import DonationSlider from './DonationSlider';

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;

const DonationList = () => {
  const [donations, setDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fandom-k-api.vercel.app/12-3/donations');
        if (!response.ok) throw new Error('데이터를 불러오는 데 실패했습니다.');
        const data = await response.json();
        setDonations(data.list || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>오류 발생: {error}</div>;
  if (donations.length === 0) return <div>데이터가 없습니다.</div>;

  return (
    <>
      <GlobalStyle />
      <Title>후원을 기다리는 조공</Title>
      <DonationSlider donations={donations} />
    </>
  );
};

export default DonationList;








