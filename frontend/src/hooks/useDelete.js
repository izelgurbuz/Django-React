import {useState, useEffect} from 'react'
import useAxios from './useAxios';

const useDelete = (url, id) => {

  const [params, setParams] = useState(null)
  useEffect(()=>{

    if(id && url){
      setParams( {
        method: 'DELETE',
        url,
      })
    }
    
  },[url,id])


  const { data, loading, error } = useAxios(params);

  return { data, loading, error };
};

export default useDelete;