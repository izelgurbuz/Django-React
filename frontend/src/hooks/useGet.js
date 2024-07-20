import { useState, useEffect, useMemo } from 'react';
import useAxios from './useAxios';

const useGet = (url) => {

  const [shouldFetch, setShouldFetch] = useState(false)
  const [params, setParams] = useState(null)


  useEffect(() => {
    if(url && shouldFetch){
      setParams({
        method: 'GET',
        url,
      })
      setShouldFetch(false)
    }
  },[url,shouldFetch])

  const { data, loading, error } = useAxios(params);

  return { data, loading, error, setShouldFetch };
};

export default useGet;
