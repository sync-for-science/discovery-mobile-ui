import {
  format, parse, formatDuration, intervalToDuration,
} from 'date-fns';

// date format used throughout the UI
const UI_DATE_FORMAT = 'MMM d, Y';
const UI_DATE_FORMAT_SHORT_YEAR = "MMM d, ''yy";
const UI_DATE_FORMAT_LONG = 'MMM d, y h:mm:ssaaa';
const UI_DATE_FORMAT_SHORT = 'MM/dd/y';

export const getPatientName = (patientResource: fhir4.Patient) : string => {
  const patientName = patientResource?.name?.[0];
  if (!patientName) {
    return '';
  }
  const { given, family } = patientName;
  return [given?.[0], family].join(' ');
};

export const formatPractitionerName = (practitionerResource: fhir4.Practitioner) : string => {
  const practitionerName = practitionerResource?.name?.[0];
  if (practitionerName) {
    const { prefix, given, family } = practitionerName;
    return [prefix?.[0], given?.[0], family].join(' ');
  }
  return '';
};

export const getPatientGender = (patientResource: fhir4.Patient) : string => patientResource?.gender || '';

// returns human-readable patient birth date
export const formatPatientBirthDate = (patientResource: fhir4.Patient) : string => {
  if (!patientResource?.birthDate) {
    return '';
  }
  const birthDate = parse(patientResource.birthDate, 'yyyy-MM-dd', new Date());
  return format(birthDate, UI_DATE_FORMAT);
};

export const getPatientAddresses = (patientResource: fhir4.Patient) : fhir4.Address[] | undefined => patientResource?.address;

export const formatAddress = (address: fhir4.Address[]) : string => {
  if (!address) {
    return '';
  }
  // handle the first one for now
  const firstAddress = address[0];
  const buildup = [
    firstAddress.line?.join('\n'),
    `${firstAddress.city}, ${firstAddress.state} ${firstAddress.postalCode}`,
    firstAddress.country,
  ];

  return buildup.join('\n');
};

// TODO: make it handle only years or months which is valid
// TODO: have it return months for babies
export const getPatientAge = (patient: fhir4.Patient) : string => {
  if (!patient?.birthDate) {
    return '';
  }
  const { birthDate } = patient;
  const birthDuration = intervalToDuration(
    {
      start: parse(birthDate, 'yyyy-MM-dd', new Date()),
      end: new Date(),
    },
  );

  if (birthDuration.years === undefined) {
    return '';
  }

  return formatDuration(birthDuration, birthDuration.years > 5 ? { format: ['years'] } : { format: ['years', 'months'] });
};

// export const getPatientAgeAtResource = (duration) => {
//   if (duration) {
//     return formatDuration(duration, { format: ['years', 'months'], delimiter: ', ' });
//   }
//   console.warn('No age found'); // eslint-disable-line no-console
//   return 'No Age Found';
// };

// TODO: Ensure these always receive a Date or empty value, and perform Date(...) casting in caller?
export const formatDate = (date: string | Date | undefined) : string => (date ? format(new Date(date), UI_DATE_FORMAT) : '');

export const formatDateShortYear = (date: string) : string => (date ? format(new Date(date), UI_DATE_FORMAT_SHORT_YEAR) : '');

export const formatDateTime = (date: string) : string => (date ? format(new Date(date), UI_DATE_FORMAT_LONG) : '');

export const formatDateShort = (date: string) : string => (date ? format(new Date(date), UI_DATE_FORMAT_SHORT) : '');

export const getResourceDate = (resource: s4s.Resource) : string => (
  resource.timelineDate ? formatDate(resource.timelineDate) : 'No Date Found'
);

const titleCase = (text: string | undefined) : string => (text ? text[0].toUpperCase() + text.substring(1).toLowerCase() : '');

// MedicationRequest, Procedure
export const getReason = (resource: fhir4.MedicationRequest | fhir4.Procedure) : string => resource.reasonCode?.[0]?.coding?.[0]?.display || '';

export const getOnsetDateTime = (resource: fhir4.Condition) : string => formatDate(resource.onsetDateTime);

export const getAbatementDateTime = (resource: fhir4.Condition) : string => formatDate(resource.abatementDateTime);

// only NutritionOrder has orderer?
export const getOrderedBy = (resource: fhir4.Resource) : string => titleCase(resource.orderer?.display);

// assertedDate is an extension?
//     http://www.hl7.org/FHIR/extension-condition-asserteddate.html
export const getAssertedDate = (resource: fhir4.Condition) : string => formatDate(resource.assertedDate);

export const getStatus = (resource: fhir4.Observation) : string => titleCase(resource.status);

export const getClinicalStatus = (resource: fhir4.Condition) : string => (
  titleCase(resource.clinicalStatus?.coding?.[0]?.code)
);

export const getVerficationStatus = (resource: fhir4.Condition) : string => (
  titleCase(resource.verificationStatus?.coding?.[0]?.code)
);

export const getEnding = (resource: fhir4.Encounter) : string => (resource.period?.end && formatDateTime(resource.period.end)) || '';

export const getClass = (resource: fhir4.Encounter) : string => resource.class?.code || '';

export const getPrimarySource = (resource: fhir4.Immunization) : string => {
  const displayPrimarySource = resource.primarySource ? 'yes' : 'no';
  return titleCase(displayPrimarySource);
};

export const getValueRatio = (resource: fhir4.Observation) : string => (
  resource.valueRatio ? `${resource.valueRatio?.numerator?.value} / ${resource.valueRatio?.denominator?.value}` : ''
);

export const getRefRangeLabel = (resource: fhir4.Observation) : string => resource.referenceRange?.[0]?.meaning?.coding?.[0]?.display || 'REFERENCE RANGE';

export const getRefRange = (resource: fhir4.Observation) : string => {
  if (resource.referenceRange) {
    const lowValue = resource.referenceRange?.[0]?.low?.value;
    const lowUnits = resource.referenceRange?.[0]?.low?.unit;
    const highValue = resource.referenceRange?.[0]?.high?.value;
    const highUnits = resource.referenceRange?.[0]?.high?.unit;

    if (lowValue !== undefined && lowUnits && highValue !== undefined && highUnits) {
      return `${lowValue + (lowUnits && lowUnits !== highUnits ? ` ${lowUnits}` : '')} - ${highValue}${highUnits ? ` ${highUnits}` : ''}`;
    }
    // TODO: remove this?
    //       "TS2339: Property 'text' does not exist on type 'ObservationReferenceRange[]'."
    return resource.referenceRange?.text;
  }
  return '';
};

export const getValueQuantity = (resource: fhir4.Observation) : string => (resource.valueQuantity ? `${Number(resource.valueQuantity.value).toFixed(2)} ${resource.valueQuantity.unit}` : '');

export const getBloodPressureData = (resource: fhir4.Observation) : Array<s4s.BloodPressureData> => {
  if (resource.component) {
    const bloodPressureData: Array<s4s.BloodPressureData> = [];
    resource.component.forEach((measurement: fhir4.ObservationComponent) => {
      bloodPressureData.push(
        {
          code: measurement.code.text,
          valueQuantity: `${Number(measurement.valueQuantity?.value).toFixed(2)} ${measurement.valueQuantity?.unit}`,
        },
      );
    });
    return bloodPressureData;
  }
  return [];
};
