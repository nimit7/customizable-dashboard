import { useState } from 'react';
// import { useSnackBar } from './useSnackBar';

const useApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const { snackBar } = useSnackBar();

  const getApiFuncHandler = async (apiFunc, ...params) => {
    setIsLoading(true);
    await apiFunc(...params)
      .then((response) => {
        if (response.data.code >= 400) throw new Error(data);

        setData(response.data.response);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        // snackBar({ status: true, severity: 'error', message: error.message });
      })
      .finally(() => setIsLoading(false));
  };

  const postApiFuncHandler = async (apiFunc, ...params) => {
    setIsLoading(true);
    await apiFunc(...params)
      ?.then((response) => {
        if (response.data.code >= 400) throw new Error(data);

        setData(response.data.response);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        // snackBar({ status: true, severity: 'error', message: error.message });
      })
      .finally(() => setIsLoading(false));
  };

  return { getApiFuncHandler, postApiFuncHandler, data, error, isLoading };
};

export default useApi;
