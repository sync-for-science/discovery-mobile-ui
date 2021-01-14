import React, { useEffect, useState } from 'react';
import { func, shape } from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import * as AppAuth from 'expo-app-auth';
import Client from 'fhir-kit-client';
import { connect } from 'react-redux';

import { setPatient } from '../../features/patient/patientSlice';
import { setAuth } from '../../features/auth/authSlice';
import Colors from '../../constants/Colors';

// smartapp auth with provided patient
const fhirIss = 'https://launch.smarthealthit.org/v/r4/sim/eyJrIjoiMSIsImIiOiI2ODk4OTJiZC1kY2JlLTQxZmMtODY1MS0zOGExZDA4OTM4NTQifQ/fhir';

const initializeFhirClient = (baseUrl, accessToken) => {
  if (!accessToken) {
    return new Client({ baseUrl });
  }
  return new Client({
    baseUrl,
    customHeaders: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export async function signInAsync() {
  const fhirClient = initializeFhirClient(fhirIss);
  const { authorizeUrl, tokenUrl } = await fhirClient.smartAuthMetadata();

  const config = {
    serviceConfiguration: {
      authorizationEndpoint: authorizeUrl.toString(),
      tokenEndpoint: tokenUrl.toString(),
    },
    additionalParameters: {
      aud: fhirIss,
    },
    clientId: 'example-client-id',
    clientSecret: 'example-client-secret',
    // redirectUrl:
    //   Platform.OS === "android"
    //     ? "com.reactnativeoauth:/callback"
    //     : "org.reactjs.native.example.ReactNativeOauth:/callback",
    scopes: [
      'openid',
      'fhirUser',
      'patient/*.*',
      'launch/patient',
      'online_access',
    ],
  };

  let result;
  try {
    result = await AppAuth.authAsync(config);
    console.log('Auth result from signInAsync', result);
  } catch (error) {
    console.warn('error', error);
  }

  return result;
}

const Login = ({
  navigation, setAuthAction, setPatientAction, authResult, patient,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (authResult && !patient) {
      const {
        accessToken,
        additionalParameters: { patient: patientId },
      } = authResult;
      const fhirClient = initializeFhirClient(fhirIss, accessToken);
      const queryPatient = async () => {
        try {
          const patientData = await fhirClient.read({
            resourceType: 'Patient',
            id: patientId,
          });
          setPatientAction(patientData);
        } catch (error) {
          setPatientAction(error);
        }
      };
      queryPatient();
    }
  }, [authResult, patient]);

  return (
    <View>
      <View style={styles.body}>
        { loading ? <View style={styles.spinnerContainer}><ActivityIndicator size="large" color={Colors.primary} /></View> : (
          <TouchableOpacity
            style={styles.login}
            onPress={
            async () => {
              setLoading(true);
              const authResponse = await signInAsync();
              setAuthAction(authResponse);
              setLoading(false);
              navigation.navigate('PostAuth');
            }
          }
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

Login.propTypes = {
  navigation: shape({}).isRequired,
  setAuthAction: func.isRequired,
  setPatientAction: func.isRequired,
  authResult: shape({}),
  patient: shape({}),
};

Login.defaultProps = {
  authResult: null,
  patient: null,
};

const mapStateToProps = (state) => ({
  authResult: state.auth.authResult,
  patient: state.patient.patient,
});

const mapDispatchToProps = { setAuthAction: setAuth, setPatientAction: setPatient };

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
    paddingTop: 100,
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
