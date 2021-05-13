import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { bool, shape } from 'prop-types';

import UnauthorizedNavigator from './UnauthorizedNavigator';
import AuthorizedNavigator from './AuthorizedNavigator';
import OnboardingNavigator from './OnboardingNavigator';
import { authSelector, isOnboardingCompleteSelector } from '../redux/selectors';

const RootNavigator = ({ authResult, isOnboardingComplete }) => (
  <NavigationContainer>

    {
      // eslint-disable-next-line no-nested-ternary
      !authResult ? <UnauthorizedNavigator />
        : isOnboardingComplete ? <AuthorizedNavigator /> : <OnboardingNavigator />
    }
  </NavigationContainer>
);

RootNavigator.propTypes = {
  authResult: shape({}),
  isOnboardingComplete: bool.isRequired,
};

RootNavigator.defaultProps = {
  authResult: null,
};

const mapStateToProps = (state) => ({
  authResult: authSelector(state),
  isOnboardingComplete: isOnboardingCompleteSelector(state),
});

export default connect(mapStateToProps, null)(RootNavigator);
