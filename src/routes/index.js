import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profiles from '../pages/Profiles';

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
