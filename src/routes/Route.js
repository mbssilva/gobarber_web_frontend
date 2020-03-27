import React from 'react';
import propTypes from 'prop-types';

import { Route as RouteImported, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/layouts/authentication';
import DefaultLayout from '../pages/layouts/default';

function RouteExported({ component: Component, isPrivate, ...rest }) {
  const signed = false;

  const Layout = signed ? DefaultLayout : AuthLayout;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <RouteImported
      {...rest}
      component={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteExported.propTypes = {
  isPrivate: propTypes.bool,
  component: propTypes.oneOfType([propTypes.element, propTypes.func])
    .isRequired,
  // rest: propTypes.func,
};

RouteExported.defaultProps = {
  isPrivate: false,
};

export default RouteExported;
