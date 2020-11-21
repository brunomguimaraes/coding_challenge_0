import React from 'react';
import ReactDOM from 'react-dom';

import App from 'views/App';

import { GlobalStyle } from 'globalStyle';

export default ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
