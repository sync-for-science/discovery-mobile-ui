import Client from 'fhir-kit-client';
// import { Alert } from 'react-native';

import epicParams from '../../../config/epic-params';

const { Buffer } = require('buffer');

// JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grants
//     https://datatracker.ietf.org/doc/html/rfc7523
// JSON Web Token Best Current Practices
//     https://datatracker.ietf.org/doc/html/rfc8725
export const decodeIdToken = (idToken) => idToken.split('.').map((data, index) => {
  // return `https://launch.smarthealthit.org/v/r4/sim/${Buffer.from(issDataString).toString('base64')}/fhir`;
  // const buffer = new Buffer(data, 'base64');
  const buffer = Buffer.from(data, 'base64');
  const segment = buffer.toString('ascii');
  if (index < 2) {
    try {
      return JSON.parse(segment.toString());
    } catch (e) {
      console.error('decodeIdToken ERROR: ', e); // eslint-disable-line no-console
    }
  }
  return segment;
});

export default class FhirClient {
  constructor(baseUrl, accessToken, idToken) {
    this.decodedIdToken = decodeIdToken(idToken);
    this.patientId = this.decodedIdToken[1].sub;

    console.info('FhirClient baseUrl: ', baseUrl);
    console.info('FhirClient accessToken: ', accessToken);
    console.info('FhirClient patientId: ', this.patientId);

    this.client = new Client({
      baseUrl,
      customHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  queryPatient() {
    const { patientId } = this;
    const requests = [() => this.client.request(`Patient/${patientId}`)];

    epicParams.forEach(({ type, params }) => {
      requests.push(() => this.client.search({
        resourceType: type,
        searchParams: {
          ...params,
          patient: patientId,
        },
      }));
    });

    return requests;
  }

  async request(url) {
    return this.client.request(url);
  }

  async resolve(params) {
    return this.client.resolve(params);
  }
}
