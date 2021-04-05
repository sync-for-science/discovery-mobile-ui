import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { shape } from 'prop-types';

import UnauthorizedNavigator from './UnauthorizedNavigator';
import AuthorizedNavigator from './AuthorizedNavigator';
import { authSelector } from '../redux/selectors';

const RootNavigator = ({ authResult }) => (
  <NavigationContainer>
    {!authResult ? <UnauthorizedNavigator /> : <AuthorizedNavigator />}
  </NavigationContainer>
);

RootNavigator.propTypes = {
  authResult: shape({}),
};

RootNavigator.defaultProps = {
  authResult: null,
};

const mapStateToProps = (state) => ({
  authResult: authSelector(state),
});

export default connect(mapStateToProps, null)(RootNavigator);
