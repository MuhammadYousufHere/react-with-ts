import { useState, useCallback } from 'react';
interface Props {
  intialState: boolean;
}
export const useToggle = ({ intialState = false }: Props) => {
  const [toggle, setToggle] = useState<boolean>(intialState);

  const toggler = useCallback(() => {
    setToggle((state) => !state);
  }, []);
  const open = useCallback(() => {
    setToggle(true);
  }, []);
  const close = useCallback(() => {
    setToggle(false);
  }, []);
  return [toggle, close, open, toggler];
};
