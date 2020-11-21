import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import Transactions from 'views/Transactions';
import NotFound from 'views/NotFound';

import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route exact component={Transactions} path="/" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
