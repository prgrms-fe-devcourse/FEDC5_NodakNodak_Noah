import { useCallback, useEffect, useRef } from 'react';

type CallbackFunction = () => void;
type IntervalId = NodeJS.Timeout | undefined;

const useIntervalFn = (fn: CallbackFunction, ms: number) => {
  const intervalId = useRef<IntervalId>();
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    intervalId.current && clearInterval(intervalId.current);

    intervalId.current = setInterval(() => {
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    intervalId.current && clearInterval(intervalId.current);
  }, []);

  useEffect(() => clear, [clear]);

  return [run, clear];
};

export default useIntervalFn;
