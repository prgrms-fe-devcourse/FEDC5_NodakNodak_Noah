import useIntervalFn from './useIntervalFn';
import { useEffect } from 'react';

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
