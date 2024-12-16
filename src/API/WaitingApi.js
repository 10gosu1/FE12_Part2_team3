import React, { useEffect, useState } from 'react';

const DonationList = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fandom-k-api.vercel.app/12-3/donations');
        const data = await response.json();
        setDonations(data); // 상태에 API 데이터 저장
      } catch (error) {
        console.error('API 요청 실패:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {donations.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.subtitle}</p>
          <p>
            목표: {item.targetDonation}원 / 현재: {item.receivedDonation}원
          </p>
        </div>
      ))}
    </div>
  );
};

export default DonationList;
