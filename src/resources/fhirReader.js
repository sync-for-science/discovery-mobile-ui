import {
  format, parse, formatDuration, intervalToDuration,
} from 'date-fns';

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
      if (status !== '200 OK') {
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
    acc[id] = resource;
  }
};

export const getResources = (response) => {
  const flatResources = [];
  response.entry.forEach((entry) => {
    if (getResourceType(entry) === 'Observation') {
      const labResultsBundle = createResourceTypeBundle(entry, 'laboratory');
      flatResources.push(labResultsBundle);

      const vitalSignsBundle = createResourceTypeBundle(entry, 'vital-signs');
      flatResources.push(vitalSignsBundle);

      return;
    }
    flatResources.push(entry);
  });
  return flatResources;
};

export const getPatient = (resources) => resources.find((resource) => resource.resource.resourceType === 'Patient');

export const getPatientName = (patient) => {
  const nameData = patient?.resource?.name?.[0];
  const given = nameData.given?.[0];
  const { family } = nameData;
  return `${given} ${family}`;
};

export const getPatientGender = (patient) => patient?.resource?.gender;

// returns human-readable patient birth date
export const getPatientBirthDate = (patient) => {
  const birthDate = parse(patient?.resource?.birthDate, 'yyyy-MM-dd', new Date());
  return format(birthDate, 'MMM d, Y');
};

export const getPatientAddresses = (patient) => patient?.resource?.address;

export const renderAddress = (address) => {
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
  const birthDate = patient?.resource?.birthDate;
  const birthDuration = intervalToDuration(
    {
      start: parse(birthDate, 'yyyy-MM-dd', new Date()),
      end: new Date(),
    },
  );

  return formatDuration(birthDuration, birthDuration.years > 5 ? { format: ['years'] } : { format: ['years', 'months'] });
};

export const getResourceType = (resource) => {
  if (getResourceCount(resource) > 0) {
    return getBundleResourceType(resource);
  }
  return resource.resource.resourceType;
};

export const getBundleResourceType = (resource) => (
  resource.resource.entry?.[0]?.resource?.resourceType
);

export const getResourceCount = (resource) => {
  if (resource.resource?.total > 0) {
    return resource.resource?.total;
  }
  return null;
};

export const getResourcesByCode = (resource, code) => resource.resource.entry.filter(
  (entry) => entry.resource.category[0].coding[0].code === code,
);

export const createResourceTypeBundle = (resource, code) => {
  const entries = getResourcesByCode(resource, code);

  return {
    resource: {
      resourceType: 'Bundle',
      id: `${resource.resource.id}-${code}`,
      total: entries.length,
      entry: entries,
    },
  };
};

export const getResourceCode = (resource) => (
  resource.resource.entry[0].resource.category[0].coding[0].code
);
