import { useEffect } from 'react';

import useTimeoutFn from '@/hooks/useTimeoutFn';

const useDebounce = (
  fn: () => void,
  ms: number,
  deps: React.DependencyList,
) => {
  const [run, clear] = useTimeoutFn(fn, ms);
  // eslint-disable-next-line
  useEffect(run, deps);

  return clear;
};

export default useDebounce;
