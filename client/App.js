import React from 'react';
import Login from './src/containers/login';
import { ThemeProvider } from 'react-native-elements';
import theme from './theme'

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

