import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

import Home from './Home';

export default () => (
  (<BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>)
);