import React, { useState, useEffect } from 'react';
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

const DemoLogin = () => {
  const [authResult, setAuthResult] = useState(null);
  const [patient, setPatient] = useState(null);

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
          setPatient(patientData);
        } catch (error) {
          setPatient(error);
        }
      };
      queryPatient();
    }
  }, [authResult, patient]);

  return (
    <View>
      {patient ? (
        <PatientView authResult={authResult} patient={patient} />
      ) : (
        <View style={styles.body}>
          <Login
            handleAuthorize={async () => {
              const authResponse = await signInAsync();
              setAuthResult(authResponse);
            }}
          />
        </View>
      )}
    </View>
  );
};

export default DemoLogin;

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
    backgroundColor: '#db882a',
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

const Login = ({ handleAuthorize }) => (
  <TouchableOpacity style={styles.login} onPress={handleAuthorize}>
    <Text style={styles.loginText}>Login</Text>
  </TouchableOpacity>
);

Login.propTypes = {
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
