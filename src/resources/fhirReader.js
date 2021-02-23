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

export const getDataRange = (resources) => {
  // scan through all resources
  // parse all lastUpdated
  // get lowest and then get highest
};

export const getPatientName = (patient) => {
  const nameData = patient?.resource?.name?.[0];
  const given = nameData.given?.[0];
  const { family } = nameData;
  return `${given} ${family}`;
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
