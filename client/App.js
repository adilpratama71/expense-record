import React from 'react';
import Login from './src/containers/login';
import { ThemeProvider } from 'react-native-elements';
import theme from './src/theme';
import { Provider } from './src/context'

export default function App() {

  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </Provider>
  );
}

