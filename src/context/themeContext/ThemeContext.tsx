import React ,{ createContext, useReducer, useEffect } from 'react';
import { ThemeState, darkTheme, lightTheme, themeReducer } from './themeReducer';
import { useColorScheme, AppState } from 'react-native';



interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}



export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

  const colorScheme = useColorScheme();

  const [ theme , dispatch ] = useReducer(themeReducer , (colorScheme === 'dark') ? darkTheme : lightTheme);

  useEffect(() => {
    AppState.addEventListener('change', (status) => {
      if (status === 'active') {
        (colorScheme === 'dark') ? setDarkTheme() : setLightTheme();
      }
    });
  }, [colorScheme]);

  const setDarkTheme = () => {
    dispatch({ type: 'set_dark_theme' });
  };

  const setLightTheme = () => {
    dispatch({ type: 'set_light_theme' });
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      setDarkTheme,
      setLightTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
