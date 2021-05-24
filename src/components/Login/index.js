import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { authenticationState } from '../../recoil';
import Colors from '../../constants/Colors';
import {
  authAsync, buildFhirIssUrl,
} from '../../resources/fhirAuth';

import PatientPicker, { DEFAULT_PATIENT_ID } from './PatientPicker';
import SkipLoginButton from './SkipLoginButton';

const Login = () => {
  const setAuthentication = useSetRecoilState(authenticationState);
  const [loading, setLoading] = useState(false);
  const [mockPatientId, setPatientId] = useState(DEFAULT_PATIENT_ID);
  const fhirIss = buildFhirIssUrl(mockPatientId);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const authResponse = await authAsync(fhirIss);
      if (authResponse) {
        setLoading(false);
        setAuthentication({
          baseUrl: fhirIss,
          authResult: authResponse,
        });
      }
    } catch (error) {
      console.error('AppAuth Error:', error); // eslint-disable-line no-console
      Alert.alert('Login Error', 'Must login to use Discovery', ['ok']);
      // enable patient-picker and login buttons to render:
      setLoading(false);
    }
  };

  return (
    <View style={styles.body}>
      { loading && (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      )}
      { !loading && (
        <>
          <PatientPicker
            loading={loading}
            patientId={mockPatientId}
            setPatientId={setPatientId}
          />
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
  );
};

Login.propTypes = {
};

Login.defaultProps = {
};

export default Login;

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
  },
  spinnerContainer: {
    margin: 16,
  },
  login: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  },
});
