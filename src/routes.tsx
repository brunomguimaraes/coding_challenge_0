import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Transactions from 'views/Transactions';
import NotFound from 'views/NotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Transactions} path="/" exact />
      <Route component={NotFound} />
    </BrowserRouter>
  );
};

export default Routes;
