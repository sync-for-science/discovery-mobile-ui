import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';

import { actionTypes } from '../../redux/action-types';
import mockBundle from '../../../assets/mock_data/bundle-blake-eichmann.json';

export const MOCK_BUNDLE = mockBundle;

export const MOCK_AUTH = {
  baseUrl: '/', // some value is needed to successfully instantiate fhir-kit-client, to resolve contained resources
  authResult: {
    accessToken: '',
    additionalParameters: {
      patient: '',
    },
  },
};

const showSkipLogin = process.env.NODE_ENV === 'development';

const SkipLoginButton = ({ setMockAuth }) => {
  if (showSkipLogin) {
    return (
      <Button
        title="Skip Login"
        onPress={setMockAuth}
      />
    );
  }
  return null;
};

SkipLoginButton.propTypes = {
  setMockAuth: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setMockAuth: () => ({
    type: actionTypes.SET_AUTH,
    payload: MOCK_AUTH,
  }),
};

export default connect(null, mapDispatchToProps)(SkipLoginButton);
