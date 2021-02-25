import * as AppAuth from 'expo-app-auth';
import Client from 'fhir-kit-client';
import { Alert } from 'react-native';

const { Buffer } = require('buffer');

export const buildFhirIssUrl = (patientId) => {
  const issDataString = JSON.stringify({
    k: '1',
    b: patientId,
  });
  // smartapp auth
  return `https://launch.smarthealthit.org/v/r4/sim/${Buffer.from(issDataString).toString('base64')}/fhir`;
};

export const initializeFhirClient = (fhirIss, accessToken) => {
  if (!accessToken) {
    return new Client({ baseUrl: fhirIss });
  }
  return new Client({
    baseUrl: fhirIss,
    customHeaders: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export async function authAsync(fhirIss) {
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
  } catch (error) {
    console.error('AppAuth Error:', error); // eslint-disable-line no-console
    Alert.alert('Login Error', 'Must login to use Discovery', ['ok']);
  }

  return result;
}

// Provider found in "serviceProvider" within some records
// Vital Signs and Lab Results found in Observation.
// Web UI shows how to parse ^ in FhirTransform
const resourceTypes = [
  'Patient',
  'ExplanationOfBenefit',
  'Claim',
  'Condition',
  'Encounter',
  'Immunization',
  'MedicationRequest',
  'CarePlan',
  'DiagnosticReport',
  'Procedure',
  'Observation',
];

const buildBundleEntries = (patientId) => (
  resourceTypes.map((type) => (
    {
      request: {
        method: 'GET',
        url: (type === 'Patient') ? `${type}/${patientId}` : `${type}?patient=${patientId}`,
      },
    }
  ))
);

export const getRequestBundle = (patientId) => ({
  resourceType: 'Bundle',
  type: 'batch',
  entry: buildBundleEntries(patientId),
});

export const getBundle = (patientId, fhirClient) => {
  const requestBundle = getRequestBundle(patientId);
  return fhirClient.batch({ body: requestBundle });
};
