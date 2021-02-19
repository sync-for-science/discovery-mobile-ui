import * as AppAuth from 'expo-app-auth';
import Client from 'fhir-kit-client';
import { Alert } from 'react-native';

// smartapp auth with provided patient Blake Eichmann
export const fhirIss = 'https://launch.smarthealthit.org/v/r4/sim/eyJrIjoiMSIsImIiOiI4NjUxMmM2Zi1jYWY2LTQxZjQtOTUwMy1lNDI3MGIzN2I5NGYifQ==/fhir';

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
export const getRequestBundle = (patientId) => ({
  resourceType: 'Bundle',
  type: 'batch',
  entry: [
    {
      request: {
        method: 'GET',
        url: `Patient/${patientId}`,
      },
    },
    {
      request: {
        method: 'GET',
        url: `ExplanationOfBenefit?patient=${patientId}`,
      },
    },
    {
      request: {
        method: 'GET',
        url: `Claim?patient=${patientId}`,
      },
    },
    {
      request: {
        method: 'GET',
        url: `Condition?patient=${patientId}`,
      },
    },
    {
      request: {
        method: 'GET',
        url: `Encounter?patient=${patientId}`,
      },
    },
    {
      request: {
        method: 'GET',
        url: `Immunization?patient=${patientId}`,
      },
    },
    {
      request: {
        method: 'GET',
        url: `MedicationRequest?patient=${patientId}`,
      },
    },
    {
      request: {
        method: 'GET',
        url: `CarePlan?patient=${patientId}`,
      },
    },
    {
      request: {
        method: 'GET',
        url: `DiagnosticReport?patient=${patientId}`,
      },
    },
    {
      request: {
        method: 'GET',
        url: `Procedure?patient=${patientId}`,
      },
    },
    {
      request: {
        method: 'GET',
        url: `Observation?patient=${patientId}`,
      },
    },
  ],
});

export const getBundle = (patientId, fhirClient) => {
  const requestBundle = getRequestBundle(patientId);
  return fhirClient.batch({ body: requestBundle });
};
