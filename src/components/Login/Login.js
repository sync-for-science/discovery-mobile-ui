import React, { useEffect } from 'react';
import { func, shape } from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import * as AppAuth from 'expo-app-auth';
import Client from 'fhir-kit-client';
import { connect } from 'react-redux';

import { setAuth, setPatient } from '../../features/patient/patientSlice';
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
  navigation, setAuthAction, setPatientAction, auth, patient,
}) => {
  useEffect(() => {
    if (auth && !patient) {
      const {
        accessToken,
        additionalParameters: { patient: patientId },
      } = auth;
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
  }, [auth, patient]);

  return (
    <View>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.login}
          onPress={
            async () => {
              const authResponse = await signInAsync();
              setAuthAction(authResponse);
              navigation.navigate('PostAuth');
            }
          }
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Login.propTypes = {
  navigation: shape({}).isRequired,
  setAuthAction: func.isRequired,
  setPatientAction: func.isRequired,
  auth: shape({}),
  patient: shape({}),
};

Login.defaultProps = {
  auth: null,
  patient: null,
};

const mapPropsToState = (state) => ({
  auth: state.patient.auth,
  patientData: state.patient.patientData,
});

const mapPropsToDispatch = { setAuthAction: setAuth, setPatientAction: setPatient };

export default connect(mapPropsToState, mapPropsToDispatch)(Login);

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
  login: {
    backgroundColor: Colors.primary,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    marginTop: 100,
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
