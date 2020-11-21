import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Transactions from 'views/Transactions';
import NotFound from 'views/NotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Transactions} path="/" />
        <Route component={NotFound} path="*" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
