import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';

import mockBundle from '../../../assets/mock_data/bundle-blake-eichmann.json';
import { setPatientData } from '../../features/patient/patientDataSlice';

const SkipLoginButton = ({ setPatientDataAction }) => {
  const handleSkipLogin = () => {
    setPatientDataAction(mockBundle);
  };

  const showSkipLogin = process.env.NODE_ENV === 'development';

  if (showSkipLogin) {
    return (
      <Button
        title="Skip Login"
        onPress={handleSkipLogin}
      />
    );
  }
  return null;
};

SkipLoginButton.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  setPatientDataAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setPatientDataAction: setPatientData,
};

export default connect(null, mapDispatchToProps)(SkipLoginButton);
