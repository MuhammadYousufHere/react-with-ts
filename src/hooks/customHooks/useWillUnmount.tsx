import { useRef, useEffect } from 'react';

// for changes to be applied while using useDebounce
export const useWillUnmount = (fn: () => void) => {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  useEffect(() => fnRef.current(), []);
};
