import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';

import { actionTypes } from '../../redux/action-types';
import mockBundle from '../../../assets/mock_data/bundle-blake-eichmann.json';

export const MOCK_AUTH = {
  baseUrl: '',
  authResult: {
    accessToken: '',
    additionalParameters: {
      patient: '',
    },
  },
};

const showSkipLogin = process.env.NODE_ENV === 'development';

const SkipLoginButton = ({ setMockData }) => {
  if (showSkipLogin) {
    return (
      <Button
        title="Skip Login"
        onPress={setMockData}
      />
    );
  }
  return null;
};

SkipLoginButton.propTypes = {
  setMockData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setMockData: () => {
    dispatch(({
      type: actionTypes.SET_AUTH,
      payload: MOCK_AUTH,
    }));
    dispatch(({
      type: actionTypes.FHIR_FETCH_SUCCESS,
      payload: mockBundle,
    }));
  },
});

export default connect(null, mapDispatchToProps)(SkipLoginButton);
