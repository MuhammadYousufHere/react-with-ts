import { useRef, useEffect, useDebugValue } from 'react';

export const useThrottle = (fn: () => void, timeout: number) => {
  const prevRef = useRef<(() => void) | null>(null);
  const currentRef = useRef<(() => void) | null>(fn);

  // useful when using reuseable hooks
  useDebugValue(currentRef.current, (fn) => fn?.toString());
  useEffect(() => {
    // fires for every interval
    const handler = setInterval(() => {
      // it will check if current fn to execute if we do
      // it will execute it, if it's executed it will do't execute it
      if (currentRef.current) {
        prevRef.current = currentRef.current;
        currentRef.current();
        currentRef.current = null;
      }
    }, timeout);
    return () => clearInterval(handler);
  }, [timeout]);
};
