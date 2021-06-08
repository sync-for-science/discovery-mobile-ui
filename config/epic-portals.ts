import { Endpoint } from 'fhir/r4'; // eslint-disable-line import/no-extraneous-dependencies

import { TypedBundle } from '../types/s4s';

// https://open.epic.com/Endpoints/R4

export default {
  resourceType: 'Bundle',
  type: 'collection',
  timestamp: '2022-02-14T14:57:16.2886697-06:00',
  total: 346,
  entry: [
    {
      resource: {
        resourceType: 'Endpoint',
        id: '722f674a-bc26-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'wKXfrWxRseDINGJtJv08ACGfuPnk2h4SKmdTeEUIA4Q=',
            name: 'Kaiser Permanente – Georgia',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Kaiser Permanente – Georgia',
        managingOrganization: {
          reference: 'wKXfrWxRseDINGJtJv08ACGfuPnk2h4SKmdTeEUIA4Q=',
        },
        period: {
          start: '2021-10-06T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.kp.org/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/200/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '7265770b-0a31-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'wKXfrWxRseDINGJtJv08ACGfuPnk2h4SKmdTeEUIA4Q=',
            name: 'Kaiser Permanente – Oregon – SW Washington',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Kaiser Permanente – Oregon – SW Washington',
        managingOrganization: {
          reference: 'wKXfrWxRseDINGJtJv08ACGfuPnk2h4SKmdTeEUIA4Q=',
        },
        period: {
          start: '2021-10-26T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://FHIR.KP.ORG/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/190/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'f92d2a8b-da25-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Ue8NJmSCopiRxe5U7PLlZHlSvKECFdRYyQH0y6Gs9Bw=',
            name: 'Kelsey-Seybold Clinic',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Kelsey-Seybold Clinic',
        managingOrganization: {
          reference: 'Ue8NJmSCopiRxe5U7PLlZHlSvKECFdRYyQH0y6Gs9Bw=',
        },
        period: {
          start: '2021-11-09T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://ssrx.ksnet.com/FhirProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '2ce5767c-ed04-eb11-9130-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'khM6KprpyxukjEWUeY8OZZluyxNWv3BpjdNATpLLjOU=',
            name: "Ann & Robert H. Lurie Children's Hospital of Chicago",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Ann & Robert H. Lurie Children's Hospital of Chicago",
        managingOrganization: {
          reference: 'khM6KprpyxukjEWUeY8OZZluyxNWv3BpjdNATpLLjOU=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicmobile.luriechildrens.org/Interconnect-FHIRPRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'c6b565c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'GMpNqljeJazI3Gv/DxqrgxFT2XsyKly2SjzD4+6jdE4=',
            name: "Children's Hospital Colorado",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Children's Hospital Colorado",
        managingOrganization: {
          reference: 'GMpNqljeJazI3Gv/DxqrgxFT2XsyKly2SjzD4+6jdE4=',
        },
        period: {
          start: '2021-12-01T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.childrenscolorado.org/fhirprd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'f2c16039-d37a-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'ZbTAbV9n8TY53GwMbPFFtwvn5dTOr/eKaCcFML1OVjw=',
            name: 'Atrius Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Atrius Health',
        managingOrganization: {
          reference: 'ZbTAbV9n8TY53GwMbPFFtwvn5dTOr/eKaCcFML1OVjw=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://iatrius.atriushealth.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '1d374bca-fdd4-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'jdYtMw2Tz3YSNGkYKz7Gm/vhxtH7jkvR9O3ktVto+Sg=',
            name: "UCSF Benioff Children's Hospital",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "UCSF Benioff Children's Hospital",
        managingOrganization: {
          reference: 'jdYtMw2Tz3YSNGkYKz7Gm/vhxtH7jkvR9O3ktVto+Sg=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://unified-api.ucsf.edu/clinical/apex/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e27ab767-cb13-eb11-9130-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'jdYtMw2Tz3YSNGkYKz7Gm/vhxtH7jkvR9O3ktVto+Sg=',
            name: 'UCSF Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'UCSF Health',
        managingOrganization: {
          reference: 'jdYtMw2Tz3YSNGkYKz7Gm/vhxtH7jkvR9O3ktVto+Sg=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://unified-api.ucsf.edu/clinical/apex/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '9c766868-6636-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'hSRFVeCV5f5TT4OgDdWT9MpqsrqUv84XTLYEIR6aKxc=',
            name: 'UChicago Medicine',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'UChicago Medicine',
        managingOrganization: {
          reference: 'hSRFVeCV5f5TT4OgDdWT9MpqsrqUv84XTLYEIR6aKxc=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://interconapps.uchospitals.edu/PRD-FHIR-Proxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'cdb565c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'HKrLwOGVWykflJ6tJJWu+T8ZcNTV43uScYm2utGsRhQ=',
            name: 'Duly Health and Care',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Duly Health and Care',
        managingOrganization: {
          reference: 'HKrLwOGVWykflJ6tJJWu+T8ZcNTV43uScYm2utGsRhQ=',
        },
        period: {
          start: '2022-01-13T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhirprd.edward.org/fhirprd/DMGOAUTH/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'ceb565c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'HKrLwOGVWykflJ6tJJWu+T8ZcNTV43uScYm2utGsRhQ=',
            name: 'Edward-Elmhurst Healthcare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Edward-Elmhurst Healthcare',
        managingOrganization: {
          reference: 'HKrLwOGVWykflJ6tJJWu+T8ZcNTV43uScYm2utGsRhQ=',
        },
        period: {
          start: '2022-01-13T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhirprd.edward.org/fhirprd/EEHOAUTH/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'd789a35f-d3ce-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '6lOxtCQSJDKVyCTMWDH+HHzp+Ej8bvYg6/srw3Rlecw=',
            name: 'Geisinger',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Geisinger',
        managingOrganization: {
          reference: '6lOxtCQSJDKVyCTMWDH+HHzp+Ej8bvYg6/srw3Rlecw=',
        },
        period: {
          start: '2021-08-03T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://geisapi.geisinger.edu/FHIR_PROD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '344ed595-5e6d-eb11-9143-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'tb0XAqEHyDoMQEgE1SYzExC0sCgbw3c//hm2qQXKpbM=',
            name: 'HealthPartners',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'HealthPartners',
        managingOrganization: {
          reference: 'tb0XAqEHyDoMQEgE1SYzExC0sCgbw3c//hm2qQXKpbM=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://proxy.healthpartners.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e3aa9c3b-6917-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'd9jD9W6N/87jXZdLSW+Xa6XrQ3BSBJZbrQ12iOWhQdM=',
            name: 'UW Medicine (Washington)',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'UW Medicine (Washington)',
        managingOrganization: {
          reference: 'd9jD9W6N/87jXZdLSW+Xa6XrQ3BSBJZbrQ12iOWhQdM=',
        },
        period: {
          start: '2021-10-12T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.epic.medical.washington.edu/FHIR-Proxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'd1b565c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Y/zytLlDUSDF4QrhyOQZTOAhAtVKEpdSB5WrgUzPkzQ=',
            name: 'University of Pittsburgh Medical Center (UPMC)',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'University of Pittsburgh Medical Center (UPMC)',
        managingOrganization: {
          reference: 'Y/zytLlDUSDF4QrhyOQZTOAhAtVKEpdSB5WrgUzPkzQ=',
        },
        period: {
          start: '2021-12-23T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epic-fhir-prd.upmc.com/FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '58b9bc2b-e4d8-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '3rcAQdXHeiUMvCFD6IGGVOfxfLO6016ZtBMl/UEoVdU=',
            name: 'East Boston Neighborhood Health Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'East Boston Neighborhood Health Center',
        managingOrganization: {
          reference: '3rcAQdXHeiUMvCFD6IGGVOfxfLO6016ZtBMl/UEoVdU=',
        },
        period: {
          start: '2021-07-06T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://ebmobile14.ebnhc.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'a827fa04-dd90-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'AlwOtzwapIKCGtSLxhMOMi89+OMDGCgxaK/e9jLESns=',
            name: 'Sutter Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Sutter Health',
        managingOrganization: {
          reference: 'AlwOtzwapIKCGtSLxhMOMi89+OMDGCgxaK/e9jLESns=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://apiservices.sutterhealth.org/ifs/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '36da8e0f-9915-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Uxst7HHcU6B2g5OiYaq6cIySgP9IgSymv7QL7gQckUw=',
            name: 'MetroHealth - OH',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'MetroHealth - OH',
        managingOrganization: {
          reference: 'Uxst7HHcU6B2g5OiYaq6cIySgP9IgSymv7QL7gQckUw=',
        },
        period: {
          start: '2021-12-07T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.metrohealth.org/fhir_prd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'b4087ebe-fc96-eb11-9145-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'oQGqxi0OGME5DuJu8qvoj5U9+wuHUTYjuyi0ShXo730=',
            name: 'Rush University Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Rush University Medical Center',
        managingOrganization: {
          reference: 'oQGqxi0OGME5DuJu8qvoj5U9+wuHUTYjuyi0ShXo730=',
        },
        period: {
          start: '2021-09-21T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.rush.edu/fhir-prd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '4e94b278-c72a-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'x8wa0Afu4UCwSZeAYYrc9bFyYoBkyS6oRgYiGY4Jm5g=',
            name: 'Penn Medicine',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Penn Medicine',
        managingOrganization: {
          reference: 'x8wa0Afu4UCwSZeAYYrc9bFyYoBkyS6oRgYiGY4Jm5g=',
        },
        period: {
          start: '2021-10-12T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://ssproxy.pennhealth.com/PRD-FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'dce47f24-281b-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'inUcDdCVbZ88yOn+rN7DNjKm/Q97F94skgVts2qBHBk=',
            name: 'Parkland',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Parkland',
        managingOrganization: {
          reference: 'inUcDdCVbZ88yOn+rN7DNjKm/Q97F94skgVts2qBHBk=',
        },
        period: {
          start: '2021-10-29T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://pmh-vmhaiku-01.pmh.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'ad2a45ce-7b11-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'RZ4mcxiPBHk+CY/RybzjyJTsVXs3dnq8D2fAc3bSXtY=',
            name: 'Adventist Health West',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Adventist Health West',
        managingOrganization: {
          reference: 'RZ4mcxiPBHk+CY/RybzjyJTsVXs3dnq8D2fAc3bSXtY=',
        },
        period: {
          start: '2021-10-28T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicescribe1.ah.org/ARR-FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '93e84fd6-ce77-eb11-9143-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Wv0wZHvkL8VSqbg2FxA3/QB8j8uh5OxL0TaUYfr7eR0=',
            name: 'University of Utah Healthcare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'University of Utah Healthcare',
        managingOrganization: {
          reference: 'Wv0wZHvkL8VSqbg2FxA3/QB8j8uh5OxL0TaUYfr7eR0=',
        },
        period: {
          start: '2021-09-13T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://webproxyprd.med.utah.edu/FHIRMyChart/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'c7eba562-3254-eb11-9141-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'YCf4PDFvLHSCPsyZw1kRIjDZQd5sC+Lb+aOnuXoaJOM=',
            name: 'ThedaCare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'ThedaCare',
        managingOrganization: {
          reference: 'YCf4PDFvLHSCPsyZw1kRIjDZQd5sC+Lb+aOnuXoaJOM=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://arr.thedacare.org/FHIR/TC/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '3b0fbe1d-66d4-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'YCf4PDFvLHSCPsyZw1kRIjDZQd5sC+Lb+aOnuXoaJOM=',
            name: 'Bellin Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Bellin Health',
        managingOrganization: {
          reference: 'YCf4PDFvLHSCPsyZw1kRIjDZQd5sC+Lb+aOnuXoaJOM=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://arr.thedacare.org/FHIR/BLN/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e7a7a41b-d91b-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '6PRv5snbcr8k0CBv0LZi6+IKZl0sQlIlVb+B7/UXWS8=',
            name: 'Fairview Health Services',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Fairview Health Services',
        managingOrganization: {
          reference: '6PRv5snbcr8k0CBv0LZi6+IKZl0sQlIlVb+B7/UXWS8=',
        },
        period: {
          start: '2021-12-06T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://sfd.fairview.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e1b565c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'u2l1aQMq6CoBq2jtpp0bJp0vL+RHLSt8PxY+NTjl30U=',
            name: 'Carle Foundation Hospital & Physician Group',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Carle Foundation Hospital & Physician Group',
        managingOrganization: {
          reference: 'u2l1aQMq6CoBq2jtpp0bJp0vL+RHLSt8PxY+NTjl30U=',
        },
        period: {
          start: '2021-12-21T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicsoap.carle.com/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '4ad8cf0d-fe87-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '4UHahS9Gn1H4+3h+zjVXztnzLr13khxhdYh1T8TINcs=',
            name: 'Buffalo Medical Group',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Buffalo Medical Group',
        managingOrganization: {
          reference: '4UHahS9Gn1H4+3h+zjVXztnzLr13khxhdYh1T8TINcs=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.buffalomedicalgroup.com/fhir-arr/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '65635fc6-1601-ec11-914b-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'mKIYK0Qlfo2OSpHN0iQ08m8s0f+FuHS99CCaDz/r/yE=',
            name: 'TriHealth',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'TriHealth',
        managingOrganization: {
          reference: 'mKIYK0Qlfo2OSpHN0iQ08m8s0f+FuHS99CCaDz/r/yE=',
        },
        period: {
          start: '2021-08-20T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicscripts.trihealth.com/fhirproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e5b565c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'RkQ4Zx/T23ucrFHsBs77s/0JAzYQ2Aht0AO5SP0Ups0=',
            name: 'Nemours',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Nemours',
        managingOrganization: {
          reference: 'RkQ4Zx/T23ucrFHsBs77s/0JAzYQ2Aht0AO5SP0Ups0=',
        },
        period: {
          start: '2021-12-02T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://iconnect.nemours.org/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e6b565c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'LImroyJCetTurHeTQmiiQqLVRSL7BW6BdqPursOv8RU=',
            name: 'SolutionHealth',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'SolutionHealth',
        managingOrganization: {
          reference: 'LImroyJCetTurHeTQmiiQqLVRSL7BW6BdqPursOv8RU=',
        },
        period: {
          start: '2021-12-07T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxyprd.solutionhealth.org/FHIR_PROD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'edb565c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'S9JJoB881BoVx2P/0Eyv768TRlLBxUWkvLD8uCNcAU8=',
            name: 'University of Texas Southwestern Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'University of Texas Southwestern Medical Center',
        managingOrganization: {
          reference: 'S9JJoB881BoVx2P/0Eyv768TRlLBxUWkvLD8uCNcAU8=',
        },
        period: {
          start: '2021-11-05T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://EpicIntprxyPRD.swmed.edu/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '95e29194-2d88-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 't0et1iG6LC5WAa1erq1j/aXTX6o5l5JbadsD6ZWzL2M=',
            name: "Children's Hospital of Philadelphia",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Children's Hospital of Philadelphia",
        managingOrganization: {
          reference: 't0et1iG6LC5WAa1erq1j/aXTX6o5l5JbadsD6ZWzL2M=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicnsproxy.chop.edu/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '24755363-e2d8-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'S97tC9ZOOBSzPlIR8BsmYkMTcKXzWKGRhzSP2Re8TAI=',
            name: 'Group Health Cooperative - South Central Wisconsin',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Group Health Cooperative - South Central Wisconsin',
        managingOrganization: {
          reference: 'S97tC9ZOOBSzPlIR8BsmYkMTcKXzWKGRhzSP2Re8TAI=',
        },
        period: {
          start: '2021-12-16T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://linkpoint.ghcscw.com/Interconnect-prd-fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '797c9092-7b28-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'NVOCXTBi3s5SF0v2sTb6rwSJRxQMN7hs0V51qyUD6Y8=',
            name: 'Presbyterian Healthcare Services',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Presbyterian Healthcare Services',
        managingOrganization: {
          reference: 'NVOCXTBi3s5SF0v2sTb6rwSJRxQMN7hs0V51qyUD6Y8=',
        },
        period: {
          start: '2021-12-09T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicFHIR.phs.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '55c316f0-49d0-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'fmBN0+MvMM0FMTbG3R6tcKKZDinpLeuONpx1bGHnLhY=',
            name: 'Contra Costa',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Contra Costa',
        managingOrganization: {
          reference: 'fmBN0+MvMM0FMTbG3R6tcKKZDinpLeuONpx1bGHnLhY=',
        },
        period: {
          start: '2021-12-17T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://icproxy.mycclink.org/proxy-FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'fd4a6e76-bf1a-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'abF6ybx1KoUN4TVNnuJz/9wDvBNRhjD2FojvQWQQwZc=',
            name: 'Institute for Family Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Institute for Family Health',
        managingOrganization: {
          reference: 'abF6ybx1KoUN4TVNnuJz/9wDvBNRhjD2FojvQWQQwZc=',
        },
        period: {
          start: '2021-11-24T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.institute.org/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '00fc6b17-712a-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'RfJiKGnbUO6/oUdKSQQuQ2MSdtYsvKpNabDGGgYDeTA=',
            name: 'NorthShore University Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'NorthShore University Health System',
        managingOrganization: {
          reference: 'RfJiKGnbUO6/oUdKSQQuQ2MSdtYsvKpNabDGGgYDeTA=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://haiku.northshore.org/Interconnect-FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '9355839c-629d-eb11-9145-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '7+BjKM8+1bVMliUc/pRUsIi7NuISfAsqHe+Je5NYTIk=',
            name: 'OCHIN',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'OCHIN',
        managingOrganization: {
          reference: '7+BjKM8+1bVMliUc/pRUsIi7NuISfAsqHe+Je5NYTIk=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://webprd.ochin.org/prd-fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '2ff92d02-5cbd-eb11-913d-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'PNr1udzspTjiGeFLvMbaXWFlPlQ2fwbYbiYI+BFeV3g=',
            name: 'The Guthrie Clinic',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'The Guthrie Clinic',
        managingOrganization: {
          reference: 'PNr1udzspTjiGeFLvMbaXWFlPlQ2fwbYbiYI+BFeV3g=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.guthrie.org/FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '3cf22c14-6536-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'WP4h5DjPwvW9aXJPOtEFJX0yII8XsNbVn8X6ahpXWuA=',
            name: 'University Hospital (New Jersey)',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'University Hospital (New Jersey)',
        managingOrganization: {
          reference: 'WP4h5DjPwvW9aXJPOtEFJX0yII8XsNbVn8X6ahpXWuA=',
        },
        period: {
          start: '2021-12-07T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicarrprod.uhnj.org/FHIR-Proxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'fdb565c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'BwFmerKYvN0SngKm3X/jcxV+8Ar4HYUeF+xY5g0EuTc=',
            name: 'Kaiser Permanente - Washington',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Kaiser Permanente - Washington',
        managingOrganization: {
          reference: 'BwFmerKYvN0SngKm3X/jcxV+8Ar4HYUeF+xY5g0EuTc=',
        },
        period: {
          start: '2021-11-18T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.kp.org/Interconnect-FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '36ae67b7-f819-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'gbSQuk77UiOK1kSNXJTe5x8GCeABI/dtY7uBYDDBpoo=',
            name: 'Hospital Sisters Health System (HSHS)',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Hospital Sisters Health System (HSHS)',
        managingOrganization: {
          reference: 'gbSQuk77UiOK1kSNXJTe5x8GCeABI/dtY7uBYDDBpoo=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://scripts.prevea.com/FHIR-ARR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '61fe9007-7dca-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'YCZ+8O8qKjmWqiyKHFHBllKY5T2uqG8c624MaNKOeoc=',
            name: 'TMC HealthCare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'TMC HealthCare',
        managingOrganization: {
          reference: 'YCZ+8O8qKjmWqiyKHFHBllKY5T2uqG8c624MaNKOeoc=',
        },
        period: {
          start: '2021-06-28T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.tmcaz.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'c4d2cf19-dcf8-eb11-914b-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '7w+hwlmw4LNtkY2WedxKJJmQGhFE25KJnhjnlOGsQ5M=',
            name: 'Austin Regional Clinic',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Austin Regional Clinic',
        managingOrganization: {
          reference: '7w+hwlmw4LNtkY2WedxKJJmQGhFE25KJnhjnlOGsQ5M=',
        },
        period: {
          start: '2021-08-09T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://mobileprod.arcmd.com/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '03b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'P8A2OjoLXbfjexV9vixmxaccWkO3Eaz46Z8LwZOTob0=',
            name: 'UC Davis',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'UC Davis',
        managingOrganization: {
          reference: 'P8A2OjoLXbfjexV9vixmxaccWkO3Eaz46Z8LwZOTob0=',
        },
        period: {
          start: '2022-01-19T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://emrrp.ucdmc.ucdavis.edu/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '04b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'P8A2OjoLXbfjexV9vixmxaccWkO3Eaz46Z8LwZOTob0=',
            name: 'UC Davis - MMC',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'UC Davis - MMC',
        managingOrganization: {
          reference: 'P8A2OjoLXbfjexV9vixmxaccWkO3Eaz46Z8LwZOTob0=',
        },
        period: {
          start: '2022-01-19T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://emrrp.ucdmc.ucdavis.edu/FHIR/MMC/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'fac7c00c-fb19-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '4KE5hVcLhuR5hNmelkoQQkHKbY+pYKWx0izJQGdnvxE=',
            name: 'Froedtert Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Froedtert Health',
        managingOrganization: {
          reference: '4KE5hVcLhuR5hNmelkoQQkHKbY+pYKWx0izJQGdnvxE=',
        },
        period: {
          start: '2021-09-21T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicserviceGW.froedtert.com/FHIRProxyPRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '50f9ecb0-b114-eb11-9130-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'RrNzgF26G91AljdUfkJMWK5TAAPLPR75ifH48cCBikw=',
            name: 'Aspirus',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Aspirus',
        managingOrganization: {
          reference: 'RrNzgF26G91AljdUfkJMWK5TAAPLPR75ifH48cCBikw=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://erx.aspirus.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '08b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '5JqCKBHnkgPeG5kkdyCNoALP5DQuO067oFvat/eQ8dw=',
            name: 'Loyola Medicine',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Loyola Medicine',
        managingOrganization: {
          reference: '5JqCKBHnkgPeG5kkdyCNoALP5DQuO067oFvat/eQ8dw=',
        },
        period: {
          start: '2021-11-18T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://rxhub.luhs.org/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'd77a0aa1-632c-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'NrmSV9bhojMw5m7x8toYSWry0+hTLfDAVIaax/GOudY=',
            name: 'Allina Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Allina Health System',
        managingOrganization: {
          reference: 'NrmSV9bhojMw5m7x8toYSWry0+hTLfDAVIaax/GOudY=',
        },
        period: {
          start: '2021-10-29T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://webproxy.allina.com/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'bf43c2aa-b413-eb11-9130-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'YmtZ04fJcMRBbEnQAQGdE0isf4BC8QW0IBJHKHabLbo=',
            name: "Childrens's Healthcare of Atlanta",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Childrens's Healthcare of Atlanta",
        managingOrganization: {
          reference: 'YmtZ04fJcMRBbEnQAQGdE0isf4BC8QW0IBJHKHabLbo=',
        },
        period: {
          start: '2021-11-05T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://wpprod.choa.org/FHIR_PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '0db665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'UvaSRWCTAjlCAwbMhVSmqJVeshdosF0Z6x1Fq9sXsC4=',
            name: 'University of Texas Medical Branch',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'University of Texas Medical Branch',
        managingOrganization: {
          reference: 'UvaSRWCTAjlCAwbMhVSmqJVeshdosF0Z6x1Fq9sXsC4=',
        },
        period: {
          start: '2021-12-17T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epic-arr.utmb.edu/fhir-prd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '6bf1ca9f-f819-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'g2WNBeVVPvl6ygYIf9bHNcAdPvEnwZPAEdTrHd2WEQA=',
            name: 'Kaiser Permanente - Colorado',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Kaiser Permanente - Colorado',
        managingOrganization: {
          reference: 'g2WNBeVVPvl6ygYIf9bHNcAdPvEnwZPAEdTrHd2WEQA=',
        },
        period: {
          start: '2021-10-11T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.kp.org/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/140/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '9f42d6d0-f819-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '0YQd00Wmq6WYN6jpLOJG7XlRiVbymZiciIp0Y7wDtIQ=',
            name: 'Kaiser Permanente Hawaii / Maui Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Kaiser Permanente Hawaii / Maui Health System',
        managingOrganization: {
          reference: '0YQd00Wmq6WYN6jpLOJG7XlRiVbymZiciIp0Y7wDtIQ=',
        },
        period: {
          start: '2021-10-11T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.kp.org/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/130/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '701cac38-f919-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'V/sH8su2/+hPlCzkDCXG17uGFaIX92YXz5ixGLEzPEo=',
            name: 'Kaiser Permanente - Maryland/Virginia/Washington D.C.',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Kaiser Permanente - Maryland/Virginia/Washington D.C.',
        managingOrganization: {
          reference: 'V/sH8su2/+hPlCzkDCXG17uGFaIX92YXz5ixGLEzPEo=',
        },
        period: {
          start: '2021-10-11T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.kp.org/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/170/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '21b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Ml3A9EcjVCSQrOgzD2Z6yF1sIXnMImiFPBRmn86SWKs=',
            name: 'Kaiser Permanente - California - Northern',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Kaiser Permanente - California - Northern',
        managingOrganization: {
          reference: 'Ml3A9EcjVCSQrOgzD2Z6yF1sIXnMImiFPBRmn86SWKs=',
        },
        period: {
          start: '2021-11-18T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://FHIR.KP.ORG/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/312/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '6c0b96c1-e222-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'faKGNZ1FiGGji7G5Kuwe5dfF/33v79leP/ac3B7k0YE=',
            name: 'Kaiser Permanente - California - Southern',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Kaiser Permanente - California - Southern',
        managingOrganization: {
          reference: 'faKGNZ1FiGGji7G5Kuwe5dfF/33v79leP/ac3B7k0YE=',
        },
        period: {
          start: '2021-10-11T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.kp.org/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/212/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e7625ad2-5fb3-eb11-913d-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'hsz0aJNJXA0q0dT13Go/Q1juurC1H24nMFZSflNQDzE=',
            name: 'Beaumont Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Beaumont Health',
        managingOrganization: {
          reference: 'hsz0aJNJXA0q0dT13Go/Q1juurC1H24nMFZSflNQDzE=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://moc.beaumont.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '67c84243-80f0-eb11-914b-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'ik3i2d4evzWAc10ke+iDxeRwv3zViLuTvbxMm0HpCqo=',
            name: 'Texas Health Resources',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Texas Health Resources',
        managingOrganization: {
          reference: 'ik3i2d4evzWAc10ke+iDxeRwv3zViLuTvbxMm0HpCqo=',
        },
        period: {
          start: '2021-08-12T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epproxy.texashealth.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '48b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'P15iarpXkgNsGqqWNkkzP0s7hlyXD+UUD9hXqenoVHE=',
            name: 'Premier Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Premier Health',
        managingOrganization: {
          reference: 'P15iarpXkgNsGqqWNkkzP0s7hlyXD+UUD9hXqenoVHE=',
        },
        period: {
          start: '2021-12-21T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://rx.premierhealthpartners.org/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '58ec6835-6ad4-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'citR0YnnR57PLAsgdxF2To1TIsp9nse3z/cbkQSrQo0=',
            name: 'MemorialCare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'MemorialCare',
        managingOrganization: {
          reference: 'citR0YnnR57PLAsgdxF2To1TIsp9nse3z/cbkQSrQo0=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.memorialcare.org/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '339b4a1b-fe19-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '+6KAc6U97H2uXW3MTaBXYu8SKvr6he9mkhEyHjJDJyY=',
            name: "The Queen's Health Systems",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "The Queen's Health Systems",
        managingOrganization: {
          reference: '+6KAc6U97H2uXW3MTaBXYu8SKvr6he9mkhEyHjJDJyY=',
        },
        period: {
          start: '2021-09-24T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://mobileapps.queens.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '37d4a2f9-ba1c-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'b8u/Egf0EfCXw8IEliyjqYW3CfUNrHl6Jj3RD+4YyG0=',
            name: 'University of California San Diego',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'University of California San Diego',
        managingOrganization: {
          reference: 'b8u/Egf0EfCXw8IEliyjqYW3CfUNrHl6Jj3RD+4YyG0=',
        },
        period: {
          start: '2022-02-08T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0502.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '4bb665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'dVthT4A5z8hNs6FEpXgtI4t9cr9p8ibTuDZ0+/+b/I4=',
            name: 'Methodist Hospitals - PRD',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Methodist Hospitals - PRD',
        managingOrganization: {
          reference: 'dVthT4A5z8hNs6FEpXgtI4t9cr9p8ibTuDZ0+/+b/I4=',
        },
        period: {
          start: '2021-12-29T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://mychart.methodisthospitals.org/FHIR-ARR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'c32c901b-3c50-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'fuqQJOWE77VdWZGh+M2Z6Ee9Rsu6wFzsBqPUBmtH+S0=',
            name: 'Oregon Health & Science University',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Oregon Health & Science University',
        managingOrganization: {
          reference: 'fuqQJOWE77VdWZGh+M2Z6Ee9Rsu6wFzsBqPUBmtH+S0=',
        },
        period: {
          start: '2021-01-08T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicmobile.ohsu.edu/FHIRPRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'dffbdf22-d5d2-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'LLsPtD3034laFnKdDGhuvE2lr+tCmYCAX3G4cyyriis=',
            name: 'Sanford Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Sanford Health',
        managingOrganization: {
          reference: 'LLsPtD3034laFnKdDGhuvE2lr+tCmYCAX3G4cyyriis=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://eprescribe.sanfordhealth.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '0a7b631f-fa75-eb11-9143-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '5aY4Thc3lGkAJ6YZ0tNh7A9USwWipzKaF1A/un+tP+I=',
            name: 'North Memorial Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'North Memorial Health',
        managingOrganization: {
          reference: '5aY4Thc3lGkAJ6YZ0tNh7A9USwWipzKaF1A/un+tP+I=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://minerva.northmemorial.com/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'd3f0b8cb-1d05-ec11-9141-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'q48Dpwi5rAkK/9Hjr+bAEKpUeJZmJFI0Vwldt1UMRIM=',
            name: 'Hennepin Healthcare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Hennepin Healthcare',
        managingOrganization: {
          reference: 'q48Dpwi5rAkK/9Hjr+bAEKpUeJZmJFI0Vwldt1UMRIM=',
        },
        period: {
          start: '2021-12-01T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://hie.hcmed.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '063da454-f587-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '9a42NYi510GPtKLFGfKrQeKZhUBpFQ9C7/RfXFF/lFw=',
            name: 'Reliant Medical Group',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Reliant Medical Group',
        managingOrganization: {
          reference: '9a42NYi510GPtKLFGfKrQeKZhUBpFQ9C7/RfXFF/lFw=',
        },
        period: {
          start: '2021-07-01T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhirprd.reliantmedicalgroup.org/FHIRPRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '4f86d85e-fa16-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'apxMz5wmKORDFMczT2CA9K9n/ho1fmiaB+oAZl8nrak=',
            name: 'Mount Sinai Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Mount Sinai Health System',
        managingOrganization: {
          reference: 'apxMz5wmKORDFMczT2CA9K9n/ho1fmiaB+oAZl8nrak=',
        },
        period: {
          start: '2021-10-05T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicsoapproxyprd.mountsinai.org/FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e286037a-c990-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Ooj5OmcEJJJ/TLc5e01R+YTTJZw1TaT+e55Owoi3k6I=',
            name: 'Renown, Barton, CVMC',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Renown, Barton, CVMC',
        managingOrganization: {
          reference: 'Ooj5OmcEJJJ/TLc5e01R+YTTJZw1TaT+e55Owoi3k6I=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.renown.org/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '52b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'EZpW5oE02kVZu838ygyNp+BZDDxzHJloTG8z+jeAjN0=',
            name: 'CentraCare Health and Affiliates',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'CentraCare Health and Affiliates',
        managingOrganization: {
          reference: 'EZpW5oE02kVZu838ygyNp+BZDDxzHJloTG8z+jeAjN0=',
        },
        period: {
          start: '2021-12-17T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicmobile.centracare.com/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '54b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'uWLq9zLjbGbuLn4xm5RP4vp7l0zoeHJ23P74b2Ws94Y=',
            name: 'Salem Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Salem Health',
        managingOrganization: {
          reference: 'uWLq9zLjbGbuLn4xm5RP4vp7l0zoeHJ23P74b2Ws94Y=',
        },
        period: {
          start: '2022-01-21T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://prd.salemhealth.org/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '0aab163e-d31a-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'sW7H/rLwgzGVzbNYYgilLoataAR+mDSVFmpi7njSzrM=',
            name: 'Lee Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Lee Health',
        managingOrganization: {
          reference: 'sW7H/rLwgzGVzbNYYgilLoataAR+mDSVFmpi7njSzrM=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicedi.leememorial.org/FHIR-prd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '5484fbfe-d80a-ec11-914d-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'uZ4jpqW5XLJHqYnk2AOjw4RFCKKvbqnBmJqsIJ137/I=',
            name: 'Metro Health - Michigan',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Metro Health - Michigan',
        managingOrganization: {
          reference: 'uZ4jpqW5XLJHqYnk2AOjw4RFCKKvbqnBmJqsIJ137/I=',
        },
        period: {
          start: '2021-09-14T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://arrprd.metrohealth.net/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '91a5d87f-2967-eb11-9143-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '1f6t93ghZsc7xuEpBdkYJ9+R75+iawDMTsMMom2Aq4Y=',
            name: 'Sentara Healthcare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Sentara Healthcare',
        managingOrganization: {
          reference: '1f6t93ghZsc7xuEpBdkYJ9+R75+iawDMTsMMom2Aq4Y=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicfhir.sentara.com/ARR-FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '5cb665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'miOaT/3KS5U21xkKooUwjngD2sK2hWE3NIofOSjQTnk=',
            name: 'Lancaster General Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Lancaster General Health',
        managingOrganization: {
          reference: 'miOaT/3KS5U21xkKooUwjngD2sK2hWE3NIofOSjQTnk=',
        },
        period: {
          start: '2022-02-10T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.lghealth.org/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'b330bd2a-0273-eb11-9143-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'JqSth5gKEJoG+MV5hunPheFegwSEVjlQlLYlqytlMn4=',
            name: 'Stanford Health Care',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Stanford Health Care',
        managingOrganization: {
          reference: 'JqSth5gKEJoG+MV5hunPheFegwSEVjlQlLYlqytlMn4=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://sfd.stanfordmed.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'a8d8bb18-0cd9-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'EXS6tFiHViAFwv64qmZ4Qtb8ECHcV9Q5WQq9s8OOCTw=',
            name: 'Mercy Health System - WI',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Mercy Health System - WI',
        managingOrganization: {
          reference: 'EXS6tFiHViAFwv64qmZ4Qtb8ECHcV9Q5WQq9s8OOCTw=',
        },
        period: {
          start: '2021-08-26T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.mhsjvl.org/FHIRproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '5eb665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'USm66/9uHEixfkxd3Tse/A/hWdrRIPxZ/smFlkMKnII=',
            name: "Texas Children's",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Texas Children's",
        managingOrganization: {
          reference: 'USm66/9uHEixfkxd3Tse/A/hWdrRIPxZ/smFlkMKnII=',
        },
        period: {
          start: '2022-01-27T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://mobileapps.texaschildrens.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '61b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'KAbQT8T+Vr3qHhsfGWUPtGerDmQu2eOfxcNme2kkRSY=',
            name: "Children's Hospital and Medical Center, Omaha Nebraska",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Children's Hospital and Medical Center, Omaha Nebraska",
        managingOrganization: {
          reference: 'KAbQT8T+Vr3qHhsfGWUPtGerDmQu2eOfxcNme2kkRSY=',
        },
        period: {
          start: '2022-01-10T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://EPROXY1.chsomaha.org/FHIRPROXY/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'd7e628a1-8c92-eb11-9145-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'mXTLdHkd4pkXMumas3mzo5Y5pf4b5K9UMGa0aENvooc=',
            name: 'University of Maryland Medical System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'University of Maryland Medical System',
        managingOrganization: {
          reference: 'mXTLdHkd4pkXMumas3mzo5Y5pf4b5K9UMGa0aENvooc=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.umm.edu/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '974eac44-9afe-eb11-914b-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '/De0MOfJhOeLIeubpgaiPwXZEdN0nuFyPi6Bi8zi87E=',
            name: 'The Ohio State University Wexner Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'The Ohio State University Wexner Medical Center',
        managingOrganization: {
          reference: '/De0MOfJhOeLIeubpgaiPwXZEdN0nuFyPi6Bi8zi87E=',
        },
        period: {
          start: '2021-11-09T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://ihismufhir.osumc.edu/fhir-prd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '32566f74-7237-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'ttxHfU/ZnLL70fEsgsStIRfb/oJn2BA0Qvk9hqEc2P0=',
            name: 'West Virginia University Medicine',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'West Virginia University Medicine',
        managingOrganization: {
          reference: 'ttxHfU/ZnLL70fEsgsStIRfb/oJn2BA0Qvk9hqEc2P0=',
        },
        period: {
          start: '2021-12-23T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://apps.mywvuchart.com/fhirproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'adf5c533-c217-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'FmGDjf76t4S3V7kc5d9a0eVfUTAezcxlRI9Yw+2sGiA=',
            name: "Cincinnati Children's Hospital Medical Center",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Cincinnati Children's Hospital Medical Center",
        managingOrganization: {
          reference: 'FmGDjf76t4S3V7kc5d9a0eVfUTAezcxlRI9Yw+2sGiA=',
        },
        period: {
          start: '2021-12-21T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://boomer.cchmc.org/fhir/api/fhir/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e4a24d79-9b15-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'FkpmPznub+QVOPeqaRui/OUPsHr+krXVa8SVqKltlr0=',
            name: "Dayton Children's Hospital",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Dayton Children's Hospital",
        managingOrganization: {
          reference: 'FkpmPznub+QVOPeqaRui/OUPsHr+krXVa8SVqKltlr0=',
        },
        period: {
          start: '2021-09-22T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://appprd.childrensdayton.org/interconnect-prd-fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e9abb664-6e36-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'UqLxluv+Qpaygfwek10idhTJsdG/C07sJdBCJbKEXnY=',
            name: 'University of Kansas Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'University of Kansas Health System',
        managingOrganization: {
          reference: 'UqLxluv+Qpaygfwek10idhTJsdG/C07sJdBCJbKEXnY=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.kansashealthsystem.com/interconnect-PRD_FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '708e9f76-9e90-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'RcMmteETySc26Q8eBls/gMwemcc6q/gdn6vHf+cp+4g=',
            name: "Seattle Children's Hospital",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Seattle Children's Hospital",
        managingOrganization: {
          reference: 'RcMmteETySc26Q8eBls/gMwemcc6q/gdn6vHf+cp+4g=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.seattlechildrens.org/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'cfe15ef1-d7b8-eb11-913d-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: '86EZuFoyIMySa647+tW+Da0vopXFyM0Ck7Jjd+GVcdE=',
            name: 'Cooper University Health Care',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Cooper University Health Care',
        managingOrganization: {
          reference: '86EZuFoyIMySa647+tW+Da0vopXFyM0Ck7Jjd+GVcdE=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://iconnect-fhir.cooperhealth.edu/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '84b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '2Y8qtsU+7LnCDTGeDlCoIbhsBETmh4WenTl0WWsgO6k=',
            name: 'The Everett Clinic',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'The Everett Clinic',
        managingOrganization: {
          reference: '2Y8qtsU+7LnCDTGeDlCoIbhsBETmh4WenTl0WWsgO6k=',
        },
        period: {
          start: '2022-01-05T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.myeverettclinic.com/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'ea973520-f685-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'ON6t4s0kNFXjDM2Qyv8FI1t9cTNm86082/rD+WgsyhI=',
            name: 'Bon Secours Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Bon Secours Health System',
        managingOrganization: {
          reference: 'ON6t4s0kNFXjDM2Qyv8FI1t9cTNm86082/rD+WgsyhI=',
        },
        period: {
          start: '2021-08-11T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://haiku.bshsi.org/fhir/BSHSI_OAUTH/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'b1764137-f685-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'ON6t4s0kNFXjDM2Qyv8FI1t9cTNm86082/rD+WgsyhI=',
            name: 'Chesapeake Regional Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Chesapeake Regional Medical Center',
        managingOrganization: {
          reference: 'ON6t4s0kNFXjDM2Qyv8FI1t9cTNm86082/rD+WgsyhI=',
        },
        period: {
          start: '2021-08-11T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://haiku.bshsi.org/fhir/CRMC_OAUTH/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '678f8851-f685-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'ON6t4s0kNFXjDM2Qyv8FI1t9cTNm86082/rD+WgsyhI=',
            name: 'Covenant Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Covenant Health',
        managingOrganization: {
          reference: 'ON6t4s0kNFXjDM2Qyv8FI1t9cTNm86082/rD+WgsyhI=',
        },
        period: {
          start: '2021-08-11T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://haiku.bshsi.org/fhir/COV_OAUTH/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '2d5e326d-f685-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'ON6t4s0kNFXjDM2Qyv8FI1t9cTNm86082/rD+WgsyhI=',
            name: 'Mercy Health - OH, KY',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Mercy Health - OH, KY',
        managingOrganization: {
          reference: 'ON6t4s0kNFXjDM2Qyv8FI1t9cTNm86082/rD+WgsyhI=',
        },
        period: {
          start: '2021-08-11T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://chperx.health-partners.org/Proxy-FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '67ebf4f9-6d5b-eb11-9138-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'aiqPc9h/urdosXXf0hlN6BM32ruwBAkqv/IujrQGOh0=',
            name: 'University of Iowa Health Care',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'University of Iowa Health Care',
        managingOrganization: {
          reference: 'aiqPc9h/urdosXXf0hlN6BM32ruwBAkqv/IujrQGOh0=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://myepicapps.uihealthcare.org/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'eaa7e823-5212-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'jPeqaf+RlPEou4R988+8p4Yzw8ZWZU7uW1V68SR6JDE=',
            name: "Children's Health System of Texas",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Children's Health System of Texas",
        managingOrganization: {
          reference: 'jPeqaf+RlPEou4R988+8p4Yzw8ZWZU7uW1V68SR6JDE=',
        },
        period: {
          start: '2021-09-10T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.childrens.com/prd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e7956987-62b7-eb11-913d-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: '6LQy3z+S/plnxD5WklMMM2xAV6+Rj7O+86bK5QydViY=',
            name: 'OSF HealthCare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'OSF HealthCare',
        managingOrganization: {
          reference: '6LQy3z+S/plnxD5WklMMM2xAV6+Rj7O+86bK5QydViY=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://ssproxy.osfhealthcare.org/fhir-proxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'ed228a93-630a-ec11-9141-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'tInMXgzV7x82M1qZx7Q1IWFEhzlTLtihFxj53LvlRdc=',
            name: 'Carilion Clinic',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Carilion Clinic',
        managingOrganization: {
          reference: 'tInMXgzV7x82M1qZx7Q1IWFEhzlTLtihFxj53LvlRdc=',
        },
        period: {
          start: '2021-09-02T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.carilionclinic.org/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e48fb8f9-b1da-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'eTMaWjjODLHL5mc4H1w6Gq7rwr/AT3aJkGOCgsx1+nQ=',
            name: 'Gundersen Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Gundersen Health System',
        managingOrganization: {
          reference: 'eTMaWjjODLHL5mc4H1w6Gq7rwr/AT3aJkGOCgsx1+nQ=',
        },
        period: {
          start: '2021-08-26T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://scproxy.gundersenhealth.org/FHIRARR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '6839ded7-30ca-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'YjgQtDjW/xMEMUYGDkfBeFdwIRRinlHtRU6VRYH7d5s=',
            name: 'Cedars-Sinai Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Cedars-Sinai Health System',
        managingOrganization: {
          reference: 'YjgQtDjW/xMEMUYGDkfBeFdwIRRinlHtRU6VRYH7d5s=',
        },
        period: {
          start: '2021-06-29T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://cslinkmobile.csmc.edu/fhirproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '2f9a72f5-2f75-eb11-9143-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '7tDEHLpPbeg4L1HDGm1jyUkXx4EOKSiPoG3kLIkV+OI=',
            name: 'SSM Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'SSM Health',
        managingOrganization: {
          reference: '7tDEHLpPbeg4L1HDGm1jyUkXx4EOKSiPoG3kLIkV+OI=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.ssmhc.com/Fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '88b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '8XPLr2q8ijGU4jN10jUoSJdNNcS3HDbhGsm2nC6sanE=',
            name: "King's Daughters Medical Center",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "King's Daughters Medical Center",
        managingOrganization: {
          reference: '8XPLr2q8ijGU4jN10jUoSJdNNcS3HDbhGsm2nC6sanE=',
        },
        period: {
          start: '2021-12-08T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://arrprd.kdmc.net/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '8ffe515d-d831-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'DnCoQsjRbkFI/ty+WK3LYiQL3wpyZYL7R1fdH4tSHcA=',
            name: 'MaineHealth',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'MaineHealth',
        managingOrganization: {
          reference: 'DnCoQsjRbkFI/ty+WK3LYiQL3wpyZYL7R1fdH4tSHcA=',
        },
        period: {
          start: '2021-11-17T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.mainehealth.org/FHIRPRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'dde2879e-c92a-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Ny5ogJUBTdF3FkBuOrYPSAjqHlMzm0HGsYtzqkL+8MA=',
            name: "Rady Children's",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Rady Children's",
        managingOrganization: {
          reference: 'Ny5ogJUBTdF3FkBuOrYPSAjqHlMzm0HGsYtzqkL+8MA=',
        },
        period: {
          start: '2022-02-07T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epcppxl1.rchsd.org/fhirprd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e0fbe108-3c16-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'TrIbBwFAUvP8+E0KIvLARx2n1S8PjAm/g71u7PXxXJA=',
            name: 'University of Vermont Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'University of Vermont Medical Center',
        managingOrganization: {
          reference: 'TrIbBwFAUvP8+E0KIvLARx2n1S8PjAm/g71u7PXxXJA=',
        },
        period: {
          start: '2021-10-13T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.uvmhealth.org/FHIR-ARR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'c8bcfcde-e59d-eb11-9145-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Y0rLSejGOYDLyyfV+z5d8XXnD+k2Ooj6fWr5KE3nl3Q=',
            name: 'SCL Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'SCL Health',
        managingOrganization: {
          reference: 'Y0rLSejGOYDLyyfV+z5d8XXnD+k2Ooj6fWr5KE3nl3Q=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://sclprdproxy.sclhs.net/FHIRPRD-2017/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '59797504-4c54-eb11-9141-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'wiJtL3N9MzPjqI71ZnEDFbLIDYrnGifilBdK9P83n6U=',
            name: 'Franciscan Alliance',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Franciscan Alliance',
        managingOrganization: {
          reference: 'wiJtL3N9MzPjqI71ZnEDFbLIDYrnGifilBdK9P83n6U=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://ema.franciscanalliance.org/FHIR_PROXY/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '8eb665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'B14NOHb7TieWTRGmnIqLlaotPK9d7uwTI6ahiYOMQwc=',
            name: 'The Christ Hospital',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'The Christ Hospital',
        managingOrganization: {
          reference: 'B14NOHb7TieWTRGmnIqLlaotPK9d7uwTI6ahiYOMQwc=',
        },
        period: {
          start: '2022-01-26T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://soapproxyprod.thechristhospital.com/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'a9428986-0681-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'TDrL7V6/WSlutunF8HFBy0FtiL+Kbl00ap5Ueem3r8Y=',
            name: 'Mount Sinai Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Mount Sinai Medical Center',
        managingOrganization: {
          reference: 'TDrL7V6/WSlutunF8HFBy0FtiL+Kbl00ap5Ueem3r8Y=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicfhir.msmc.com/proxysite-prd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '92b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'a0cF0Hi4U5UGe6hJ3+vGBFYpEgSszlAor1UT80DXXvU=',
            name: 'TempleHealth',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'TempleHealth',
        managingOrganization: {
          reference: 'a0cF0Hi4U5UGe6hJ3+vGBFYpEgSszlAor1UT80DXXvU=',
        },
        period: {
          start: '2021-12-09T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicaccess.templehealth.org/FhirProxyPrd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '360ef78d-6678-eb11-9143-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'j0uwt/VJnrfjUFX9MMIOX9pPxLKIFxSimgUuNSzoUtc=',
            name: 'Baylor College of Medicine',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Baylor College of Medicine',
        managingOrganization: {
          reference: 'j0uwt/VJnrfjUFX9MMIOX9pPxLKIFxSimgUuNSzoUtc=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.clinical.bcm.edu/stage1fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '8c411d37-5e33-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'w7geu/w6Huh/wWqOWFoRDEs+vLAllDCxm2WhiLKEh00=',
            name: 'Yuma Regional Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Yuma Regional Medical Center',
        managingOrganization: {
          reference: 'w7geu/w6Huh/wWqOWFoRDEs+vLAllDCxm2WhiLKEh00=',
        },
        period: {
          start: '2021-11-17T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://yrmccare1.yumaregional.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'a324354d-e822-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'rb0easfMpKkQeYwg5xKgFdGbtooZmpZLRhhcWuVRC0s=',
            name: 'Community Medical Centers',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Community Medical Centers',
        managingOrganization: {
          reference: 'rb0easfMpKkQeYwg5xKgFdGbtooZmpZLRhhcWuVRC0s=',
        },
        period: {
          start: '2021-11-05T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicsoapprd.communitymedical.org/arr_fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '84b7aea1-1b1b-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '2an8wbAuzW5v97zfe88Y68DCCGWXRLe3qPAIXhtMGMI=',
            name: 'UF Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'UF Health',
        managingOrganization: {
          reference: '2an8wbAuzW5v97zfe88Y68DCCGWXRLe3qPAIXhtMGMI=',
        },
        period: {
          start: '2021-09-22T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicsoap.shands.ufl.edu/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'c6f38870-cb3c-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'qJYBsoL0wzKhAuuGraJ/F7HThiX3fuEdte489ZanMlw=',
            name: 'McFarland Clinic (Iowa)',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'McFarland Clinic (Iowa)',
        managingOrganization: {
          reference: 'qJYBsoL0wzKhAuuGraJ/F7HThiX3fuEdte489ZanMlw=',
        },
        period: {
          start: '2021-11-10T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://emrproxy.mcfarlandclinic.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '583df01b-5f42-ec11-914e-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'qJYBsoL0wzKhAuuGraJ/F7HThiX3fuEdte489ZanMlw=',
            name: 'Mary Greeley Medical Center (Iowa)',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Mary Greeley Medical Center (Iowa)',
        managingOrganization: {
          reference: 'qJYBsoL0wzKhAuuGraJ/F7HThiX3fuEdte489ZanMlw=',
        },
        period: {
          start: '2021-11-10T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://emrproxy.mcfarlandclinic.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '97b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'BOpZ9UAeu+h9Z+HYEwk6XqHkq6D1GEG35vRipbqZ1n0=',
            name: "Driscoll Children's Hospital",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Driscoll Children's Hospital",
        managingOrganization: {
          reference: 'BOpZ9UAeu+h9Z+HYEwk6XqHkq6D1GEG35vRipbqZ1n0=',
        },
        period: {
          start: '2021-12-22T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.dchstx.org/FHIR-External/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'a337e555-3d3b-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'XcVuTxOYXrraKwcUkpwO8W0hzAiixju1CIt+9Iamz+U=',
            name: 'Luminis Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Luminis Health',
        managingOrganization: {
          reference: 'XcVuTxOYXrraKwcUkpwO8W0hzAiixju1CIt+9Iamz+U=',
        },
        period: {
          start: '2021-11-03T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicarr.aahs.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '777e020c-7661-eb11-9143-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '38DR0FgtrKFxz2a7+lqLseEAG2ERUeR7DOLyu9RkJ30=',
            name: "Akron Children's Hospital",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Akron Children's Hospital",
        managingOrganization: {
          reference: '38DR0FgtrKFxz2a7+lqLseEAG2ERUeR7DOLyu9RkJ30=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://haiku-canto-prod.chmca.org/ARR-FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '6b54288b-7437-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'KJcfvEjncxda+wpDvMIEUa6LTPG5BQrQ0EuNKDfuGtM=',
            name: 'Infirmary Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Infirmary Health',
        managingOrganization: {
          reference: 'KJcfvEjncxda+wpDvMIEUa6LTPG5BQrQ0EuNKDfuGtM=',
        },
        period: {
          start: '2021-12-03T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://ssproxyprod.infirmaryhealth.org/epicFHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '9cb665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'nNo/MKFlpsngvddKOjdK7qoJyejMzQk/KrC2a/dVi+M=',
            name: 'Hackensack Meridian Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Hackensack Meridian Health',
        managingOrganization: {
          reference: 'nNo/MKFlpsngvddKOjdK7qoJyejMzQk/KrC2a/dVi+M=',
        },
        period: {
          start: '2021-12-13T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://mepic.hackensackumc.net/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '9dc28bb7-f429-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'NVXunT9vUDZCQ4q2SFqM15s7uT+wrrfCexNvaR2D0Ws=',
            name: 'Valleywise Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Valleywise Health',
        managingOrganization: {
          reference: 'NVXunT9vUDZCQ4q2SFqM15s7uT+wrrfCexNvaR2D0Ws=',
        },
        period: {
          start: '2021-07-16T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://esoap.mihs.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '94f95b7c-96a7-eb11-913d-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'XV/1E4QUtysYtQOj5hh0FA+9uR7MNYXdPx3SlnndCAA=',
            name: 'St. Elizabeth Healthcare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'St. Elizabeth Healthcare',
        managingOrganization: {
          reference: 'XV/1E4QUtysYtQOj5hh0FA+9uR7MNYXdPx3SlnndCAA=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://sehproxy.stelizabeth.com/arr-fhir/SEH/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '49444a90-96a7-eb11-913d-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'XV/1E4QUtysYtQOj5hh0FA+9uR7MNYXdPx3SlnndCAA=',
            name: 'Hendricks Regional Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Hendricks Regional Health',
        managingOrganization: {
          reference: 'XV/1E4QUtysYtQOj5hh0FA+9uR7MNYXdPx3SlnndCAA=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://sehproxy.stelizabeth.com/arr-fhir/HRH/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '1c26aa22-c664-eb11-9143-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '+ThJc+i9GKS+Uy+uG2Jh97TECNfXTGj47mkcY/W1w6w=',
            name: 'Altru Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Altru Health System',
        managingOrganization: {
          reference: '+ThJc+i9GKS+Uy+uG2Jh97TECNfXTGj47mkcY/W1w6w=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicsoap.altru.org/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '65e98da3-8c21-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'MRn0Mn0A/F5ii/hzuLl3IoEC53srjcx4Zs6iX/2cnZc=',
            name: 'NYU Langone Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'NYU Langone Medical Center',
        managingOrganization: {
          reference: 'MRn0Mn0A/F5ii/hzuLl3IoEC53srjcx4Zs6iX/2cnZc=',
        },
        period: {
          start: '2021-12-23T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicfhir.nyumc.org/FHIRPRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '45e89e1e-f61d-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: '+vulMifhA5fMzdx5AT3G/coJ4ime2yZvZkcrKXIa1cM=',
            name: 'Spectrum Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Spectrum Health',
        managingOrganization: {
          reference: '+vulMifhA5fMzdx5AT3G/coJ4ime2yZvZkcrKXIa1cM=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicarr02.spectrumhealth.org/EpicFHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '7f5057da-4ed4-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'LZbL9dSmMDYXSJEjruDL+f5eo1n0uMlZ4y1HBbgKEdI=',
            name: 'Genesis Healthcare System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Genesis Healthcare System',
        managingOrganization: {
          reference: 'LZbL9dSmMDYXSJEjruDL+f5eo1n0uMlZ4y1HBbgKEdI=',
        },
        period: {
          start: '2021-06-29T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.genesishcs.org/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'a1b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'yeld6PldV4VJ4tgu3ErJfOvXw/peA1f/ZKVfOdnm0zk=',
            name: 'UVA Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'UVA Health System',
        managingOrganization: {
          reference: 'yeld6PldV4VJ4tgu3ErJfOvXw/peA1f/ZKVfOdnm0zk=',
        },
        period: {
          start: '2022-02-07T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://hscsesoap.hscs.virginia.edu/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '634584ab-db25-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'AWx4u2SayAf/dnP7lq+SV+bwkkE/lfNCvrjvu3HSnyI=',
            name: 'Grady Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Grady Health System',
        managingOrganization: {
          reference: 'AWx4u2SayAf/dnP7lq+SV+bwkkE/lfNCvrjvu3HSnyI=',
        },
        period: {
          start: '2021-11-08T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://surescripts.gmh.edu/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'd31ed225-920d-eb11-9130-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'dsy2uIpzmGgDjEcHGIeHD4nkCySNgI5LK8R6C5G8EyU=',
            name: 'Kettering Health Network',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Kettering Health Network',
        managingOrganization: {
          reference: 'dsy2uIpzmGgDjEcHGIeHD4nkCySNgI5LK8R6C5G8EyU=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://khnarr.ketthealth.com/FHIR-PROD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '647e170d-3192-eb11-9145-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'KO7bEny2sQwLx/rgbXQwmlX3Y8doMg7lU8ftqPjv48A=',
            name: 'Community Healthcare System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Community Healthcare System',
        managingOrganization: {
          reference: 'KO7bEny2sQwLx/rgbXQwmlX3Y8doMg7lU8ftqPjv48A=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://webproxy.comhs.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '13215798-3804-ec11-9141-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'VQQ9qWjWvZFhQRJO6tDwKvss/wiCJFke9iN6mdrWpLc=',
            name: 'Providence Health & Services - Alaska',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Providence Health & Services - Alaska',
        managingOrganization: {
          reference: 'VQQ9qWjWvZFhQRJO6tDwKvss/wiCJFke9iN6mdrWpLc=',
        },
        period: {
          start: '2021-09-23T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://haikuak.providence.org/fhirproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '35da096d-708d-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'LF1cBcjutWO0Mq2TyNo6kKdRSjtyW5r3xrDpHDKdr1E=',
            name: 'Tampa General Hospital',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Tampa General Hospital',
        managingOrganization: {
          reference: 'LF1cBcjutWO0Mq2TyNo6kKdRSjtyW5r3xrDpHDKdr1E=',
        },
        period: {
          start: '2021-10-11T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://prodsoap1.tgh.org/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '4507699b-7af0-eb11-914b-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'fFuLYAY4j/IOtb2ckFX+pQO+68HC8vWsP6vkP62oX90=',
            name: 'Access Community Health Network',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Access Community Health Network',
        managingOrganization: {
          reference: 'fFuLYAY4j/IOtb2ckFX+pQO+68HC8vWsP6vkP62oX90=',
        },
        period: {
          start: '2021-11-10T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://eprescribing.accesscommunityhealth.net/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '105b2091-cb38-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'SobRqgBRE56saujuzusnJnqSWKpVnFZg2xsIhZXTAqs=',
            name: 'Memorial Healthcare System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Memorial Healthcare System',
        managingOrganization: {
          reference: 'SobRqgBRE56saujuzusnJnqSWKpVnFZg2xsIhZXTAqs=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://mhssp.mhs.net/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '63d3cbf7-fc25-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'QN48uQVmoWbmNJSeDM+g+xuSvb0MSU2iRecaIjjdsZk=',
            name: 'Confluence Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Confluence Health',
        managingOrganization: {
          reference: 'QN48uQVmoWbmNJSeDM+g+xuSvb0MSU2iRecaIjjdsZk=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0764.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'aeb665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'uQXKTM9RZ2aON5CVJ7tj25UktRxZ7FtxxqQ6IdLvTuc=',
            name: 'Garnet Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Garnet Health',
        managingOrganization: {
          reference: 'uQXKTM9RZ2aON5CVJ7tj25UktRxZ7FtxxqQ6IdLvTuc=',
        },
        period: {
          start: '2022-01-04T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epic.garnethealth.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'b0b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'bdKXKG8cR88GsTYQIKoDodOxJz4SXorGgjeJR9nG78U=',
            name: 'Stormont Vail Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Stormont Vail Health',
        managingOrganization: {
          reference: 'bdKXKG8cR88GsTYQIKoDodOxJz4SXorGgjeJR9nG78U=',
        },
        period: {
          start: '2021-12-13T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicsoap.stormontvail.org/FHIRproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'b2b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'lNPF+yYwfcMkCAZ1nwgC+jc1zbO/fH6fuEXc/e+9eM8=',
            name: 'Riverside Medical Clinic',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Riverside Medical Clinic',
        managingOrganization: {
          reference: 'lNPF+yYwfcMkCAZ1nwgC+jc1zbO/fH6fuEXc/e+9eM8=',
        },
        period: {
          start: '2022-01-06T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://sf1.rmcps.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'b4b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'uOTLXvLAOTybbMbkIfS0qpr1WtnIRw0Vt5ciYfH9kb8=',
            name: 'Rochester Regional Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Rochester Regional Health',
        managingOrganization: {
          reference: 'uOTLXvLAOTybbMbkIfS0qpr1WtnIRw0Vt5ciYfH9kb8=',
        },
        period: {
          start: '2021-11-12T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicarr.rochesterregional.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '84477dfc-5028-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'wZlaE9vGY+ixvmf5xjntY3zYUwL+l9FU3ph7mwbAmJk=',
            name: 'Catholic Health (Long Island NY)',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Catholic Health (Long Island NY)',
        managingOrganization: {
          reference: 'wZlaE9vGY+ixvmf5xjntY3zYUwL+l9FU3ph7mwbAmJk=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epx1.chsli.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'b7b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '+hGO0XalXrimF7Niw9x1xydt6/verIJz126CkXSSNVY=',
            name: 'Hurley Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Hurley Medical Center',
        managingOrganization: {
          reference: '+hGO0XalXrimF7Niw9x1xydt6/verIJz126CkXSSNVY=',
        },
        period: {
          start: '2021-12-21T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.hurleymc.com/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'b8b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'pFPVWBLBRJM8OWrzEaiWRBUkUEm5J9OyAPrFfYPx6BY=',
            name: 'MediSys Health Network',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'MediSys Health Network',
        managingOrganization: {
          reference: 'pFPVWBLBRJM8OWrzEaiWRBUkUEm5J9OyAPrFfYPx6BY=',
        },
        period: {
          start: '2022-01-21T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://eprescribe-p.medisys.org/fhir-prd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '47e43b94-206b-eb11-9143-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'izffRCgDiZEH0zCvcrd0OUT0AlpR0qXKBNhlT0g8Buw=',
            name: 'Bassett Healthcare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Bassett Healthcare',
        managingOrganization: {
          reference: 'izffRCgDiZEH0zCvcrd0OUT0AlpR0qXKBNhlT0g8Buw=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://soap.bassett.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '36a5bbf3-672b-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: '5SZLf5AWR7XFeJUc7CksLk0aaw9Gievj5aEPUKO7kPY=',
            name: 'Owensboro Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Owensboro Health',
        managingOrganization: {
          reference: '5SZLf5AWR7XFeJUc7CksLk0aaw9Gievj5aEPUKO7kPY=',
        },
        period: {
          start: '2021-08-26T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.omhs.org/rp-prd-fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '4e7fddc0-3f19-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: '9Hh/qJk2V4kmmzZxjen0yxnYEAjSC5oRJ4j14bsKQB4=',
            name: 'Baptist Health (Arkansas)',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Baptist Health (Arkansas)',
        managingOrganization: {
          reference: '9Hh/qJk2V4kmmzZxjen0yxnYEAjSC5oRJ4j14bsKQB4=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://api.baptist-health.org/Interconnect-FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'f1eb9ee0-6ad4-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'w6PHalLHK80KqAN1rwH2P01WNk9V39CnMriWmDf0fFQ=',
            name: 'University of Mississippi Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'University of Mississippi Medical Center',
        managingOrganization: {
          reference: 'w6PHalLHK80KqAN1rwH2P01WNk9V39CnMriWmDf0fFQ=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://soapproxy.umc.edu/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'bdb665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'f5uXEqxphOMBosrkQH4IzK10LGSBoBiudJLBoWXC4V4=',
            name: 'Sansum Clinic',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Sansum Clinic',
        managingOrganization: {
          reference: 'f5uXEqxphOMBosrkQH4IzK10LGSBoBiudJLBoWXC4V4=',
        },
        period: {
          start: '2021-12-07T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://wavesurescripts.sansumclinic.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'c2b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Ybu6HPIx1ZTlQ96CeRNFybLfcI3XNy+sEFGOYqlqT5g=',
            name: 'Washington Hospital Healthcare System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Washington Hospital Healthcare System',
        managingOrganization: {
          reference: 'Ybu6HPIx1ZTlQ96CeRNFybLfcI3XNy+sEFGOYqlqT5g=',
        },
        period: {
          start: '2021-12-28T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://psacesoap.whhs.com/interconnect-fhir-prd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '1c52eb56-7233-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'lDQiqoO3AI8SUyJy+vV/WN8K6ry2LcgWzH/WFhCzSqo=',
            name: 'UnityPoint Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'UnityPoint Health',
        managingOrganization: {
          reference: 'lDQiqoO3AI8SUyJy+vV/WN8K6ry2LcgWzH/WFhCzSqo=',
        },
        period: {
          start: '2021-12-21T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicfhir.unitypoint.org/ProdFHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'a15417b2-47d0-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '8TmFbLUiQgzgCk8IW5xnZPRiF1X1YWDLI1IIFGFYfCc=',
            name: 'Michigan Medicine',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Michigan Medicine',
        managingOrganization: {
          reference: '8TmFbLUiQgzgCk8IW5xnZPRiF1X1YWDLI1IIFGFYfCc=',
        },
        period: {
          start: '2021-07-13T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://mcproxyprd.med.umich.edu/FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '16535d3c-8991-eb11-9145-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'xagDPbejszgjDnn58rDTLscmeADQURH6+BJ/HHiWXkM=',
            name: 'Hattiesburg Clinic and Forrest General Hospital',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Hattiesburg Clinic and Forrest General Hospital',
        managingOrganization: {
          reference: 'xagDPbejszgjDnn58rDTLscmeADQURH6+BJ/HHiWXkM=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://soapprod.hattiesburgclinic.com/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'c8b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'HOiGVtQP2ZxSwP8biC29NqPBkLUHPXD4krYeKo4YQ1E=',
            name: 'Ochsner Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Ochsner Health System',
        managingOrganization: {
          reference: 'HOiGVtQP2ZxSwP8biC29NqPBkLUHPXD4krYeKo4YQ1E=',
        },
        period: {
          start: '2022-01-04T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://myc.ochsner.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'd96c4d19-07eb-eb11-914b-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'nttNE5Gq914bxBB2s81HFLbu/WZ2o4hwECsF00c4iUU=',
            name: 'Cone Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Cone Health',
        managingOrganization: {
          reference: 'nttNE5Gq914bxBB2s81HFLbu/WZ2o4hwECsF00c4iUU=',
        },
        period: {
          start: '2021-08-10T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epsoap.conehealth.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'f47228d4-34af-eb11-913d-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Xq1mVJJykK9NDvzySvFXQyoZrj64fo2+eNwkU3a2vh4=',
            name: 'Novant Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Novant Health',
        managingOrganization: {
          reference: 'Xq1mVJJykK9NDvzySvFXQyoZrj64fo2+eNwkU3a2vh4=',
        },
        period: {
          start: '2021-10-18T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://webproxy.mynovant.org/fhir-prd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'cbb665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '5pHgMo4JVZkRgDso86uH/FRWJB6qNyQNNFIQokhBsuU=',
            name: 'St. Luke’s Health System (Idaho & Eastern Oregon)',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'St. Luke’s Health System (Idaho & Eastern Oregon)',
        managingOrganization: {
          reference: '5pHgMo4JVZkRgDso86uH/FRWJB6qNyQNNFIQokhBsuU=',
        },
        period: {
          start: '2021-12-07T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epmobile.slhs.org/Interconnect-FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e4b44121-ec04-ec11-9141-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: '3WWqMUPJ9cySwxfhioRAeEdg1F+VotUhCixN5QBoheM=',
            name: 'Yale New Haven Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Yale New Haven Health System',
        managingOrganization: {
          reference: '3WWqMUPJ9cySwxfhioRAeEdg1F+VotUhCixN5QBoheM=',
        },
        period: {
          start: '2021-09-02T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://patientfhirapis.ynhh.org/pff/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '5b1f3d29-3904-ec11-9141-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: '+QG4l4B4LrSbQLk/PSWi84LNqWCEN9uZtNTuXLjL5Aw=',
            name: 'Providence Health & Services - Washington/Montana',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Providence Health & Services - Washington/Montana',
        managingOrganization: {
          reference: '+QG4l4B4LrSbQLk/PSWi84LNqWCEN9uZtNTuXLjL5Aw=',
        },
        period: {
          start: '2021-09-23T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://haikuwa.providence.org/fhirproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '13ae61cb-9348-ec11-914e-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'ou/cacddY98Q9ygEEFxh8aONLiUe1fECd3xkx6Xptcg=',
            name: 'New Hanover Regional Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'New Hanover Regional Medical Center',
        managingOrganization: {
          reference: 'ou/cacddY98Q9ygEEFxh8aONLiUe1fECd3xkx6Xptcg=',
        },
        period: {
          start: '2021-11-19T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicmobile.nhrmc.org/OAuth2-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'efd2d7f5-fdd4-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'D3sild0BdarzsfYaBseSFkGCwpLilCYhoeJyAcBruSk=',
            name: 'Adult & Pediatric Ear, Nose & Throat – Kalamazoo',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Adult & Pediatric Ear, Nose & Throat – Kalamazoo',
        managingOrganization: {
          reference: 'D3sild0BdarzsfYaBseSFkGCwpLilCYhoeJyAcBruSk=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'b43ff408-fed4-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'D3sild0BdarzsfYaBseSFkGCwpLilCYhoeJyAcBruSk=',
            name: 'Family Health Center (Michigan)',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Family Health Center (Michigan)',
        managingOrganization: {
          reference: 'D3sild0BdarzsfYaBseSFkGCwpLilCYhoeJyAcBruSk=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '87b8371b-fed4-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'D3sild0BdarzsfYaBseSFkGCwpLilCYhoeJyAcBruSk=',
            name: 'Kalamazoo College Student Health Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Kalamazoo College Student Health Center',
        managingOrganization: {
          reference: 'D3sild0BdarzsfYaBseSFkGCwpLilCYhoeJyAcBruSk=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '7fa2c829-fed4-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'D3sild0BdarzsfYaBseSFkGCwpLilCYhoeJyAcBruSk=',
            name: 'Kalamazoo Foot Surgery',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Kalamazoo Foot Surgery',
        managingOrganization: {
          reference: 'D3sild0BdarzsfYaBseSFkGCwpLilCYhoeJyAcBruSk=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '165d8839-fed4-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'D3sild0BdarzsfYaBseSFkGCwpLilCYhoeJyAcBruSk=',
            name: 'Nephrology Center - Southwest Michigan',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Nephrology Center - Southwest Michigan',
        managingOrganization: {
          reference: 'D3sild0BdarzsfYaBseSFkGCwpLilCYhoeJyAcBruSk=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '2092494a-fed4-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'D3sild0BdarzsfYaBseSFkGCwpLilCYhoeJyAcBruSk=',
            name: 'Western Michigan University School of Medicine',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Western Michigan University School of Medicine',
        managingOrganization: {
          reference: 'D3sild0BdarzsfYaBseSFkGCwpLilCYhoeJyAcBruSk=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '5ed1d406-2a96-eb11-9145-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'D3sild0BdarzsfYaBseSFkGCwpLilCYhoeJyAcBruSk=',
            name: 'Bronson Healthcare Group',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Bronson Healthcare Group',
        managingOrganization: {
          reference: 'D3sild0BdarzsfYaBseSFkGCwpLilCYhoeJyAcBruSk=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'fd4fff31-338b-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Da+r9MLL8ccIkS26TBHci/zf7eKNRDdNURlDNdHxXp4=',
            name: 'UCLA Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'UCLA Medical Center',
        managingOrganization: {
          reference: 'Da+r9MLL8ccIkS26TBHci/zf7eKNRDdNURlDNdHxXp4=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://arrprox.mednet.ucla.edu/FHIRPRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '28fd8fc8-3904-ec11-9141-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'bLiay5t4uItTcPuEmM9Xw7z06dyrzUYIn3VugRBANys=',
            name: 'Providence Health & Services - Oregon/California',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Providence Health & Services - Oregon/California',
        managingOrganization: {
          reference: 'bLiay5t4uItTcPuEmM9Xw7z06dyrzUYIn3VugRBANys=',
        },
        period: {
          start: '2021-09-23T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://haikuor.providence.org/fhirproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'cdb665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'UWnN5XkWjiKdLh33+JxyaKpKdSF37rC15ibOjn4dFMM=',
            name: 'University Health Care System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'University Health Care System',
        managingOrganization: {
          reference: 'UWnN5XkWjiKdLh33+JxyaKpKdSF37rC15ibOjn4dFMM=',
        },
        period: {
          start: '2022-02-09T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://soap.uhcs.org/IC-FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '85a29101-f52d-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'B7GQxhGgKb6kRT52hNylI0N2+22InXv/71ytewxG+JA=',
            name: 'UC Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'UC Health',
        managingOrganization: {
          reference: 'B7GQxhGgKb6kRT52hNylI0N2+22InXv/71ytewxG+JA=',
        },
        period: {
          start: '2021-12-15T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epic-soap.uchealth.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '0d497f1d-5f2b-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'IHPPNTGWuo0SDe+1pP666r+I0SxYaWFWerl7OLyCUZc=',
            name: "Children's Wisconsin",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Children's Wisconsin",
        managingOrganization: {
          reference: 'IHPPNTGWuo0SDe+1pP666r+I0SxYaWFWerl7OLyCUZc=',
        },
        period: {
          start: '2021-12-01T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0815.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '204fe4a4-f081-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'LDr1k8M7CvaAEcfWfK9GKtyg0rPzdFgfTHG7RIlrqlw=',
            name: 'Inova and Valley Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Inova and Valley Health',
        managingOrganization: {
          reference: 'LDr1k8M7CvaAEcfWfK9GKtyg0rPzdFgfTHG7RIlrqlw=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicrpprd.inova.org/fhirrp/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e64b0648-2a8b-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'BQhjBOuzA+tyHOuMvFoJ4/8E29xauY+boCSZrKZq66U=',
            name: 'Norton Healthcare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Norton Healthcare',
        managingOrganization: {
          reference: 'BQhjBOuzA+tyHOuMvFoJ4/8E29xauY+boCSZrKZq66U=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicsoap.nortonhealthcare.org/FHIRPRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'ddecad78-9f0a-ec11-9141-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: '4h+RslOJGA2C5WvLb8NHUJTJkNP3aDi0yZy3RO1hZQs=',
            name: 'The Portland Clinic',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'The Portland Clinic',
        managingOrganization: {
          reference: '4h+RslOJGA2C5WvLb8NHUJTJkNP3aDi0yZy3RO1hZQs=',
        },
        period: {
          start: '2021-08-31T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://tpc-shield.tpcllp.com/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'd0b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '5jsxcIJYeAtD6Me2pJc+s5kxL5F+my/gC4lKwTkWEJc=',
            name: 'Singing River Health System - PRD',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Singing River Health System - PRD',
        managingOrganization: {
          reference: '5jsxcIJYeAtD6Me2pJc+s5kxL5F+my/gC4lKwTkWEJc=',
        },
        period: {
          start: '2021-12-29T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://arr.mysrhs.com/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '41f85cd2-6226-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'iR0nZIz9coRub/C/gpoDVL+J3q/92D9k5lpNUqeAX8g=',
            name: 'Atrium Health Wake Forest Baptist',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Atrium Health Wake Forest Baptist',
        managingOrganization: {
          reference: 'iR0nZIz9coRub/C/gpoDVL+J3q/92D9k5lpNUqeAX8g=',
        },
        period: {
          start: '2021-10-07T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://w1soap.wakehealth.edu/fhirproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '0497e043-650a-ec11-9141-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'RZzjHGi0/JGWKOKqTi3X6578W9oDVdhhHfE5L2001C8=',
            name: 'Medical University of South Carolina',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Medical University of South Carolina',
        managingOrganization: {
          reference: 'RZzjHGi0/JGWKOKqTi3X6578W9oDVdhhHfE5L2001C8=',
        },
        period: {
          start: '2021-09-30T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhirprod.musc.edu/fhirprod/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '4c6c39dd-ba0c-ec11-914d-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'BX+NkbLDXccmVic6x5y7xkw1KHzaslaL5Q1pi18H2K0=',
            name: 'Nebraska Medicine',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Nebraska Medicine',
        managingOrganization: {
          reference: 'BX+NkbLDXccmVic6x5y7xkw1KHzaslaL5Q1pi18H2K0=',
        },
        period: {
          start: '2021-11-15T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://ocsoapprd.nebraskamed.com/FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'f9bcc24c-9f2b-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '3iXb5LdCZsbx7nbJSVecnWgIHivZzT1X3zxi4yHTGlM=',
            name: 'HonorHealth',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'HonorHealth',
        managingOrganization: {
          reference: '3iXb5LdCZsbx7nbJSVecnWgIHivZzT1X3zxi4yHTGlM=',
        },
        period: {
          start: '2021-11-15T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://interconnect.honorhealth.com/Interconnect-FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'd8b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '6lsseTkejoK1fFM5mTqfCEwjDn4Uy7dnwiw+5nvYRLw=',
            name: 'Franciscan Missionaries of Our Lady Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Franciscan Missionaries of Our Lady Health System',
        managingOrganization: {
          reference: '6lsseTkejoK1fFM5mTqfCEwjDn4Uy7dnwiw+5nvYRLw=',
        },
        period: {
          start: '2021-12-10T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0830.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '0e517411-4372-eb11-9143-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'udupaGP7COvvPAfwuJhPd5Yu4xUhJqsqydNZRET1aTw=',
            name: 'Duke Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Duke Health',
        managingOrganization: {
          reference: 'udupaGP7COvvPAfwuJhPd5Yu4xUhJqsqydNZRET1aTw=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://health-apis.duke.edu/FHIR/patient/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'dfb665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Ze00PMP9lbq0zod0V3RnBkDn5QD3fG1/LBeG38GQhpk=',
            name: 'Loma Linda University Health and CareConnect Partners',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Loma Linda University Health and CareConnect Partners',
        managingOrganization: {
          reference: 'Ze00PMP9lbq0zod0V3RnBkDn5QD3fG1/LBeG38GQhpk=',
        },
        period: {
          start: '2021-12-01T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.lluh.org/interconnect-fhir-prd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e0b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '9wD2zwcBoBlhJZ2+dmg5cfNNveZoBb8nGWtsj1kE9lw=',
            name: 'Parkview Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Parkview Health',
        managingOrganization: {
          reference: '9wD2zwcBoBlhJZ2+dmg5cfNNveZoBb8nGWtsj1kE9lw=',
        },
        period: {
          start: '2021-12-16T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicprod-mobile.parkview.com/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e1b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '+dyej83fBCCiaDy8sTRWsYcyMAfe08YdyHakQHLBC4M=',
            name: 'Piedmont Healthcare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Piedmont Healthcare',
        managingOrganization: {
          reference: '+dyej83fBCCiaDy8sTRWsYcyMAfe08YdyHakQHLBC4M=',
        },
        period: {
          start: '2022-01-04T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://webproxy.piedmont.org/ARR-FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '70aa745a-d71e-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'jNIY+tFOQAJ5NAibE4BOESNKkOReiyEa53WjhLtV2DY=',
            name: "Connecticut Children's Medical Center",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Connecticut Children's Medical Center",
        managingOrganization: {
          reference: 'jNIY+tFOQAJ5NAibE4BOESNKkOReiyEa53WjhLtV2DY=',
        },
        period: {
          start: '2021-09-16T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.connecticutchildrens.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e2b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'eV2MflnXXzSiegPqFCfl92LMW1vj7+m3hhFcM7I29Lc=',
            name: 'Asante Health Systems',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Asante Health Systems',
        managingOrganization: {
          reference: 'eV2MflnXXzSiegPqFCfl92LMW1vj7+m3hhFcM7I29Lc=',
        },
        period: {
          start: '2022-02-07T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicmobile.asante.org/FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'f91aad82-2ac9-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'RCpCs9BW1/4J4mx7MYOG9C7uSqKXtVqevqCfSsa3B/U=',
            name: 'Johns Hopkins Medicine',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Johns Hopkins Medicine',
        managingOrganization: {
          reference: 'RCpCs9BW1/4J4mx7MYOG9C7uSqKXtVqevqCfSsa3B/U=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicmobile.johnshopkins.edu/FHIR_PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e3091461-b106-ec11-9141-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'FJoTN1Kj1V1ysEIP7jC4TP5k4mfF4UUy21SfkNQ9qxE=',
            name: 'Henry Ford Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Henry Ford Health System',
        managingOrganization: {
          reference: 'FJoTN1Kj1V1ysEIP7jC4TP5k4mfF4UUy21SfkNQ9qxE=',
        },
        period: {
          start: '2021-11-06T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.hfhs.org/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'eeb665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'gbekJEDaw9ktqY5Yu2211MSkrUJ+qKk0VYxraE614jg=',
            name: 'Samaritan Health Services',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Samaritan Health Services',
        managingOrganization: {
          reference: 'gbekJEDaw9ktqY5Yu2211MSkrUJ+qKk0VYxraE614jg=',
        },
        period: {
          start: '2021-12-15T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.samhealth.org/fhir-arr/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '27f1cfd6-720b-ec11-914d-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'o30J/UPkNkb9ihfLDTmCA3SGVUqbPjtG5e7JNdaMFDU=',
            name: 'Overlake Hospital Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Overlake Hospital Medical Center',
        managingOrganization: {
          reference: 'o30J/UPkNkb9ihfLDTmCA3SGVUqbPjtG5e7JNdaMFDU=',
        },
        period: {
          start: '2021-10-05T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://sfd.overlakehospital.org/FHIRproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'f1b665c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'bNzmlM1Gc3ET1kVX4RVlcqK3fBAtrI4cHdo7G8ddlh4=',
            name: 'Cheyenne Regional Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Cheyenne Regional Medical Center',
        managingOrganization: {
          reference: 'bNzmlM1Gc3ET1kVX4RVlcqK3fBAtrI4cHdo7G8ddlh4=',
        },
        period: {
          start: '2021-11-17T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://soap.crmcwy.org/fhirproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '286c9e1e-5f0a-ec11-9141-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: '2oHx6QBWNs5aYgwhkX8ZNJtsVhi2DZBNnZ0cHHp6qOU=',
            name: 'Baylor Scott & White',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Baylor Scott & White',
        managingOrganization: {
          reference: '2oHx6QBWNs5aYgwhkX8ZNJtsVhi2DZBNnZ0cHHp6qOU=',
        },
        period: {
          start: '2022-01-05T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.bswhealth.org/FHIR-PRD/BSW/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '6e5e3720-610a-ec11-9141-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: '2oHx6QBWNs5aYgwhkX8ZNJtsVhi2DZBNnZ0cHHp6qOU=',
            name: 'OB/GYN Associates of Waco - Dr. Rister, Dr. Koeritz',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'OB/GYN Associates of Waco - Dr. Rister, Dr. Koeritz',
        managingOrganization: {
          reference: '2oHx6QBWNs5aYgwhkX8ZNJtsVhi2DZBNnZ0cHHp6qOU=',
        },
        period: {
          start: '2022-01-05T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.bswhealth.org/FHIR-PRD/CONNECT/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '5e68c14e-610a-ec11-9141-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: '2oHx6QBWNs5aYgwhkX8ZNJtsVhi2DZBNnZ0cHHp6qOU=',
            name: 'Lacy C Kessler, MD, PA',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Lacy C Kessler, MD, PA',
        managingOrganization: {
          reference: '2oHx6QBWNs5aYgwhkX8ZNJtsVhi2DZBNnZ0cHHp6qOU=',
        },
        period: {
          start: '2022-01-05T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.bswhealth.org/FHIR-PRD/CONNECT/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '33e28b50-2d97-eb11-9145-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '4FWedmiXKQZj3ijPo98zGbZFuEN2HeVsSRvWBtJoJk4=',
            name: 'Santa Clara Valley Medical Center Hospitals and Clinics',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Santa Clara Valley Medical Center Hospitals and Clinics',
        managingOrganization: {
          reference: '4FWedmiXKQZj3ijPo98zGbZFuEN2HeVsSRvWBtJoJk4=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://scvhhsfhir.sccgov.org/interconnect-fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'b48c575a-a482-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '34zgMCdMBs8+5nmQbGtSXfQ4L9pQ5vj8NmXkqIqA+JM=',
            name: 'PeaceHealth',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'PeaceHealth',
        managingOrganization: {
          reference: '34zgMCdMBs8+5nmQbGtSXfQ4L9pQ5vj8NmXkqIqA+JM=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://soapproxy.peacehealth.org/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '768382c4-11fd-ea11-9130-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'ZMqwaQosc+TVDfRG4ogot3JEsICMl7XHrhjlTlsb8Go=',
            name: 'Mercy Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Mercy Medical Center',
        managingOrganization: {
          reference: 'ZMqwaQosc+TVDfRG4ogot3JEsICMl7XHrhjlTlsb8Go=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://eproxy.mercycare.org/oauth2/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '1399a87e-3822-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'VIWG/QStsjcovPzu1viu7XmCGDiIx9ApdKUQe1lAloI=',
            name: "Stanford Children's Health",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Stanford Children's Health",
        managingOrganization: {
          reference: 'VIWG/QStsjcovPzu1viu7XmCGDiIx9ApdKUQe1lAloI=',
        },
        period: {
          start: '2021-10-11T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0857.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '56c916b5-019f-eb11-9145-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'UKxnQWHKxZmVwbnhkB3IAtuYFgjsLpF+WMESGp/aEUw=',
            name: 'WellStar',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'WellStar',
        managingOrganization: {
          reference: 'UKxnQWHKxZmVwbnhkB3IAtuYFgjsLpF+WMESGp/aEUw=',
        },
        period: {
          start: '2021-09-02T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicsoap.wellstar.org/fhirproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '8d5c6491-c81b-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '+nPYijn7FNUs1LxOj6qtlla5JGVI+99aYzqU5JJEQc0=',
            name: 'John Muir Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'John Muir Health',
        managingOrganization: {
          reference: '+nPYijn7FNUs1LxOj6qtlla5JGVI+99aYzqU5JJEQc0=',
        },
        period: {
          start: '2021-09-23T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.johnmuirhealth.com/fhir-prd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'ab359b13-2a25-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'sjwsl/nU6BLfTT1X+L0C0jkC30Y5fGYRY10Na9ybl04=',
            name: 'University of Arkansas for Medical Sciences',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'University of Arkansas for Medical Sciences',
        managingOrganization: {
          reference: 'sjwsl/nU6BLfTT1X+L0C0jkC30Y5fGYRY10Na9ybl04=',
        },
        period: {
          start: '2021-10-28T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://ucsoap.uams.edu/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'a63a82bd-3f1a-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '9eDpH0sX8TGVRY2Jse6BMA1u8KJpeKgEBG6KAnwNFWg=',
            name: 'Baptist Memorial Health Care',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Baptist Memorial Health Care',
        managingOrganization: {
          reference: '9eDpH0sX8TGVRY2Jse6BMA1u8KJpeKgEBG6KAnwNFWg=',
        },
        period: {
          start: '2021-09-28T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://rxedi.bmhcc.org/prd-fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '07b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'EP+2bpIRjLhzYhJTQQrb8++g6zGAQjzZ+WCrYgqFkfw=',
            name: 'Trinity Health of New England',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Trinity Health of New England',
        managingOrganization: {
          reference: 'EP+2bpIRjLhzYhJTQQrb8++g6zGAQjzZ+WCrYgqFkfw=',
        },
        period: {
          start: '2021-11-17T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicprdext.stfranciscare.org/FhirProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '08b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'EP+2bpIRjLhzYhJTQQrb8++g6zGAQjzZ+WCrYgqFkfw=',
            name: 'Trinity Health of New England Medical Group Springfield',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Trinity Health of New England Medical Group Springfield',
        managingOrganization: {
          reference: 'EP+2bpIRjLhzYhJTQQrb8++g6zGAQjzZ+WCrYgqFkfw=',
        },
        period: {
          start: '2021-11-17T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://rmgpxy.riverbendmedical.com/fhir_proxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '4e274da7-5f2c-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'VLpTq1B4goRzezLzozU7kVxjGOuaQ319Pg1NXrMQ4TI=',
            name: 'Saint Francis Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Saint Francis Health System',
        managingOrganization: {
          reference: 'VLpTq1B4goRzezLzozU7kVxjGOuaQ319Pg1NXrMQ4TI=',
        },
        period: {
          start: '2021-11-16T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://eprdsoap000.saintfrancis.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '0c031622-a932-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'GkZFcJTpS7z0X+I4c6DTjP3JbvfB+g0B56nhyApqICM=',
            name: 'Boston Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Boston Medical Center',
        managingOrganization: {
          reference: 'GkZFcJTpS7z0X+I4c6DTjP3JbvfB+g0B56nhyApqICM=',
        },
        period: {
          start: '2021-10-27T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://emerge-soap1.bmc.org/FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '59adc2a9-7d8e-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'HLKGuQ7EVkw89Jt6yTkTXYwsOyV1M9Rc49ND/EwP0vc=',
            name: 'UNC Health Care',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'UNC Health Care',
        managingOrganization: {
          reference: 'HLKGuQ7EVkw89Jt6yTkTXYwsOyV1M9Rc49ND/EwP0vc=',
        },
        period: {
          start: '2021-04-16T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicfe.unch.unc.edu/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '485187b9-2e96-eb11-9145-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'JLqT9d6NTBntNNPs2KgPE0LBvrk8Nn85yycBQ6507TA=',
            name: 'Lahey Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Lahey Health System',
        managingOrganization: {
          reference: 'JLqT9d6NTBntNNPs2KgPE0LBvrk8Nn85yycBQ6507TA=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.laheyhealth.org/proxy-prd-fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'b3b42edb-421a-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'gdrPeMUUBSs00ykQIoLcwnYZvlu1Gey14YbVGobM7Bk=',
            name: 'NYC Health + Hospitals',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'NYC Health + Hospitals',
        managingOrganization: {
          reference: 'gdrPeMUUBSs00ykQIoLcwnYZvlu1Gey14YbVGobM7Bk=',
        },
        period: {
          start: '2021-10-21T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxypda.nychhc.org/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'a1007ce9-622c-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'rgCaG72zsckjpLuGY+c7CYq7qOa9oXEaP1XO0Ah33eY=',
            name: 'St. Joseph Hospital Health Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'St. Joseph Hospital Health Center',
        managingOrganization: {
          reference: 'rgCaG72zsckjpLuGY+c7CYq7qOa9oXEaP1XO0Ah33eY=',
        },
        period: {
          start: '2021-11-17T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://mobileproxy.sjhsyr.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'aa1e9c2a-21d3-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'VRzuUPdBuZQpwWSe+CJ1nikcPT/zLd1KAWiGvJCXcv0=',
            name: 'One Brooklyn Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'One Brooklyn Health System',
        managingOrganization: {
          reference: 'VRzuUPdBuZQpwWSe+CJ1nikcPT/zLd1KAWiGvJCXcv0=',
        },
        period: {
          start: '2021-12-21T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0883.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '26f65ec4-8d2d-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'OxhAa66y1FAYKGkWpv+32rxeFGm8Qi8CzWxxGQTe5AM=',
            name: 'OhioHealth',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'OhioHealth',
        managingOrganization: {
          reference: 'OxhAa66y1FAYKGkWpv+32rxeFGm8Qi8CzWxxGQTe5AM=',
        },
        period: {
          start: '2021-11-22T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://ccpintconfg.ohiohealth.com/Interconnect-PRD-MUAPI/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'cb58401b-7699-eb11-9145-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'AEW6mUvcQ6nUmtofXxtP+z+fICoQfoG4OP4PJaYeRNc=',
            name: 'Lifespan',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Lifespan',
        managingOrganization: {
          reference: 'AEW6mUvcQ6nUmtofXxtP+z+fICoQfoG4OP4PJaYeRNc=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://lsepprdsoap.lifespan.org/fhirproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '11b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'yOpzEoGPTCMlCp2jUS9SlLjNwin+Px445zk5Ko5dW8Q=',
            name: 'Care New England',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Care New England',
        managingOrganization: {
          reference: 'yOpzEoGPTCMlCp2jUS9SlLjNwin+Px445zk5Ko5dW8Q=',
        },
        period: {
          start: '2022-01-07T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://cnesp001.carene.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '7ac5a0f0-5296-eb11-9145-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'l4k3DxTmXUbJU1zx123HHz0FDdbPBpkftMzZkkMQZss=',
            name: 'WakeMed Health and Hospitals',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'WakeMed Health and Hospitals',
        managingOrganization: {
          reference: 'l4k3DxTmXUbJU1zx123HHz0FDdbPBpkftMzZkkMQZss=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epic-soap.wakemed.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '13b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '+ajVikW9TEn4SqKpsYC6atYLc7kJl24iljFFnyeXx7w=',
            name: 'AdvantageCare Physicians',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'AdvantageCare Physicians',
        managingOrganization: {
          reference: '+ajVikW9TEn4SqKpsYC6atYLc7kJl24iljFFnyeXx7w=',
        },
        period: {
          start: '2022-02-09T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epwebapps.acpny.com/FHIRproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '0692116d-bb26-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'iA7CZgQH/42oN25t+DE7mrFh4MfevGsj3zIIoiXs0So=',
            name: 'Lehigh Valley Health Network',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Lehigh Valley Health Network',
        managingOrganization: {
          reference: 'iA7CZgQH/42oN25t+DE7mrFh4MfevGsj3zIIoiXs0So=',
        },
        period: {
          start: '2021-10-26T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://proxy.lvh.com/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'c9508a06-8a39-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'SHj+0dSyR6xu7URXbPIWT514CbR8LnumU0ar9X4qcEE=',
            name: 'Montefiore Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Montefiore Medical Center',
        managingOrganization: {
          reference: 'SHj+0dSyR6xu7URXbPIWT514CbR8LnumU0ar9X4qcEE=',
        },
        period: {
          start: '2021-08-12T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://soapepic.montefiore.org/FhirProxyPrd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'f0d01e27-6426-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'w3d8TjvNy+oR90uLaazJLfQwCf7KKRCDbs9lsBCMEJ0=',
            name: 'Atlantic Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Atlantic Health',
        managingOrganization: {
          reference: 'w3d8TjvNy+oR90uLaazJLfQwCf7KKRCDbs9lsBCMEJ0=',
        },
        period: {
          start: '2021-11-11T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://soapproxy.atlantichealth.org/FHIRPrd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '6fee39a9-8127-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'FsBlFEowM4UcYiOpQbkmJqqmhYxfz6FjlyRUcekzt2k=',
            name: 'Northwest Community Hospital',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Northwest Community Hospital',
        managingOrganization: {
          reference: 'FsBlFEowM4UcYiOpQbkmJqqmhYxfz6FjlyRUcekzt2k=',
        },
        period: {
          start: '2021-12-01T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicprdproxy.nch.org/prd-fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e8ecf969-a91c-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '/wxt/boSaFMKPxB5WUu23+/2PLSjBILyILBzvRlwbiI=',
            name: 'Allegheny Health Network',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Allegheny Health Network',
        managingOrganization: {
          reference: '/wxt/boSaFMKPxB5WUu23+/2PLSjBILyILBzvRlwbiI=',
        },
        period: {
          start: '2021-10-28T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicprisfd01.wpahs.org/PRD-FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '78efa6a7-e090-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'F5MxXglOfl6SP6sGW73ow6eFFW6VHBFcCV78a214S80=',
            name: 'Hartford HealthCare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Hartford HealthCare',
        managingOrganization: {
          reference: 'F5MxXglOfl6SP6sGW73ow6eFFW6VHBFcCV78a214S80=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.hhchealth.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '7e0a87fd-2b51-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: '4feIOh3UrikJTKA5EvbCmM/BwjiU7jl3g0OP/dIe7BE=',
            name: 'The University of Texas MD Anderson Cancer Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'The University of Texas MD Anderson Cancer Center',
        managingOrganization: {
          reference: '4feIOh3UrikJTKA5EvbCmM/BwjiU7jl3g0OP/dIe7BE=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.mdanderson.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '18b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'IMJX3UDcxZjnPWQtEfrpPPEVMNSfxQJ+wxTjZC716iI=',
            name: 'Atrium Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Atrium Health',
        managingOrganization: {
          reference: 'IMJX3UDcxZjnPWQtEfrpPPEVMNSfxQJ+wxTjZC716iI=',
        },
        period: {
          start: '2021-11-17T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0905.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '19b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'IMJX3UDcxZjnPWQtEfrpPPEVMNSfxQJ+wxTjZC716iI=',
            name: 'Scotland Health Care System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Scotland Health Care System',
        managingOrganization: {
          reference: 'IMJX3UDcxZjnPWQtEfrpPPEVMNSfxQJ+wxTjZC716iI=',
        },
        period: {
          start: '2022-01-20T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0905.epichosted.com/FHIRproxy/SCOT/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '1ab765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'IMJX3UDcxZjnPWQtEfrpPPEVMNSfxQJ+wxTjZC716iI=',
            name: 'Southeastern Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Southeastern Health',
        managingOrganization: {
          reference: 'IMJX3UDcxZjnPWQtEfrpPPEVMNSfxQJ+wxTjZC716iI=',
        },
        period: {
          start: '2022-01-20T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0905.epichosted.com/FHIRproxy/SEH/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '1bb765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'IMJX3UDcxZjnPWQtEfrpPPEVMNSfxQJ+wxTjZC716iI=',
            name: "St. Luke's Hospital (North Carolina)",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "St. Luke's Hospital (North Carolina)",
        managingOrganization: {
          reference: 'IMJX3UDcxZjnPWQtEfrpPPEVMNSfxQJ+wxTjZC716iI=',
        },
        period: {
          start: '2022-01-20T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0905.epichosted.com/FHIRproxy/STLU/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'ed5fa91e-312c-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '30MQtlcdQapqtI0beKXx9rw8xxvpfMkTcnKO4GnzFwE=',
            name: 'Prisma Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Prisma Health',
        managingOrganization: {
          reference: '30MQtlcdQapqtI0beKXx9rw8xxvpfMkTcnKO4GnzFwE=',
        },
        period: {
          start: '2021-10-29T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0915.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '0f4a5ef9-f1a9-eb11-913d-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'YoPDqFiavretQeOfay7o0sJ+i4YTBc3F6HAwi2JNt8o=',
            name: 'El Camino Hospital',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'El Camino Hospital',
        managingOrganization: {
          reference: 'YoPDqFiavretQeOfay7o0sJ+i4YTBc3F6HAwi2JNt8o=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://rwebproxy.elcaminohospital.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '2bb765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '8Zp6lBMiN+i66GiAP4SiqoEIUxZXntYqP068BvOQGWo=',
            name: 'ProMedica Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'ProMedica Health System',
        managingOrganization: {
          reference: '8Zp6lBMiN+i66GiAP4SiqoEIUxZXntYqP068BvOQGWo=',
        },
        period: {
          start: '2021-12-22T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.promedica.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '585817c4-54af-eb11-913d-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: '6XsXDHN3iY4g9nmkGLfQZFbofAfCxyvDpV0L2cSghVE=',
            name: 'Caromont Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Caromont Health',
        managingOrganization: {
          reference: '6XsXDHN3iY4g9nmkGLfQZFbofAfCxyvDpV0L2cSghVE=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://spp.caromonthealth.org/FhirProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '3a9d3fea-7d18-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'orF2+WJJII3goRkoSxhlzTAUcjISfCLwRUChdFc27K0=',
            name: 'Hospital for Special Surgery',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Hospital for Special Surgery',
        managingOrganization: {
          reference: 'orF2+WJJII3goRkoSxhlzTAUcjISfCLwRUChdFc27K0=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0927.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '2fb765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'gnpE2VbBUqALpEsGqlR9ty1Pqacx/BZAYLo/he204AE=',
            name: 'Houston Methodist',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Houston Methodist',
        managingOrganization: {
          reference: 'gnpE2VbBUqALpEsGqlR9ty1Pqacx/BZAYLo/he204AE=',
        },
        period: {
          start: '2022-01-10T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epiclbsprxyprodpass.houstonmethodist.org/PRD-FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'f185dcbc-b4da-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'lgJJmNgpI56Q7g+KT9lgFv/Wko6uhAGvOAicEheDH1w=',
            name: 'Denver Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Denver Health',
        managingOrganization: {
          reference: 'lgJJmNgpI56Q7g+KT9lgFv/Wko6uhAGvOAicEheDH1w=',
        },
        period: {
          start: '2021-07-02T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://webservices.dhha.org/PRD-FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '147fdb3a-2276-eb11-9143-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'zwCUVmsL8WLV2LKJTk3QpscvuGPjb+JyJxGWkN5bhuk=',
            name: 'Baptist Health – KY & IN',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Baptist Health – KY & IN',
        managingOrganization: {
          reference: 'zwCUVmsL8WLV2LKJTk3QpscvuGPjb+JyJxGWkN5bhuk=',
        },
        period: {
          start: '2021-10-29T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.bhsi.com/PRD-FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '33b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '4btLHRbTrfIm9ilMG1WfYOCKToAzzgTsOiKnM1G4KGM=',
            name: 'Riverside Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Riverside Medical Center',
        managingOrganization: {
          reference: '4btLHRbTrfIm9ilMG1WfYOCKToAzzgTsOiKnM1G4KGM=',
        },
        period: {
          start: '2021-12-22T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://rpprod.riversidehealthcare.net/FHIRPRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '34b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'wyC809JqKxRI9RsyvmfbwtBK9N3OwSlh2xtIEeO2ETs=',
            name: 'Summit Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Summit Health',
        managingOrganization: {
          reference: 'wyC809JqKxRI9RsyvmfbwtBK9N3OwSlh2xtIEeO2ETs=',
        },
        period: {
          start: '2022-01-27T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicsoap.bmctotalcare.com/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'b39cbeb8-7678-eb11-9143-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'fahz0OxCBCegf+8p4HYqXgPDxrl/jZvBTKG0X9TcqAk=',
            name: 'Cottage Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Cottage Health',
        managingOrganization: {
          reference: 'fahz0OxCBCegf+8p4HYqXgPDxrl/jZvBTKG0X9TcqAk=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://eparp.sbch.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '2d1e360b-035c-eb11-9138-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'zJA0cioOZlTrBefvQttY/KAim3BAQSqzi/GDigg5grY=',
            name: 'Yakima Valley Farm Workers Clinic',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Yakima Valley Farm Workers Clinic',
        managingOrganization: {
          reference: 'zJA0cioOZlTrBefvQttY/KAim3BAQSqzi/GDigg5grY=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0943.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '612182b9-860d-eb11-9130-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'e/2D9lo/fukphjiliiJ8550rDDfNWB/GjEUo5nMComo=',
            name: 'Bayhealth Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Bayhealth Medical Center',
        managingOrganization: {
          reference: 'e/2D9lo/fukphjiliiJ8550rDDfNWB/GjEUo5nMComo=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epproxy.bayhealth.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '1fba0bc5-0781-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'NVMqpInhbPaMaLDy0OuA03rgcJVUWAk6b+RCINxh7yg=',
            name: 'Palos Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Palos Health',
        managingOrganization: {
          reference: 'NVMqpInhbPaMaLDy0OuA03rgcJVUWAk6b+RCINxh7yg=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0946.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '3eb765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 't1SE2/BBo6zTR09YJn/wtxXLymjG2wKYTaG77KFZr+U=',
            name: 'Greater Baltimore Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Greater Baltimore Medical Center',
        managingOrganization: {
          reference: 't1SE2/BBo6zTR09YJn/wtxXLymjG2wKYTaG77KFZr+U=',
        },
        period: {
          start: '2021-12-16T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://eportal.gbmc.org/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '40b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Qf9L5XGUqgeYzOYsx1uvhog7gvj9bm3pPgbxFIGxTs8=',
            name: 'Saint Francis Healthcare System (Manual)',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Saint Francis Healthcare System (Manual)',
        managingOrganization: {
          reference: 'Qf9L5XGUqgeYzOYsx1uvhog7gvj9bm3pPgbxFIGxTs8=',
        },
        period: {
          start: '2021-12-29T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://reverseproxy.sfmc.net/fhirproxyprd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '43b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Kj76oBmKejv+HCMO5tRYpTl/hupEnABWBHKWq4v6ZTI=',
            name: 'Spartanburg Regional Health Systems',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Spartanburg Regional Health Systems',
        managingOrganization: {
          reference: 'Kj76oBmKejv+HCMO5tRYpTl/hupEnABWBHKWq4v6ZTI=',
        },
        period: {
          start: '2022-01-04T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0939.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '47b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Cuds3PQ8yBLPPL0a0uracdKRkO2rUyb2stTXgji5e3g=',
            name: 'Select Medical',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Select Medical',
        managingOrganization: {
          reference: 'Cuds3PQ8yBLPPL0a0uracdKRkO2rUyb2stTXgji5e3g=',
        },
        period: {
          start: '2021-12-31T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0948.epichosted.com/FhirProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'cd9b8850-db25-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'ZIk7fMfg+8jAqe7DfyqtnzqoZDRV4KdVoqMS0qzhEpI=',
            name: 'Jefferson Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Jefferson Health',
        managingOrganization: {
          reference: 'ZIk7fMfg+8jAqe7DfyqtnzqoZDRV4KdVoqMS0qzhEpI=',
        },
        period: {
          start: '2021-12-10T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.jefferson.edu/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '3390f049-6f3e-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'u7YeCyrx9wwq2Wx3rjca2rKTPOpGYYYTTrIAMaR2+hE=',
            name: 'Mayo Clinic',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Mayo Clinic',
        managingOrganization: {
          reference: 'u7YeCyrx9wwq2Wx3rjca2rKTPOpGYYYTTrIAMaR2+hE=',
        },
        period: {
          start: '2021-11-22T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://pep.api.mayo.edu/epicfhiroauth/vexternal/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '4eb765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '6UsCSZ6E9W1lLKQJKtpYZ67NsQUiXgaW41iFd22TWHY=',
            name: 'UPMC Central PA',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'UPMC Central PA',
        managingOrganization: {
          reference: '6UsCSZ6E9W1lLKQJKtpYZ67NsQUiXgaW41iFd22TWHY=',
        },
        period: {
          start: '2022-01-18T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://Epic-Arr.pinnaclehealth.org/PRD-FHIR-ARR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'd8a78b0e-c990-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '3MMOj69+KRSmbreZ5zQb3rzDANhUswWsUa+R7Y6gI1M=',
            name: 'Riverside Health System (Newport News, VA)',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Riverside Health System (Newport News, VA)',
        managingOrganization: {
          reference: '3MMOj69+KRSmbreZ5zQb3rzDANhUswWsUa+R7Y6gI1M=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://ep-rpfg.rivhs.com/Interconnect-FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '3b64c07d-e6e4-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Bt3yqM29RSl/33xRN77hwSB4ZicmZ9RJ9nQfQS5CQEE=',
            name: 'BJC & Washington University',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'BJC & Washington University',
        managingOrganization: {
          reference: 'Bt3yqM29RSl/33xRN77hwSB4ZicmZ9RJ9nQfQS5CQEE=',
        },
        period: {
          start: '2021-07-16T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0965.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '52b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'c8pWOYlTCfjZjBHlM64CMbHdBbTXrnFD5pk44tdVz3g=',
            name: 'Eskenazi Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Eskenazi Health',
        managingOrganization: {
          reference: 'c8pWOYlTCfjZjBHlM64CMbHdBbTXrnFD5pk44tdVz3g=',
        },
        period: {
          start: '2022-01-04T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://proxy.eskenazihealth.edu/FHIR-Proxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '9c70b3a2-8027-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'QcZC8Bs9JhGd2Hxvnefcptj2MYom6IfjzpijfEEX3Ws=',
            name: 'Conemaugh Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Conemaugh Health System',
        managingOrganization: {
          reference: 'QcZC8Bs9JhGd2Hxvnefcptj2MYom6IfjzpijfEEX3Ws=',
        },
        period: {
          start: '2021-12-22T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.conemaugh.org/arr-fhir-prd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '85863409-9f8c-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'hX5iuFOh2XNF15jz6U7sqNRs1oGdGU3sczAiOLq8mQo=',
            name: 'WellSpan Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'WellSpan Health',
        managingOrganization: {
          reference: 'hX5iuFOh2XNF15jz6U7sqNRs1oGdGU3sczAiOLq8mQo=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://interconnect.wellspan.org/interconnect-prd-fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '8bf9a956-5dc5-eb11-913d-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'yWDgoN6N7Yx5+TjxdktMytHnRhSqyjy5xyoAQwdTBk4=',
            name: 'Scripps Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Scripps Health',
        managingOrganization: {
          reference: 'yWDgoN6N7Yx5+TjxdktMytHnRhSqyjy5xyoAQwdTBk4=',
        },
        period: {
          start: '2021-07-09T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://haiku.scrippshealth.org/ARR-PRD-FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '54b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'WbJ+9IeF4CDLZ/qj/47eWEMsinysj4NS9eJTCBGCoLE=',
            name: 'Erlanger Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Erlanger Health System',
        managingOrganization: {
          reference: 'WbJ+9IeF4CDLZ/qj/47eWEMsinysj4NS9eJTCBGCoLE=',
        },
        period: {
          start: '2021-11-09T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0967.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '55b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'TJHH+woDYsxPCE8bU/oNYx3dp0j5vyRKGrNjDHw3YIg=',
            name: 'TidalHealth',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'TidalHealth',
        managingOrganization: {
          reference: 'TJHH+woDYsxPCE8bU/oNYx3dp0j5vyRKGrNjDHw3YIg=',
        },
        period: {
          start: '2021-12-13T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://eweb.peninsula.org/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'be16415b-4172-eb11-9143-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'ySlBAOPSZ+ncautHWaADGgcJ7bEC0f/K2Dq1+IC50T4=',
            name: 'UMass Memorial Health Care',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'UMass Memorial Health Care',
        managingOrganization: {
          reference: 'ySlBAOPSZ+ncautHWaADGgcJ7bEC0f/K2Dq1+IC50T4=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0978.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '00d3177b-561c-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'ec+KIjHvazuBECDGeI633FZSC3I+ii6EaRgPRIIfzAM=',
            name: 'Mount Auburn Hospital',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Mount Auburn Hospital',
        managingOrganization: {
          reference: 'ec+KIjHvazuBECDGeI633FZSC3I+ii6EaRgPRIIfzAM=',
        },
        period: {
          start: '2021-10-06T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.mah.org/prd-fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '52383cfa-c4a9-eb11-913d-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'CmV1cgjzhfuXVtoF8FGg9rqt/ZfJXNq4SfZ76Ts8fBM=',
            name: 'Southern Illinois Healthcare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Southern Illinois Healthcare',
        managingOrganization: {
          reference: 'CmV1cgjzhfuXVtoF8FGg9rqt/ZfJXNq4SfZ76Ts8fBM=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://eprp.sih.net/FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '6335c73e-fd11-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Srzq8cwqkVLIcF7T5jIpZpNbxLT6fTvgPjREsNBX7cQ=',
            name: 'FirstHealth of the Carolinas',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'FirstHealth of the Carolinas',
        managingOrganization: {
          reference: 'Srzq8cwqkVLIcF7T5jIpZpNbxLT6fTvgPjREsNBX7cQ=',
        },
        period: {
          start: '2021-12-15T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicrp.firsthealth.org/FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '61b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'XzH3w4SKfNferQebjbSg8exDoFMvdcCs6TkphamGdi0=',
            name: 'Eisenhower Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Eisenhower Medical Center',
        managingOrganization: {
          reference: 'XzH3w4SKfNferQebjbSg8exDoFMvdcCs6TkphamGdi0=',
        },
        period: {
          start: '2021-12-07T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicarr.emc.org/EMC_FHIR_PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'cfacdb4a-e188-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'eC7nCliP50fS2id4M0e5n13FfKE2euZYGfmtqxcj9nU=',
            name: 'Charlotte Eye Ear Nose & Throat Associates',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Charlotte Eye Ear Nose & Throat Associates',
        managingOrganization: {
          reference: 'eC7nCliP50fS2id4M0e5n13FfKE2euZYGfmtqxcj9nU=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhirprd.ceenta.com/proxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '36d0c026-ee37-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'GDmgQvcoxwE2kKsmtlILS8SqFfbtcKpYgS6cj/5Cmg8=',
            name: 'South Shore Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'South Shore Health System',
        managingOrganization: {
          reference: 'GDmgQvcoxwE2kKsmtlILS8SqFfbtcKpYgS6cj/5Cmg8=',
        },
        period: {
          start: '2021-10-28T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://SSHIC.southshorehealth.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '986deb26-3a1a-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: '5AzOxaGf4BFLHeVqlYc5tKVixCWwhcFoq0zFrI0ytBE=',
            name: 'Watson Clinic',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Watson Clinic',
        managingOrganization: {
          reference: '5AzOxaGf4BFLHeVqlYc5tKVixCWwhcFoq0zFrI0ytBE=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epic-arr.watsonclinicad.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '2aeb1beb-d0fa-eb11-914b-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'AmKLmNl1kAo1By8D/X7WrXp1SvT4KN2gG+Rh+tRSJ2w=',
            name: 'MidMichigan Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'MidMichigan Health',
        managingOrganization: {
          reference: 'AmKLmNl1kAo1By8D/X7WrXp1SvT4KN2gG+Rh+tRSJ2w=',
        },
        period: {
          start: '2021-11-10T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://arrprod.midmichigan.net/ProdFHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '02d2e8f3-471a-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'cFEg3TBweasSpUmiVjcteTuqm5Hx2K/XT6xTdJK9CxU=',
            name: 'Vanderbilt',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Vanderbilt',
        managingOrganization: {
          reference: 'cFEg3TBweasSpUmiVjcteTuqm5Hx2K/XT6xTdJK9CxU=',
        },
        period: {
          start: '2021-09-21T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://arr01.service.vumc.org/FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '9ec37168-915a-eb11-9138-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'S10QmoZMs8bXTTB1z8RkeXlowSu6EoIktCgNJ4VGyYw=',
            name: 'Monument Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Monument Health',
        managingOrganization: {
          reference: 'S10QmoZMs8bXTTB1z8RkeXlowSu6EoIktCgNJ4VGyYw=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://ehrmobile.monument.health/interconnect-prd-fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'cd8dd522-e181-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'io4UdTsEIzS5kPRs+C8PZwGXhiLREy0pDi82GQP87e0=',
            name: 'Northeast Georgia Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Northeast Georgia Health System',
        managingOrganization: {
          reference: 'io4UdTsEIzS5kPRs+C8PZwGXhiLREy0pDi82GQP87e0=',
        },
        period: {
          start: '2021-10-13T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://wpprod.nghs.com/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'da07ec13-6791-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Zg+t2Hgc+t7siyz2hLTIjlp8iIrD0INEP2XYA6r7EQs=',
            name: 'Skagit Regional Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Skagit Regional Health',
        managingOrganization: {
          reference: 'Zg+t2Hgc+t7siyz2hLTIjlp8iIrD0INEP2XYA6r7EQs=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1005.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'b1d1856e-5b16-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '7uM1/BBCEJbR2oMJSjwvopEoMbUOnhMpvp+esLdKu9w=',
            name: 'OrthoVirginia',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'OrthoVirginia',
        managingOrganization: {
          reference: '7uM1/BBCEJbR2oMJSjwvopEoMbUOnhMpvp+esLdKu9w=',
        },
        period: {
          start: '2021-09-15T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1015.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'a1134c61-9140-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'uIVU5jS4gfXf23R2x2SxWOhWemk/0vbce4eie6ZSlok=',
            name: 'Main Line Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Main Line Health',
        managingOrganization: {
          reference: 'uIVU5jS4gfXf23R2x2SxWOhWemk/0vbce4eie6ZSlok=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1007.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '64b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'KoE19R5qIPFrUInnXE8xMzksYp+q9sQlJAmEV4sXvaM=',
            name: 'Virtua Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Virtua Health',
        managingOrganization: {
          reference: 'KoE19R5qIPFrUInnXE8xMzksYp+q9sQlJAmEV4sXvaM=',
        },
        period: {
          start: '2022-01-20T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1017.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'a3dd2d85-79e9-eb11-914b-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'WKBJvBNrr5SDAX7z/5P7jnPJPzPwJwNHqFwBGnNteKE=',
            name: 'UConn Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'UConn Health',
        managingOrganization: {
          reference: 'WKBJvBNrr5SDAX7z/5P7jnPJPzPwJwNHqFwBGnNteKE=',
        },
        period: {
          start: '2021-10-27T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0996.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '9eb7381a-8027-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'pJTELbxlcXi3LwsGpM4uu9YHMsFmKSIsd0G3CkXq1Yc=',
            name: 'South Georgia Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'South Georgia Medical Center',
        managingOrganization: {
          reference: 'pJTELbxlcXi3LwsGpM4uu9YHMsFmKSIsd0G3CkXq1Yc=',
        },
        period: {
          start: '2022-02-02T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1024.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '66b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'dwMikMRFnx0uz5adxdI9MLYFqPs913Xr4YpktZ0m4C8=',
            name: 'City of Hope',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'City of Hope',
        managingOrganization: {
          reference: 'dwMikMRFnx0uz5adxdI9MLYFqPs913Xr4YpktZ0m4C8=',
        },
        period: {
          start: '2021-12-24T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epic-rproxyprod.coh.org/Interconnect-FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '2090f20d-911f-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'vb0enpCwzFyzBdYDj6RFm5PoJrXXRHszG4UfD+DHzs8=',
            name: 'Shannon Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Shannon Health',
        managingOrganization: {
          reference: 'vb0enpCwzFyzBdYDj6RFm5PoJrXXRHszG4UfD+DHzs8=',
        },
        period: {
          start: '2021-09-28T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicrpx.shannonhealth.org/FHIR_ARR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '8c11f760-9714-eb11-9130-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'cyqpLRWBcD44yma6nvHgvCLccTfCzENYvvNcQueI83I=',
            name: 'UMC Southern Nevada',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'UMC Southern Nevada',
        managingOrganization: {
          reference: 'cyqpLRWBcD44yma6nvHgvCLccTfCzENYvvNcQueI83I=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1023.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '95a67f16-d98b-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'ts/qOjHqfxrNBBlcv5xQojFJm/K3XXb8tCBFXt/osNY=',
            name: 'Trinity Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Trinity Health',
        managingOrganization: {
          reference: 'ts/qOjHqfxrNBBlcv5xQojFJm/K3XXb8tCBFXt/osNY=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epic-ext.trinity-health.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'cd96e486-2e22-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '9HAVz0Svrg+ovBoMm/O/af51qh5UvRLgps+j6ATOvvA=',
            name: 'Ardent',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Ardent',
        managingOrganization: {
          reference: '9HAVz0Svrg+ovBoMm/O/af51qh5UvRLgps+j6ATOvvA=',
        },
        period: {
          start: '2021-09-30T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.ardenthealth.com/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '6ab765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'gSsqtGD9nMsRQQZr1TcSCuNbm91QeNrtTfldyYxv+nI=',
            name: 'Hill Physicians',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Hill Physicians',
        managingOrganization: {
          reference: 'gSsqtGD9nMsRQQZr1TcSCuNbm91QeNrtTfldyYxv+nI=',
        },
        period: {
          start: '2021-12-01T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1013.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'd0fd5d00-7437-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'J50dUW7V3Qc59Y7yePp8YL4eaZDAfzD3T1kyOTS6/ss=',
            name: "Arkansas Children's",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Arkansas Children's",
        managingOrganization: {
          reference: 'J50dUW7V3Qc59Y7yePp8YL4eaZDAfzD3T1kyOTS6/ss=',
        },
        period: {
          start: '2021-12-08T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.archildrens.org/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '814c2c0b-bb1c-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Src8Yoxln0xnVV05jorIP84z7KRSD8tgsuCLRKMmlMg=',
            name: 'University of California Irvine',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'University of California Irvine',
        managingOrganization: {
          reference: 'Src8Yoxln0xnVV05jorIP84z7KRSD8tgsuCLRKMmlMg=',
        },
        period: {
          start: '2022-02-10T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et0502.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'be4ec4d1-9d35-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'FNpEsLp1PZu21D8nJvrWavQNvbTI2Fam5h0q1YCE3eE=',
            name: 'Bryan Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Bryan Health',
        managingOrganization: {
          reference: 'FNpEsLp1PZu21D8nJvrWavQNvbTI2Fam5h0q1YCE3eE=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1031.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '4c925123-d813-eb11-9130-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'GpUKyHcP9NYdAGXW8S16JSYVOgy0KGIBJ1tf1um4xPk=',
            name: 'Cook Children’s Health Care System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Cook Children’s Health Care System',
        managingOrganization: {
          reference: 'GpUKyHcP9NYdAGXW8S16JSYVOgy0KGIBJ1tf1um4xPk=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://cookicfg.cookchildrens.org/CookFHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '6eb765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'hAfPa2qE5nYFW/eA5PT8OnEGnXptrhzbfbfYdjoR6LQ=',
            name: 'Virginia Hospital Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Virginia Hospital Center',
        managingOrganization: {
          reference: 'hAfPa2qE5nYFW/eA5PT8OnEGnXptrhzbfbfYdjoR6LQ=',
        },
        period: {
          start: '2021-11-16T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://common.virginiahospitalcenter.com/FHIRPRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '6fb765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'KUhLDD1Gf8sKNs+Fl5SCJm5hGYokAiPPK6mOb2PPgZs=',
            name: 'Columbus Regional Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Columbus Regional Health',
        managingOrganization: {
          reference: 'KUhLDD1Gf8sKNs+Fl5SCJm5hGYokAiPPK6mOb2PPgZs=',
        },
        period: {
          start: '2021-12-15T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicprdproxy.crh.org/FHIRPRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '70b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '8KRqQUETnuf0VRrehDqLXuzNgvSF9143PyQQacCqS2g=',
            name: 'Fresenius Medical Care North America',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Fresenius Medical Care North America',
        managingOrganization: {
          reference: '8KRqQUETnuf0VRrehDqLXuzNgvSF9143PyQQacCqS2g=',
        },
        period: {
          start: '2022-02-07T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1041.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '031843dd-a636-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'KS/0Rj24IK/VUreVqeJpkUJQrSR5nc4J8WU7OPgpRQQ=',
            name: 'Molina Healthcare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Molina Healthcare',
        managingOrganization: {
          reference: 'KS/0Rj24IK/VUreVqeJpkUJQrSR5nc4J8WU7OPgpRQQ=',
        },
        period: {
          start: '2022-01-12T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1057.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '72b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'qmR+27srby3mp99G5uNxrAnKr2+QBWk5XJTnpJ4eW0I=',
            name: 'Mary Washington Healthcare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Mary Washington Healthcare',
        managingOrganization: {
          reference: 'qmR+27srby3mp99G5uNxrAnKr2+QBWk5XJTnpJ4eW0I=',
        },
        period: {
          start: '2022-02-08T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1055.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '75b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'xRv1b94thCkJBEUXrwDEvWYvsJVvOHYypurjrYY3yi0=',
            name: 'Montage Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Montage Health',
        managingOrganization: {
          reference: 'xRv1b94thCkJBEUXrwDEvWYvsJVvOHYypurjrYY3yi0=',
        },
        period: {
          start: '2021-12-31T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1058.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '693bbf2c-c2ca-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'yI6OMVudrTeZU+tJPpnj8c/+1F0gE4BcMcBb9l0VJ1w=',
            name: 'Meritus',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Meritus',
        managingOrganization: {
          reference: 'yI6OMVudrTeZU+tJPpnj8c/+1F0gE4BcMcBb9l0VJ1w=',
        },
        period: {
          start: '2021-12-07T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://meritus-rev-prd.meritushealth.com/FHIRPRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '7ebc8ddb-f027-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'TAT8YmjwhmsEytqmAmbftRl0645WB3oZA98lMVgm3gc=',
            name: 'Englewood Hospital and Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Englewood Hospital and Medical Center',
        managingOrganization: {
          reference: 'TAT8YmjwhmsEytqmAmbftRl0645WB3oZA98lMVgm3gc=',
        },
        period: {
          start: '2021-10-18T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1073.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'dfb2c221-ffb9-eb11-913d-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'fP5y1Eya0hNoPeRkRrMGUPtgOcrsM3aGBqDU/aPPt08=',
            name: 'Olmsted Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Olmsted Medical Center',
        managingOrganization: {
          reference: 'fP5y1Eya0hNoPeRkRrMGUPtgOcrsM3aGBqDU/aPPt08=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1077.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '596fb146-6133-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'FKCtMWPFSZssfgm52D0i+zLmIC8QGW5BiauNKSvNjzs=',
            name: 'The Brooklyn Hospital Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'The Brooklyn Hospital Center',
        managingOrganization: {
          reference: 'FKCtMWPFSZssfgm52D0i+zLmIC8QGW5BiauNKSvNjzs=',
        },
        period: {
          start: '2021-11-30T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1043.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '7bb765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'xDVkTMvMR4eEtR5GNZpubMR8E7AsA6fKFPTyLfMpI/g=',
            name: 'Pine Rest Christian Mental Health Services',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Pine Rest Christian Mental Health Services',
        managingOrganization: {
          reference: 'xDVkTMvMR4eEtR5GNZpubMR8E7AsA6fKFPTyLfMpI/g=',
        },
        period: {
          start: '2022-02-08T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://wecare.pinerest.org/fhirproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '86685c89-fdd4-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'RS4swcz4trkjVpEHRnII4YK1CGxXTPNDMjC/XTGNp0o=',
            name: 'Columbia Physicians',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Columbia Physicians',
        managingOrganization: {
          reference: 'RS4swcz4trkjVpEHRnII4YK1CGxXTPNDMjC/XTGNp0o=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy-pub.et1089.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '65d9e6a1-fdd4-eb11-9149-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'RS4swcz4trkjVpEHRnII4YK1CGxXTPNDMjC/XTGNp0o=',
            name: 'New York-Presbyterian',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'New York-Presbyterian',
        managingOrganization: {
          reference: 'RS4swcz4trkjVpEHRnII4YK1CGxXTPNDMjC/XTGNp0o=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy-pub.et1089.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'e882d04b-9c82-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'RS4swcz4trkjVpEHRnII4YK1CGxXTPNDMjC/XTGNp0o=',
            name: 'Weill Cornell Medicine',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Weill Cornell Medicine',
        managingOrganization: {
          reference: 'RS4swcz4trkjVpEHRnII4YK1CGxXTPNDMjC/XTGNp0o=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy-pub.et1089.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'c6eaef94-9f91-eb11-9145-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'nld44+uRyeGEzvzlOPFMKINaah3WE0rhkct6E0nPUoY=',
            name: 'DaVita Physician Solutions',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'DaVita Physician Solutions',
        managingOrganization: {
          reference: 'nld44+uRyeGEzvzlOPFMKINaah3WE0rhkct6E0nPUoY=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1087.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '7db765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Drcg4bVzngOdhrOgfNBZvs7MQ+ZFBsShRMwPpbm/+9M=',
            name: 'North Mississippi Health Services',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'North Mississippi Health Services',
        managingOrganization: {
          reference: 'Drcg4bVzngOdhrOgfNBZvs7MQ+ZFBsShRMwPpbm/+9M=',
        },
        period: {
          start: '2021-11-22T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://eiclbext.nmhs.net/interconnect-fhir-prd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '9e53e5d0-d11f-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'O/ObnaEk1o895qlCRUihKTEvnfJbk+FJKbzlbV2uP8E=',
            name: 'United Regional Health Care System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'United Regional Health Care System',
        managingOrganization: {
          reference: 'O/ObnaEk1o895qlCRUihKTEvnfJbk+FJKbzlbV2uP8E=',
        },
        period: {
          start: '2021-10-20T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1096.epichosted.com/FHIRProxy/api/fhir/r4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '7fb765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'yIdbPNsPnE87r01A8H0b9Uo1JKAP95xCjyzPmNXcIQg=',
            name: 'Alameda Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Alameda Health System',
        managingOrganization: {
          reference: 'yIdbPNsPnE87r01A8H0b9Uo1JKAP95xCjyzPmNXcIQg=',
        },
        period: {
          start: '2022-01-11T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1075.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'fb5cd496-d34b-ec11-914e-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'WCzGDoltllOGUekQvzjMozkIVtNa7aK2g85C9epti14=',
            name: 'Kennedy Krieger Institute',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Kennedy Krieger Institute',
        managingOrganization: {
          reference: 'WCzGDoltllOGUekQvzjMozkIVtNa7aK2g85C9epti14=',
        },
        period: {
          start: '2021-12-13T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1095.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '32986af7-ae06-ec11-9141-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'dzMgt6ZLtFMR1qJETkfyEGCJO6Cu0HhsUz02jhz1b+M=',
            name: 'Tanner Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Tanner Health System',
        managingOrganization: {
          reference: 'dzMgt6ZLtFMR1qJETkfyEGCJO6Cu0HhsUz02jhz1b+M=',
        },
        period: {
          start: '2021-10-25T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1098.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'd05a570d-2f96-eb11-9145-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'KOh3+3RXqmFLM7XsYW5cyD1kxG8Vu1p/Bxrf4wCsD54=',
            name: 'Cape Fear Valley Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Cape Fear Valley Health',
        managingOrganization: {
          reference: 'KOh3+3RXqmFLM7XsYW5cyD1kxG8Vu1p/Bxrf4wCsD54=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1094.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '81b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '0I/gTQnYEI4SOROA1FjaKcHlBgufKYTKBiI2Ao21o6Q=',
            name: 'Mohawk Valley Health System',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Mohawk Valley Health System',
        managingOrganization: {
          reference: '0I/gTQnYEI4SOROA1FjaKcHlBgufKYTKBiI2Ao21o6Q=',
        },
        period: {
          start: '2022-02-07T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://fhir.mvhealthsystem.org/FHIRproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '84b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'AKc65p9HvXYwL0UsCqNFLSYtb4pXodwaiFLUHZQSqMw=',
            name: 'Boulder Community Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Boulder Community Health',
        managingOrganization: {
          reference: 'AKc65p9HvXYwL0UsCqNFLSYtb4pXodwaiFLUHZQSqMw=',
        },
        period: {
          start: '2021-12-28T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://prevprox.bch.org/FHIRproxyPRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '9b59e1b9-d68b-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'tjj7mmpoc1Z3Zpi9EE3xih5TKcVcHChEhP80F5q+GBQ=',
            name: 'Pacific Dental Services',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Pacific Dental Services',
        managingOrganization: {
          reference: 'tjj7mmpoc1Z3Zpi9EE3xih5TKcVcHChEhP80F5q+GBQ=',
        },
        period: {
          start: '2021-12-03T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1079.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '0ae26555-a636-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'aqu10rRBftPjskLJYK8eiG4xeXr+ixjPB7ybSsCgjgM=',
            name: 'AltaMed',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'AltaMed',
        managingOrganization: {
          reference: 'aqu10rRBftPjskLJYK8eiG4xeXr+ixjPB7ybSsCgjgM=',
        },
        period: {
          start: '2021-11-18T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1123.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '523f0fac-bd26-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'yXhzZJjMKb/pOOnEvCaoae4UIuPoNvIo6jxaCCPahuk=',
            name: 'UI Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'UI Health',
        managingOrganization: {
          reference: 'yXhzZJjMKb/pOOnEvCaoae4UIuPoNvIo6jxaCCPahuk=',
        },
        period: {
          start: '2021-12-22T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1085.epichosted.com/FHIRPROXY/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'f44e61a0-7bf0-eb11-914b-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'TUTs823JX+5G4xUcM07EBvxqN8hiM8VnxSAksSLBG9A=',
            name: 'UHS San Antonio',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'UHS San Antonio',
        managingOrganization: {
          reference: 'TUTs823JX+5G4xUcM07EBvxqN8hiM8VnxSAksSLBG9A=',
        },
        period: {
          start: '2021-07-29T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1130.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '2d3d97d9-eb93-eb11-9145-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'U/CANCCc/9Gl/1jXVVWF0R7yITaSIw07sIsnlJPXCvA=',
            name: 'QuadMed',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'QuadMed',
        managingOrganization: {
          reference: 'U/CANCCc/9Gl/1jXVVWF0R7yITaSIw07sIsnlJPXCvA=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicicfore.quadmedical.com/fhirprd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '8849aa22-538e-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '2iJDxHbKWDP9eJj9+6BPVkoz4P5clrChoEraf5wb0+E=',
            name: "Valley Children's Healthcare",
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: "Valley Children's Healthcare",
        managingOrganization: {
          reference: '2iJDxHbKWDP9eJj9+6BPVkoz4P5clrChoEraf5wb0+E=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://ic.valleychildrens.org/fhir/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '88b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '4Pmjf/d87H3MU4lR+leXbGe/6A+mc1mKK+1HxvPtVpE=',
            name: 'Orlando Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Orlando Health',
        managingOrganization: {
          reference: '4Pmjf/d87H3MU4lR+leXbGe/6A+mc1mKK+1HxvPtVpE=',
        },
        period: {
          start: '2022-01-18T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1131.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '2762daae-df1e-eb11-9135-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: '8E7D6c1rj5eJzFrshgrs42wMQsgzdGx+zdUTan6nYBo=',
            name: 'Cigna Medical Group',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Cigna Medical Group',
        managingOrganization: {
          reference: '8E7D6c1rj5eJzFrshgrs42wMQsgzdGx+zdUTan6nYBo=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicarr.healthcare.cigna.com/FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'dd1bb107-af90-eb11-9144-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '8E7D6c1rj5eJzFrshgrs42wMQsgzdGx+zdUTan6nYBo=',
            name: 'Evernorth',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Evernorth',
        managingOrganization: {
          reference: '8E7D6c1rj5eJzFrshgrs42wMQsgzdGx+zdUTan6nYBo=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicarr.healthcare.cigna.com/FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '8ab765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '2bliTHJOWNRDdVLDlF5se22bJsJjnnxJSM3ugZhFd/Q=',
            name: 'United Health Services New York (NYUHS)',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'United Health Services New York (NYUHS)',
        managingOrganization: {
          reference: '2bliTHJOWNRDdVLDlF5se22bJsJjnnxJSM3ugZhFd/Q=',
        },
        period: {
          start: '2021-11-19T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1127.epichosted.com/FHIRproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '09e77ad6-611d-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '0XqQwqvtTcl+ESEwQ+wssOwueOEQsiyLRwRMbQG1Mbs=',
            name: 'Catholic Health System (Buffalo)',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Catholic Health System (Buffalo)',
        managingOrganization: {
          reference: '0XqQwqvtTcl+ESEwQ+wssOwueOEQsiyLRwRMbQG1Mbs=',
        },
        period: {
          start: '2021-10-18T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1144.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '174f5170-1c30-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'kjsYqAnJ5BuO/3H+bzponei7lA2Xiro+nfj4838gPY8=',
            name: 'Brown & Toland Physicians',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Brown & Toland Physicians',
        managingOrganization: {
          reference: 'kjsYqAnJ5BuO/3H+bzponei7lA2Xiro+nfj4838gPY8=',
        },
        period: {
          start: '2021-11-11T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1138.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '3eb04572-7337-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Tb6uTV5niB8OuD0VF6UkLuIgncYxqYjHz/CFs236/88=',
            name: 'Salinas Valley Memorial Healthcare Systems',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Salinas Valley Memorial Healthcare Systems',
        managingOrganization: {
          reference: 'Tb6uTV5niB8OuD0VF6UkLuIgncYxqYjHz/CFs236/88=',
        },
        period: {
          start: '2021-11-09T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1146.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'dcf32798-ab2c-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'WZoGTip/wk/t9Ed3mWCeSNOVTeqbxgGO6kf9f47maDI=',
            name: 'New Jersey Urology',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'New Jersey Urology',
        managingOrganization: {
          reference: 'WZoGTip/wk/t9Ed3mWCeSNOVTeqbxgGO6kf9f47maDI=',
        },
        period: {
          start: '2021-11-10T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1153.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '9baa47d5-fb11-ec11-9150-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Zuuh+x5pg60BWdcPEjy3GeOCuWTqyz7IxAJx3CpcYrA=',
            name: 'Southeast Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Southeast Health',
        managingOrganization: {
          reference: 'Zuuh+x5pg60BWdcPEjy3GeOCuWTqyz7IxAJx3CpcYrA=',
        },
        period: {
          start: '2021-09-10T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://arrprd.southeasthealth.org/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '1cdb58b1-1d97-eb11-9145-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'YVeFCDF61F4OaO2F2W0EFENzqrbOGK0X888Urv8YGAc=',
            name: 'Phelps Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Phelps Health',
        managingOrganization: {
          reference: 'YVeFCDF61F4OaO2F2W0EFENzqrbOGK0X888Urv8YGAc=',
        },
        period: {
          start: '2021-09-13T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1134.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'd8750fd7-6133-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'taWpd34aDRdnn6gNrTkcHfvM1hYBFJ0k79sHXs5KXgA=',
            name: 'Arrowhead Regional Medical Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Arrowhead Regional Medical Center',
        managingOrganization: {
          reference: 'taWpd34aDRdnn6gNrTkcHfvM1hYBFJ0k79sHXs5KXgA=',
        },
        period: {
          start: '2021-11-30T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1152.epichosted.com/fhirproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '93b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'lclC/i15aua4rghP9SKllZlchRuB1Ltt5Hk79T71j5Y=',
            name: 'The University of Texas Health Science Center at Houston',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'The University of Texas Health Science Center at Houston',
        managingOrganization: {
          reference: 'lclC/i15aua4rghP9SKllZlchRuB1Ltt5Hk79T71j5Y=',
        },
        period: {
          start: '2021-12-08T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1178.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'a9226c86-e5ad-eb11-913d-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'hImkv3fho3pYt8NabOF57Q1V/7lk3d+VG+owKl2+NOM=',
            name: 'RWJBarnabas Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'RWJBarnabas Health',
        managingOrganization: {
          reference: 'hImkv3fho3pYt8NabOF57Q1V/7lk3d+VG+owKl2+NOM=',
        },
        period: {
          start: '2021-12-07T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1157.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '4c648d5f-dea6-eb11-9147-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '3f7qYp43OVYE/L7Um4/sCVLkIjBDOZNOdRzNOo19LXw=',
            name: 'Golden Valley Health Centers',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Golden Valley Health Centers',
        managingOrganization: {
          reference: '3f7qYp43OVYE/L7Um4/sCVLkIjBDOZNOdRzNOo19LXw=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://ep-rps.gvhc.org/FHIR-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '49041207-329e-eb11-9145-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '2WxQPM6qZ7c6cy7QTy9hGkpKSlM5E2xc4YeXdqmlD54=',
            name: 'Planned Parenthood',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Planned Parenthood',
        managingOrganization: {
          reference: '2WxQPM6qZ7c6cy7QTy9hGkpKSlM5E2xc4YeXdqmlD54=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1154.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '34f54e54-f46a-eb11-9143-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Tf4c0/xxY+kbw49HiUSYhBIX4LCE4cn7quApBZOoZMI=',
            name: 'FastMed',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'FastMed',
        managingOrganization: {
          reference: 'Tf4c0/xxY+kbw49HiUSYhBIX4LCE4cn7quApBZOoZMI=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://external.fastmed.com/FHIRproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '95b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'wE9JmGeAzOAeWDNq+ZNcVkeWL83Y6Oq6F65lvGuE2DI=',
            name: 'University of Louisville Physicians',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'University of Louisville Physicians',
        managingOrganization: {
          reference: 'wE9JmGeAzOAeWDNq+ZNcVkeWL83Y6Oq6F65lvGuE2DI=',
        },
        period: {
          start: '2021-12-08T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1193.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '97b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'zlJBnqAQCjvbQ+1DhJVEUnwqRABGSrRsBQKcgpgdJCo=',
            name: 'Hoag Memorial Hospital Presbyterian',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Hoag Memorial Hospital Presbyterian',
        managingOrganization: {
          reference: 'zlJBnqAQCjvbQ+1DhJVEUnwqRABGSrRsBQKcgpgdJCo=',
        },
        period: {
          start: '2021-12-10T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1197.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '105a228c-246a-eb11-9143-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'hbggkoXq680PigcWeIzsjTWVbvwhjlaa5lu3c68yHpQ=',
            name: 'Licking Memorial Health Systems',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Licking Memorial Health Systems',
        managingOrganization: {
          reference: 'hbggkoXq680PigcWeIzsjTWVbvwhjlaa5lu3c68yHpQ=',
        },
        period: {
          start: '2021-09-29T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1168.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '138962ee-620a-ec11-9141-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'E+S4q8/loWLZrVD30ubLSdbCGaAvs00kA4pzDg8Tpzw=',
            name: 'VCU Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'VCU Health',
        managingOrganization: {
          reference: 'E+S4q8/loWLZrVD30ubLSdbCGaAvs00kA4pzDg8Tpzw=',
        },
        period: {
          start: '2021-12-01T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1200.epichosted.com/OAuth2-PRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '1c213004-79e9-eb11-914b-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'Mzdi7OJPO+Ddkb5yM+s7EzHr01pTvrbgZjdEiNs5eaQ=',
            name: 'OrthoCarolina',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'OrthoCarolina',
        managingOrganization: {
          reference: 'Mzdi7OJPO+Ddkb5yM+s7EzHr01pTvrbgZjdEiNs5eaQ=',
        },
        period: {
          start: '2021-09-08T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epwebapps.orthocarolina.com/fhir-prd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '6f9aa743-9761-eb11-9143-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'IFBPmvBm+lIXL9wZDq9E2X5vvhetiFZFbiy5D8iCabE=',
            name: 'Arizona Community Physicians',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Arizona Community Physicians',
        managingOrganization: {
          reference: 'IFBPmvBm+lIXL9wZDq9E2X5vvhetiFZFbiy5D8iCabE=',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://interconnect.azacp.com/interconnect-oauth2-prd/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'c6e725c8-6536-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '/PyhNwUZGuTxc7J8nourPwoxac5XuMT9ydxNkiNGsGM=',
            name: 'Memorial Hospital and Health Care Center',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Memorial Hospital and Health Care Center',
        managingOrganization: {
          reference: '/PyhNwUZGuTxc7J8nourPwoxac5XuMT9ydxNkiNGsGM=',
        },
        period: {
          start: '2021-11-29T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://arrprd.mhhcc.org/OAuth2/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '9cb765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'sW7gOgZOObkU9f2JLH+KTWBjSjyF3qjm8VxPJc8R1lM=',
            name: 'NOVO Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'NOVO Health',
        managingOrganization: {
          reference: 'sW7gOgZOObkU9f2JLH+KTWBjSjyF3qjm8VxPJc8R1lM=',
        },
        period: {
          start: '2022-01-18T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://rproxy.novohtg.com/OAUTHPRD/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '9fb765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'uidDwEeMGbb1R7nz52qZmn0Aur2a6ctuZuTGT4cRaoQ=',
            name: 'Illinois Bone & Joint Institute',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Illinois Bone & Joint Institute',
        managingOrganization: {
          reference: 'uidDwEeMGbb1R7nz52qZmn0Aur2a6ctuZuTGT4cRaoQ=',
        },
        period: {
          start: '2022-01-12T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1195.epichosted.com/fhirproxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '85b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'tjeoJ0z0yYWBp2OFFQRgq+qUDgfDungCh7rxAQpIUQE=',
            name: 'OptumCare East',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'OptumCare East',
        managingOrganization: {
          reference: 'tjeoJ0z0yYWBp2OFFQRgq+qUDgfDungCh7rxAQpIUQE=',
        },
        period: {
          start: '2022-01-26T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicarr.optum.com/FHIR/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '2fd915c5-5e2b-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '/K2T8naGj1OsmzySpSOTjO1ccUlc8T1j+aU6ABd2jF8=',
            name: 'George Washington University Medical Faculty Associates',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'George Washington University Medical Faculty Associates',
        managingOrganization: {
          reference: '/K2T8naGj1OsmzySpSOTjO1ccUlc8T1j+aU6ABd2jF8=',
        },
        period: {
          start: '2021-10-12T00:00:00-05:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1222.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'a2b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: '5C11lwLVpz3CuaQHeBiWD61UDIivLvFmA2OGkwN4054=',
            name: 'Reid Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Reid Health',
        managingOrganization: {
          reference: '5C11lwLVpz3CuaQHeBiWD61UDIivLvFmA2OGkwN4054=',
        },
        period: {
          start: '2021-11-15T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1220.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '0cf57fe7-aa06-ec11-9141-001dd8b71f1a',
        contained: [
          {
            resourceType: 'Organization',
            id: 'XiSmwn6eMrLBmqWle4U97lLUoOdDI/Ng3Z95R1TUlFg=',
            name: 'Self Regional Healthcare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'Self Regional Healthcare',
        managingOrganization: {
          reference: 'XiSmwn6eMrLBmqWle4U97lLUoOdDI/Ng3Z95R1TUlFg=',
        },
        period: {
          start: '2021-11-08T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1235.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: '1da157ee-7928-ec11-9152-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'pBUYOjp6eUrSIsba/F0Q7Dow9REts5/rwkhsgj0JBlk=',
            name: 'El Rio Health',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'El Rio Health',
        managingOrganization: {
          reference: 'pBUYOjp6eUrSIsba/F0Q7Dow9REts5/rwkhsgj0JBlk=',
        },
        period: {
          start: '2021-12-28T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1240.epichosted.com/FHIRProxy/api/FHIR/R4/',
      },
    },
    {
      resource: {
        resourceType: 'Endpoint',
        id: 'a9b765c7-0c38-ec11-9155-001dd8b71f19',
        contained: [
          {
            resourceType: 'Organization',
            id: 'ce85EkCt6IDBmdYSocyO41QSY1hJ+R7Och5nLIRvWYk=',
            name: 'West Tennessee Healthcare',
          },
        ],
        status: 'active',
        connectionType: {
          system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
          code: 'hl7-fhir-rest',
        },
        name: 'West Tennessee Healthcare',
        managingOrganization: {
          reference: 'ce85EkCt6IDBmdYSocyO41QSY1hJ+R7Och5nLIRvWYk=',
        },
        period: {
          start: '2021-12-21T00:00:00-06:00',
        },
        payloadType: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS',
                code: 'NA',
              },
            ],
          },
        ],
        payloadMimeType: [
          'application/fhir+json',
          'application/json+fhir',
          'application/xml+fhir',
          'application/fhir+xml',
        ],
        address: 'https://epicproxy.et1243.epichosted.com/OAuth2-PRD/api/FHIR/R4/',
      },
    },
  ],
} as TypedBundle<Endpoint>;
