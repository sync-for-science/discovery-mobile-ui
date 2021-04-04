import React, { useState } from 'react';
import { func } from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';

import { setAuth } from '../../features/auth/authSlice';
import Colors from '../../constants/Colors';
import {
  authAsync, buildFhirIssUrl,
} from '../../resources/fhirAuth';

import PatientPicker, { DEFAULT_PATIENT_ID } from './PatientPicker';
import SkipLoginButton from './SkipLoginButton';

const Login = ({
  setAuthAction,
}) => {
  const [loading, setLoading] = useState(false);
  const [mockPatientId, setPatientId] = useState(DEFAULT_PATIENT_ID);
  const fhirIss = buildFhirIssUrl(mockPatientId);

  const handleLogin = async () => {
    setLoading(true);
    const authResponse = await authAsync(fhirIss);
    if (authResponse) {
      setLoading(false);
      setAuthAction({
        baseUrl: fhirIss,
        authResult: authResponse,
      });
    }
  };

  return (
    <View>
      <View style={styles.body}>
        { loading && (
          <View style={styles.spinnerContainer}><ActivityIndicator size="large" color={Colors.primary} /></View>
        )}
        { !loading && (
          <>
            <View style={styles.patientPickerContainer}>
              <PatientPicker
                loading={loading}
                patientId={mockPatientId}
                setPatientId={setPatientId}
              />
            </View>
            <SkipLoginButton />
            <TouchableOpacity
              style={styles.login}
              onPress={handleLogin}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

Login.propTypes = {
  setAuthAction: func.isRequired,
};

Login.defaultProps = {
};

const mapDispatchToProps = {
  setAuthAction: setAuth,
};

export default connect(null, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: 'space-between',
  },
  section: {
    overflow: 'scroll',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  body: {
    alignItems: 'center',
  },
  spinnerContainer: {
    margin: 16,
  },
  patientPickerContainer: {
    width: '100%',
    height: 280,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginTop: 16,
    marginBottom: 16,
  },
  login: {
    backgroundColor: Colors.primary,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  },
  scrollViewInternal: {
    height: 240,
    padding: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
});
