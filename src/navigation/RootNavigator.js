import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { shape } from 'prop-types';

import UnauthorizedNavigator from './UnauthorizedNavigator';
import AuthorizedNavigator from './AuthorizedNavigator';

const RootNavigator = ({ patientData }) => (
  <NavigationContainer>
    {patientData ? <AuthorizedNavigator /> : <UnauthorizedNavigator />}
  </NavigationContainer>
);

RootNavigator.propTypes = {
  patientData: shape({}),
};

RootNavigator.defaultProps = {
  patientData: null,
};

const mapStateToProps = (state) => ({
  patientData: state.patient.patientData,
});

export default connect(mapStateToProps, null)(RootNavigator);
