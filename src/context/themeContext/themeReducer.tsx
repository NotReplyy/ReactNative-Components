import { Theme } from '@react-navigation/native';

type ThemeAction =
  | { type: 'set_dark_theme' }
  | { type: 'set_light_theme' };

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0, 0.6)',
  colors: {
    primary: '#f53bb7',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(255,255,255, 0.6)',
  colors: {
    primary: '#75CEDB',
    background: '#151E21',
    card: 'black',
    text: 'white',
    border: 'white',
    notification: 'teal',
  },
};

export const themeReducer = (state: ThemeState, action: ThemeAction) : ThemeState => {
  switch (action.type) {
    case 'set_dark_theme':
      return { ...darkTheme };
    case 'set_light_theme':
      return { ...lightTheme };
    default:
      return state;
  }


};
