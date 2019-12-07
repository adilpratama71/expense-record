import React from 'react';
import Register from './src/containers/Register';
import { ThemeProvider } from 'react-native-elements';
import theme from './src/theme';
import { Provider } from './src/context'

export default function App() {

  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <Register />
      </ThemeProvider>
    </Provider>
  );
}

