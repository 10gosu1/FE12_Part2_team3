import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/global';
import DonationSlider from './DonationSlider';
import Spinner from '.././assets/waiting/spinner.gif';
import ErrorBox from './ErrorBox';

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px; 

  @media (max-width: 375px) {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px; 
  }
`;

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;  
`;

const DonationList = () => {
  const [donations, setDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://fandom-k-api.vercel.app/12-3/donations',
        );
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

  if (isLoading) return (
    <SpinnerContainer>
      <img src={Spinner} alt="로딩 중..." />
    </SpinnerContainer>
  );
  if (error) return <ErrorBox />;
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