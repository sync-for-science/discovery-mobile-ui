import { parse, formatDuration, intervalToDuration } from 'date-fns';
import RESOURCE_TYPES from './resourceTypes'

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

export const getPatientBirthDate = (patient) => {
  const fhirValue = patient?.resource?.birthDate;
  return fhirValue;
};

export const getPatientAge = (patient) => {
  const birthDate = getPatientBirthDate(patient);
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
  } else if (resource.resource.resourceType === 'Bundle') {
    return null
  }

  return resource.resource.resourceType;
};

export const getFormattedResourceType = (resource) => {
  return RESOURCE_TYPES[getResourceType(resource)]
}

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

export const getResourceText = (resource) => {
  const resourceType = getResourceType(resource)

  if (resourceType === "Immunization") {
    return resource.resource.vaccineCode.text
  } else if (resourceType === "MedicationRequest") {
    return resource.resource.medicationCodeableConcept.text
  } else if (resourceType === "CarePlan") {
    return "Care Plan"
  } else if (resource.resource.type) {
    return resource.resource.type?.[0]?.text
  } else if (resource.resource.code) {
    return resource.resource.code.text
  }
  return null
}