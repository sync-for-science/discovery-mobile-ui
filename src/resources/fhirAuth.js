import * as AppAuth from 'expo-app-auth';
import Client from 'fhir-kit-client';
import { Alert } from 'react-native';

const { Buffer } = require('buffer');

const MOCK_USER_ID = '86512c6f-caf6-41f4-9503-e4270b37b94f'; // Blake Eichmann
// const MOCK_USER_ID = 'd0190651-b9b0-4513-8f3b-d542319220d1'; // Mr. Chadwick Von

const issDataString = JSON.stringify({
  k: '1',
  b: MOCK_USER_ID,
});

const encode = () => Buffer.from(issDataString).toString('base64');

// smartapp auth
export const fhirIss = `https://launch.smarthealthit.org/v/r4/sim/${encode(issDataString)}/fhir`;

export const initializeFhirClient = (baseUrl, accessToken) => {
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

export async function authAsync() {
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
    console.error('AppAuth Error:', error);
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
