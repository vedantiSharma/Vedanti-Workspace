import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@chakra-ui/react';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider  theme={theme }>
    <App />
    </ChakraProvider>
  </React.StrictMode>
);

export const server=`https://api.coingecko.com/api/v3`;
 