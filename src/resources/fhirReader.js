import {
  format, parse, parseISO, formatDuration, intervalToDuration, compareAsc,
} from 'date-fns';

// date format used throughout the UI
const UI_DATE_FORMAT = 'MMM d, Y';

const injectSubType = (resource) => {
  let subType;
  switch (resource.resourceType) {
    case 'Condition':
    case 'DiagnosticReport':
    case 'Procedure':
    case 'Observation':
      subType = resource.code?.text;
      break;
    case 'Encounter':
      subType = resource.type?.[0]?.text;
      break;
    case 'Immunization':
      subType = resource.vaccineCode?.text;
      break;
    case 'MedicationRequest':
      subType = resource.medicationCodeableConcept?.text;
      break;
    case 'CarePlan':
      subType = resource.category?.[0]?.text;
      break;
    default:
      console.warn(`No subType found for resource: ${resource}`);
      subType = 'Other';
      break;
  }

  return { ...resource, subType };
};

const STATUSES_OK = ['200 OK', '201 Created'];

const MAX_DEPTH = 4;
export const processBundle = (acc, resource, depth) => {
  if (depth > MAX_DEPTH) {
    return;
  }
  const { id, resourceType } = resource;
  if (resourceType === 'Bundle') {
    if (!resource.entry) {
      console.warn(`No resource.entry -- resource: ${JSON.stringify(resource, null, 2)}.`); // eslint-disable-line no-console
      return;
    }
    resource.entry.forEach((entry) => {
      const status = entry?.response?.status;
      if (!STATUSES_OK.includes(status)) {
        console.error(`response.status not OK -- status: ${status}, id: ${id}`); // eslint-disable-line no-console
      }
      processBundle(acc, entry.resource, depth + 1);
    });
  } else {
    if (!id) {
      console.warn(`No id -- resource: ${JSON.stringify(resource, null, 2)}.`); // eslint-disable-line no-console
      return;
    }
    if (acc[id]) {
      console.warn(`resource ${id} already exists.`); // eslint-disable-line no-console
    }
    acc[id] = injectSubType(resource);
  }
};

export const getDataRange = (resourceSet, dateFormat = UI_DATE_FORMAT) => {
  const timestamps = Object.values(resourceSet).reduce((acc, cur) => {
    const date = cur.meta?.lastUpdated;
    return acc.concat(date ? parseISO(date) : []);
  }, [])
    .sort(compareAsc);

  return [
    format(timestamps[0], dateFormat),
    format(timestamps[timestamps.length - 1], dateFormat),
  ];
};

export const getRecordsTotal = (resourceSet) => Object.keys(resourceSet).length;

export const getPatientName = (patientResource) => {
  if (!patientResource) {
    return '';
  }
  const { given, family } = patientResource.name[0];
  return [given?.[0], family].join(' ');
};

export const getPatientGender = (patientResource) => patientResource?.gender;

// returns human-readable patient birth date
export const getPatientBirthDate = (patientResource) => {
  if (!patientResource) {
    return null;
  }
  const birthDate = parse(patientResource?.birthDate, 'yyyy-MM-dd', new Date());
  return format(birthDate, 'MMM d, Y');
};

export const getPatientAddresses = (patientResource) => patientResource?.address;

export const renderAddress = (address) => {
  if (!address) {
    return null;
  }
  // handle the first one for now
  const firstAddress = address[0];
  const buildup = [
    firstAddress.line.join('\n'),
    `${firstAddress.city}, ${firstAddress.state} ${firstAddress.postalCode}`,
    firstAddress.country,
  ];

  return buildup.join('\n');
};

// TODO: make it handle only years or months which is valid
// TODO: have it return months for babies
export const getPatientAge = (patient) => {
  if (!patient) {
    return null;
  }
  const birthDate = patient?.birthDate;
  const birthDuration = intervalToDuration(
    {
      start: parse(birthDate, 'yyyy-MM-dd', new Date()),
      end: new Date(),
    },
  );

  return formatDuration(birthDuration, birthDuration.years > 5 ? { format: ['years'] } : { format: ['years', 'months'] });
};
