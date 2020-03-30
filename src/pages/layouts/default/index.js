import React from 'react';
import propTypes from 'prop-types';

import { Wrapper } from './styles';

import Header from '../../../components/Header';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: propTypes.oneOfType([propTypes.element, propTypes.func]).isRequired,
};
