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
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [options]);

  return { data, loading, error, setOptions };
};

export default useIdolApi;
