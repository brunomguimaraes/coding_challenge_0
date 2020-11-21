import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Transactions from 'views/Transactions';
import NotFound from 'views/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact component={Transactions} path="/" />
      <Route component={NotFound} path="*" />
    </Switch>
  );
};

export default Routes;
