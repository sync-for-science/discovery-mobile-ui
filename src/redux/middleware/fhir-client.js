import Client from 'fhir-kit-client';
// import { Alert } from 'react-native';

const RESOURCE_TYPES = [
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

export default class FhirClient {
  constructor() {
    this.client = null;
  }

  initialize(baseUrl, accessToken) {
    this.client = new Client({
      baseUrl,
      customHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  async queryPatient(patientId) {
    return this.client.batch({
      body: {
        resourceType: 'Bundle',
        type: 'batch',
        entry: RESOURCE_TYPES.map((type) => (
          {
            request: {
              method: 'GET',
              url: (type === 'Patient') ? `${type}/${patientId}` : `${type}?patient=${patientId}`,
            },
          }
        )),
      },
    });
  }

  async request(url) {
    return this.client.request(url);
  }
}
