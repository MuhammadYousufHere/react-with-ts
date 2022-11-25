import { useEffect } from 'react';

type Props = {
  fn: () => void;
  timeout: number;
};
// body will not be executed until the timeout is passed
export function useDebounce(fn: () => void, timeout: number): void {
  useEffect(() => {
    const hadler = setTimeout(fn, timeout);

    return () => clearTimeout(hadler);
  }, [fn, timeout]);
}
