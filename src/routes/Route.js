import React from 'react';
import propTypes from 'prop-types';

import { Route as RouteImported, Redirect } from 'react-router-dom';

function RouteExported({ component: Component, isPrivate, ...rest }) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <RouteImported {...rest} component={Component} />;
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
