import React, { useEffect } from 'react';
import { func, shape } from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as AppAuth from 'expo-app-auth';
import Client from 'fhir-kit-client';
import { connect } from 'react-redux';

import { setAuth, setPatientData } from '../../features/patient/patientSlice';
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
  navigation, setAuthAction, setPatientDataAction, auth, patientData,
}) => {
  useEffect(() => {
    if (auth && !patientData) {
      const {
        accessToken,
        additionalParameters: { patient: patientId },
      } = auth;
      const fhirClient = initializeFhirClient(fhirIss, accessToken);
      const queryPatient = async () => {
        try {
          const patientDataResult = await fhirClient.read({
            resourceType: 'Patient',
            id: patientId,
          });
          setPatientDataAction(patientDataResult);
        } catch (error) {
          setPatientDataAction(error);
        }
      };
      queryPatient();
    }
  }, [auth, patientData]);

  return (
    <View>
      {patientData ? (
        <PatientView authResult={auth} patient={patientData} />
      ) : (
        <View style={styles.body}>
          <LoginButton
            handleAuthorize={async () => {
              const authResponse = await signInAsync();
              setAuthAction(authResponse);
              navigation.navigate('PostAuth');
            }}
          />
        </View>
      )}
    </View>
  );
};

Login.propTypes = {
  navigation: shape({}).isRequired,
  setAuthAction: func.isRequired,
  setPatientDataAction: func.isRequired,
  auth: shape({}),
  patientData: shape({}),
};

Login.defaultProps = {
  auth: null,
  patientData: null,
};

const mapPropsToState = (state) => ({
  auth: state.patient.auth,
  patientData: state.patient.patientData,
});

const mapPropsToDispatch = { setAuthAction: setAuth, setPatientDataAction: setPatientData };

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

const LoginButton = ({ handleAuthorize }) => (
  <TouchableOpacity style={styles.login} onPress={handleAuthorize}>
    <Text style={styles.loginText}>Login</Text>
  </TouchableOpacity>
);

LoginButton.propTypes = {
  handleAuthorize: func.isRequired,
};

const PatientView = ({ authResult, patient }) => (
  <View style={styles.sectionContainer}>
    <View style={styles.section}>
      <Text style={styles.title}>Authorization Result:</Text>
      <ScrollView
        style={styles.scrollViewInternal}
        nestedScrollEnabled
      >
        <Text style={styles.text}>{JSON.stringify(authResult, null, 2)}</Text>
      </ScrollView>
    </View>
    <View style={styles.section}>
      <Text style={styles.title}>Patient:</Text>
      <ScrollView
        style={styles.scrollViewInternal}
        nestedScrollEnabled
      >
        <Text>{JSON.stringify(patient, null, 2)}</Text>
      </ScrollView>
    </View>
  </View>
);

PatientView.propTypes = {
  authResult: shape({}).isRequired,
  patient: shape({}).isRequired,
};
