import { useState, useEffect } from 'react';
import axios from 'axios';

const useIdolApi = (initOpt = 'pageSize=4') => {
  const LINK = 'https://fandom-k-api.vercel.app/12-3/idols?';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(initOpt);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${LINK}${options}`);
        setData(response.data.list);
        setLoading(false);
      } catch (error) {
        if (error.response && error.response.status === 500) {
          // 서버 오류가 발생한 경우 새로고침 시도
          console.log('CORS 또는 서버 오류 발생, 페이지 새로고침 시도 중...');
          window.location.reload();
        } else {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [options]);

  return { data, loading, error, setOptions };
};

export default useIdolApi;
