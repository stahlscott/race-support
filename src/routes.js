import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './app';
import Registration from './views/registration/registration';
import ChangeEvent from './views/change-event/change-event';
import StartList from './views/start-list/start-list';

export const paths = { registration: '/registration', eventManagement: '/event-management', start: '/start' };

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path={paths.registration} component={Registration} />
      <Route path={paths.eventManagement} component={ChangeEvent} />
      <Route path={`${paths.start}/:id`} component={StartList} />
    </Switch>
  </main>
);

export default Routes;
