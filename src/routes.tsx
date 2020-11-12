import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Transactions from './views/Transactions';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Transactions} path="/" exact />
    </BrowserRouter>
  );
};

export default Routes;
