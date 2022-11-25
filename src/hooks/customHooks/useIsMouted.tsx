import { useLayoutEffect, MutableRefObject, useRef } from 'react';
// will tell us whether the component is mounted or not
// need to maintain the state whether the component is mounted or not but state should not change,and do not want to rerender the component, hence useRef instead instead useState
export const useIsMounted = (): Readonly<MutableRefObject<boolean>> => {
  const isMounted = useRef(false);
  useLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};
