import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/components/SignIn';
import SignUp from '../pages/components/SignUp';

import Dashboard from '../pages/components/Dashboard';
import Profiles from '../pages/components/Profile';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profiles} isPrivate />

      <Route
        path="/"
        component={() => <h1>Error 404: Essa caminho não existe :/</h1>}
      />
    </Switch>
  );
}

export default Routes;
