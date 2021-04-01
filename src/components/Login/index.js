import React, { useEffect, useState } from 'react';
import { func, shape } from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';

import { setPatientData } from '../../features/patient/patientDataSlice';
import { setAuth, clearAuth } from '../../features/auth/authSlice';
import Colors from '../../constants/Colors';
import {
  authAsync, buildFhirIssUrl, initializeFhirClient, getBundle,
} from '../../resources/fhirAuth';

import PatientPicker, { DEFAULT_PATIENT_ID } from './PatientPicker';
import SkipLoginButton from './SkipLoginButton';

const Login = ({
  authResult,
  clearAuthAction,
  patientData,
  setAuthAction,
  setPatientDataAction,
}) => {
  const [loading, setLoading] = useState(false);
  const [mockPatientId, setPatientId] = useState(DEFAULT_PATIENT_ID);
  const fhirIss = buildFhirIssUrl(mockPatientId);

  useEffect(() => {
    if (authResult && !patientData) {
      const {
        accessToken,
        additionalParameters: { patient: patientId },
      } = authResult;
      const fhirClient = initializeFhirClient(fhirIss, accessToken);

      const queryPatient = async (patientIdProp, fhirClientProp) => {
        try {
          const bundle = await getBundle(patientIdProp, fhirClientProp);
          setPatientDataAction(bundle);
        } catch (error) {
          clearAuthAction();
          setLoading(false);
          console.error('Error fetching patient data:', error); // eslint-disable-line no-console
          Alert.alert('Login Error', 'Error fetching patient data.', ['ok']);
        }
      };

      queryPatient(patientId, fhirClient);
    }
  }, [authResult, patientData]);

  const handleLogin = async () => {
    setLoading(true);
    const authResponse = await authAsync(fhirIss);
    if (authResponse) {
      setAuthAction(authResponse);
    } else {
      setLoading(false);
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
  setPatientDataAction: func.isRequired,
  authResult: shape({}),
  clearAuthAction: func.isRequired,
  patientData: shape({}),
};

Login.defaultProps = {
  authResult: null,
  patientData: null,
};

const mapStateToProps = (state) => ({
  authResult: state.auth.authResult,
  patientData: state.patient.patientData,
});

const mapDispatchToProps = {
  setAuthAction: setAuth, clearAuthAction: clearAuth, setPatientDataAction: setPatientData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
