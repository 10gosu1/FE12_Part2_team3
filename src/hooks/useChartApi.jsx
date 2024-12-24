import { useState, useEffect } from 'react';
import axios from 'axios';

const useChartApi = (gender, pageSize = 10) => {
  const API_BASE_URL = `https://fandom-k-api.vercel.app/12-3/charts`;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (reset = false) => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        pageSize,
        ...(gender && { gender }),
        ...(cursor && !reset ? { cursor } : {}),
      }).toString();

      const response = await axios.get(`${API_BASE_URL}/${gender}?${params}`);
      const fetchedData = response.data.idols;

      setData((prevData) =>
        reset ? fetchedData : [...prevData, ...fetchedData],
      );
      setCursor(response.data.nextCursor || null);
      setHasMore(!!response.data.nextCursor);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(true); // 성별 변경 시 초기화 후 로드
  }, [gender]);

  const loadMore = () => {
    if (hasMore) fetchData();
  };

  const fetchAllData = async () => {
    try {
      const params = new URLSearchParams({
        pageSize: 1000, // 최대 크기로 모든 데이터 요청
        ...(gender && { gender }),
      }).toString();

      const response = await axios.get(`${API_BASE_URL}/${gender}?${params}`);
      return response.data.idols || []; // idols 배열 반환
    } catch (error) {
      console.error('데이터 로드 실패:', error);
      return [];
    }
  };

  const updateVote = async (idolId) => {
    try {
      await axios.post(`https://fandom-k-api.vercel.app/12-3/vote`, {
        idolId,
      });
      await fetchData(true); // 투표 후 데이터 새로고침
    } catch (error) {
      console.error('투표 업데이트 실패:', error);
    }
  };

  return { data, loading, error, loadMore, hasMore, fetchAllData, updateVote };
};

export default useChartApi;
