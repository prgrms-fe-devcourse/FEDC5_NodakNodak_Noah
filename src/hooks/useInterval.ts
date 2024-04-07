import { useEffect } from 'react';
import useIntervalFn from '@/hooks/useIntervalFn';

type CallbackFunction = () => void;

const useInterval = (fn: CallbackFunction, ms: number): (() => void) => {
  const [run, clear] = useIntervalFn(fn, ms);

  useEffect(() => {
    run();
    return clear;
  }, [run, clear]);

  return clear;
};

export default useInterval;
