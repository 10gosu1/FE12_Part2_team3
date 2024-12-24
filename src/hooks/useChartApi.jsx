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
    fetchData(true);
  }, [gender]);

  const loadMore = () => {
    if (hasMore) fetchData();
  };

  const fetchAllData = async () => {
    try {
      const params = new URLSearchParams({
        pageSize: 1000,
        ...(gender && { gender }),
      }).toString();

      const response = await axios.get(`${API_BASE_URL}/${gender}?${params}`);
      return response.data.idols || [];
    } catch (error) {
      console.error('데이터 로드 실패:', error);
      return [];
    }
  };

  const updateVote = async () => {
    try {
      await fetchData(true); // 투표 후 데이터 새로고침
    } catch (error) {
      console.error('투표 업데이트 실패:', error);
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
    loadMore,
    hasMore,
    fetchAllData,
    updateVote,
  };
};

export default useChartApi;
