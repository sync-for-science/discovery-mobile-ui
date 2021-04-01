import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';

import mockBundle from '../../../assets/mock_data/bundle-blake-eichmann.json';
import { setPatientData } from '../../features/patient/patientDataSlice';

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

const mapDispatchToProps = {
  setMockData: () => setPatientData(mockBundle),
};

export default connect(null, mapDispatchToProps)(SkipLoginButton);
