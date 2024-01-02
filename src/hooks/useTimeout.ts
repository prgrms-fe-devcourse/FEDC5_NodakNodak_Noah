import useTimeoutFn from './useTimeoutFn';
import { useEffect } from 'react';

const useTimeout = (fn: () => void, ms: number) => {
  const [run, clear] = useTimeoutFn(fn, ms);

  useEffect(() => {
    run();
    return clear;
  }, [run, clear]);

  return clear;
};

export default useTimeout;
