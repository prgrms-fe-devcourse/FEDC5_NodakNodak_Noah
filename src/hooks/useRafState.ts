import { useCallback, useRef, useState } from 'react';

interface ScrollState {
  x: number;
  y: number;
}

const useRafState = (
  initialState: ScrollState,
): [ScrollState, (value: ScrollState) => void] => {
  const frame = useRef(0);
  const [state, setState] = useState(initialState);

  const setRafState = useCallback((value: ScrollState) => {
    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      setState(value);
    });
  }, []);

  return [state, setRafState];
};

export default useRafState;
