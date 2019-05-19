import React, { useContext } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import App from './app';
import { AuthProvider, AuthContext } from './auth';
import Login from './views/login/login';
import Registration from './views/registration/registration';
import ChangeEvent from './views/change-event/change-event';
import StartList from './views/start-list/start-list';

export const paths = {
  login: '/login',
  registration: '/registration',
  eventManagement: '/event-management',
  start: '/start',
};

const Routes = () => (
  <AuthProvider>
    <main>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path={`${paths.start}/:id`} component={StartList} />
        <Route path={paths.login} component={Login} />
        <PrivateRoute path={paths.registration} component={Registration} />
        <PrivateRoute path={paths.eventManagement} component={ChangeEvent} />
      </Switch>
    </main>
  </AuthProvider>
);

function PrivateRoute({ component: Component, authed, ...props }) {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...props}
      render={props =>
        auth.state.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: paths.login, state: { from: props.location } }} />
        )
      }
    />
  );
}

export default Routes;
