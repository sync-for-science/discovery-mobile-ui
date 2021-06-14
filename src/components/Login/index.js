import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { authenticationState } from '../../recoil';
import Colors from '../../constants/Colors';
import {
  authAsync, buildFhirIssUrl,
} from '../../resources/fhirAuth';

import PatientPicker, { DEFAULT_PATIENT_ID } from './PatientPicker';
import SkipLoginButton from './SkipLoginButton';
import LoadingIndicator from '../LoadingIndicator';

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
      { loading && (<LoadingIndicator />)}
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
  login: {
    backgroundColor: Colors.logoBlue,
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  },
});
