import { useState, useEffect } from "react"
import useAxios from './useAxios';

const usePost = (url, postData) => {

  const [axiosParams, setAxiosParams] = useState(null);

  useEffect(() => {
    if (postData) {
      setAxiosParams({
        method: 'POST',
        url,
        data: postData,
      });
    }
  }, [url, postData]);

  const { data, loading, error } = useAxios(axiosParams);

  return { data, loading, error };
};

export default usePost;
