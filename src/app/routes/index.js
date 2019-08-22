import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from 'features/Home';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route render={() => <h1>Page not found</h1>} />
  </Switch>
);
