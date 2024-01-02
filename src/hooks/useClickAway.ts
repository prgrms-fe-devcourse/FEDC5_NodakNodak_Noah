import { useEffect, useRef } from 'react';

const events = ['mousedown', 'touchstart'] as const;

const useClickAway = (handler: (e: MouseEvent | TouchEvent) => void) => {
  const ref = useRef<HTMLElement>(null);
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleEvent = (e: MouseEvent | TouchEvent) => {
      !element.contains(e.target as Node) && savedHandler.current(e);
    };

    for (const eventName of events) {
      document.addEventListener(eventName, handleEvent);
    }

    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, handleEvent);
      }
    };
  }, [ref]);

  return ref;
};

export default useClickAway;
