import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './app';
import CheckIn from './views/check-in/check-in';
import StartList from './views/start-list/start-list';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/checkin" component={CheckIn} />
      <Route path="/start/:id" component={StartList} />
    </Switch>
  </main>
);

export default Routes;