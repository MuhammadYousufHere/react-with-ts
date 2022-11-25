import { createContext, FC, CSSProperties, useState, ReactNode } from 'react';
export interface IThemeContext {
  style?: CSSProperties;
  setStyle: (style?: CSSProperties) => void;
}

const ThemeContext = createContext<IThemeContext>({
  setStyle: () => void null,
});

interface Props {
  children: ReactNode;
}
export const ContextProvider: FC<Props> = ({ children }) => {
  const [style, setStyle] = useState<CSSProperties>();
  return (
    <ThemeContext.Provider value={{ style, setStyle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
