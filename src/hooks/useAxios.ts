import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

interface AxiosState {
  isLoading: boolean;
  error: AxiosError | null;
  data: object | null;
}
const useAxios = (options: AxiosRequestConfig = {}) => {
  const [state, setState] = useState<AxiosState>({
    isLoading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios(options);
      setState({ isLoading: false, error: null, data });
    } catch {
      setState({ isLoading: false, error: null, data: null });
    }
  }, [options]);

  useEffect(() => {
    fetchData();
  }, [trigger]);

  const refetch = () => {
    fetchData();
    setTrigger(Date.now());
  };

  return [{ ...state, refetch }];
};
export default useAxios;
