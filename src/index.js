import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRoutes from './routes';
import GlobalStyle from '../src/style/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRoutes />
    <GlobalStyle />
  </React.StrictMode>
)