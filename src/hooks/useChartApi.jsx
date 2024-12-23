import React, { useState, useEffect } from 'react'; // React와 훅 임포트
import axios from 'axios';

const useChartApi = (gender, initPageSize = 10) => {
  const API_BASE_URL = `https://fandom-k-api.vercel.app/12-3/charts`;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cursor, setCursor] = useState(null); // nextCursor 관리
  const [pageSize, setPageSize] = useState(initPageSize);
  const [hasMore, setHasMore] = useState(true);

  const initialVotes = {
    female: {
      카리나: 32,
      원희: 6,
      안유진: 1,
      다현: 15,
    },
    male: {
      GD: 32,
      뷔: 28,
      진: 25,
      육성재: 20,
    },
  };

  const sortDataByVotes = (idols) => {
    return idols.sort((a, b) => b.votes - a.votes); // 투표수에 따라 정렬
  };

  const fetchData = async (reset = false) => {
    try {
      setLoading(true);

      const params = new URLSearchParams({
        gender,
        pageSize,
        ...(cursor && !reset ? { cursor } : {}), // reset 시 cursor를 포함하지 않음
      }).toString();

      const url = `${API_BASE_URL}/${gender}?${params}`;
      console.log('Fetching data with URL:', url);

      const response = await axios.get(url);
      console.log('API Response:', response.data);

      const idols = response.data.idols.map((idol) => ({
        ...idol,
        imageUrl: idol.profilePicture,
        votes: initialVotes[gender][idol.name] || 0,
      }));

      setData((prevData) => {
        const newData = reset ? idols : [...prevData, ...idols];
        return sortDataByVotes(newData); // 새 데이터 포함하여 정렬
      });

      setCursor(response.data.nextCursor || null); // nextCursor 업데이트
      setHasMore(Boolean(response.data.nextCursor)); // 다음 데이터 존재 여부 확인
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setCursor(null); // gender 변경 시 cursor 초기화
    setData([]); // 이전 데이터 초기화
    setHasMore(true); // 다음 페이지 존재 여부 초기화
    fetchData(true); // reset=true로 첫 페이지 데이터 가져오기
  }, [gender]); // gender가 변경될 때마다 실행

  useEffect(() => {
    // 현재 데이터를 항상 투표순으로 정렬
    setData((prevData) => sortDataByVotes(prevData));
  }, [data]); // 데이터가 변경될 때마다 정렬 적용

  const loadMore = () => {
    if (cursor) {
      fetchData(); // 다음 데이터 요청
    }
  };

  return { data, loading, error, loadMore, hasMore };
};

export default useChartApi;
