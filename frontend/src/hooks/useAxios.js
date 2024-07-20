import { useState, useEffect } from 'react';
import api from '../api';

const useAxios = (axiosParams) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(axiosParams){
      const fetchData = async () => {
        try {
          const response = await api(axiosParams);
          setData(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
      fetchData()
    }
    
  }, [axiosParams]);

  return { data, loading, error };
};

export default useAxios;
