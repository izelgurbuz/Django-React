import useAxios from './useAxios';

const usePut = (url, putData) => {
  const axiosParams = {
    method: 'PUT',
    url,
    data: putData,
  };

  const { data, loading, error } = useAxios(axiosParams);

  return { data, loading, error };
};

export default usePut;
