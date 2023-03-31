import React from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

const App = () => {
  return (
    <AppState>
      <StackNavigation />
    </AppState>

  );
};

const AppState = ({children}:any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default App;
