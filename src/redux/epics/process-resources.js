// flattenResources() executes once per/resource, as paginated FHIR requests resolve.
const RESOURCES_WITHOUT_SUBTYPES = ['Patient', 'Organization', 'Practitioner'];
const RESOURCES_WITHOUT_DATES = ['Patient', 'Organization', 'Practitioner'];
const KNOWN_UNSUPPORTED_OBSERVATIONS = ['survey']; // procedure ?

const getType = (resource) => {
  const { resourceType } = resource;
  if (resourceType === 'Observation') {
    const { code } = resource.category[0].coding[0];
    switch (code) {
      case 'laboratory':
      case 'vital-signs':
        return code;
      default: {
        if (!KNOWN_UNSUPPORTED_OBSERVATIONS.includes(code)) {
          console.info(`Unsupported code type for Observation ${resource.id}: `, code); // eslint-disable-line no-console
        }
        return 'UNSUPPORTED_OBSERVATION';
      }
    }
  }
  return resourceType; // could be one of: PLURAL_RESOURCE_TYPES, PATIENT, or something unsupported
};

const getSubType = (resource) => {
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
      subType = resource.medicationReference?.display || resource.medicationCodeableConcept?.text;
      break;
    case 'CarePlan':
      subType = resource.category?.[0]?.text;
      break;
    default:
      if (!RESOURCES_WITHOUT_SUBTYPES.includes(resource.resourceType)) {
        console.warn(`No subType found for resource: ${resource.resourceType}, resourceId: ${resource.id}`); // eslint-disable-line no-console
      }
      subType = 'Other';
      break;
  }

  return subType;
};

const getTimelineDate = (resource) => {
  if (resource.effectiveDateTime) {
    // Observations
    return new Date(resource.effectiveDateTime);
  } if (resource.occurrenceDateTime) {
    // Immunization
    return new Date(resource.occurrenceDateTime);
  } if (resource.period?.start) {
    // CarePlan, Encounter
    return new Date(resource.period.start);
  } if (resource.onsetDateTime) {
    // Condition
    return new Date(resource.onsetDateTime);
  } if (resource.performedPeriod?.start) {
    // Procedure
    return new Date(resource.performedPeriod.start);
  } if (resource.authoredOn) {
    // MedicationRequest
    return new Date(resource.authoredOn);
  }
  if (!RESOURCES_WITHOUT_DATES.includes(resource.resourceType)) {
    console.warn(`No date found for resourceType: ${resource.resourceType}, resourceId: ${resource.id}`); // eslint-disable-line no-console
  }
  return null;
};

const STATUSES_OK = ['200 OK', '201 Created'];
const MAX_DEPTH = 4;

const flattenResources = (result, resource, depth = 0) => {
  if (depth > MAX_DEPTH) {
    return;
  }
  const { id, resourceType } = resource;
  if (resourceType === 'Bundle') {
    if (!resource.entry) {
      if (!(resource.type === 'searchset' && resource.total === 0)) {
        // ^ e.g.: CarePlan, Claim, and ExplanationOfBenefit "searchsets" often have 0 results
        console.warn(`No resource.entry -- resource: ${JSON.stringify(resource, null, 2)}.`); // eslint-disable-line no-console
      }
      return;
    }
    resource.entry.forEach((entry) => {
      const status = entry?.response?.status;
      if (!STATUSES_OK.includes(status)) {
        // Epic responses do not have this field?
        // eslint-disable-next-line no-console
        // console.error(`response.status not OK -- status: ${status}, id: ${id}`);
      }
      if (resource.contained && entry.resource.id) {
        result.context.set(entry.resource.id, resource);
      }
      flattenResources(result, entry.resource, depth + 1);
    });
  } else {
    if (!id) {
      console.warn(`No id -- resource: ${JSON.stringify(resource, null, 2)}.`); // eslint-disable-line no-console
      return;
    }
    if (result[id]) {
      console.warn(`resource ${id} already exists.`); // eslint-disable-line no-console
    }
    result.resources[id] = { // eslint-disable-line no-param-reassign
      ...resource,
      // TODO: namespace these custom fields? ...or create a Map resources <==> custom fields?
      type: getType(resource),
      subType: getSubType(resource),
      timelineDate: getTimelineDate(resource),
    };
  }
};

export default flattenResources;
