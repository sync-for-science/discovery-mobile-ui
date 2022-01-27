import {
  format, parse, formatDuration, intervalToDuration,
} from 'date-fns';
import {
  Patient,
  Practitioner,
  Observation,
  Address,
  Condition,
  NutritionOrder,
  AllergyIntolerance,
  Immunization,
  MedicationRequest,
  Encounter,
} from 'fhir/r4';
import { TimelineResource, BloodPressureData } from '../../types/s4s';

// date format used throughout the UI
const UI_DATE_FORMAT = 'MMM d, Y';
const UI_DATE_FORMAT_SHORT_YEAR = "MMM d, ''yy";
const UI_DATE_FORMAT_LONG = 'MMM d, y h:mm:ssaaa';
const UI_DATE_FORMAT_SHORT = 'MM/dd/y';

export const getPatientName = (patientResource: Patient) => {
  if (!patientResource) {
    return '';
  }
  const { given, family } = patientResource.name?.[0] || {};
  return [given?.[0], family].join(' ');
};

export const formatPractitionerName = (practitionerResource: Practitioner) => {
  if (practitionerResource.name?.[0]) {
    const { prefix, given, family } = practitionerResource.name[0];
    return [prefix?.[0], given?.[0], family].join(' ');
  }
  return '';
};

export const getPatientGender = (patientResource: Patient) => patientResource?.gender;

// returns human-readable patient birthdate
export const formatPatientBirthDate = (patientResource: Patient) => {
  if (!patientResource.birthDate) {
    return null;
  }
  const birthDate = parse(patientResource.birthDate, 'yyyy-MM-dd', new Date());
  return format(birthDate, UI_DATE_FORMAT);
};

export const getPatientAddresses = (patientResource: Patient) => patientResource.address;

export const formatAddress = (address: Address[]) => {
  // handle the first one for now
  const firstAddress = address[0];
  if (!firstAddress) {
    return null;
  }
  const buildup = [
    (firstAddress.line || []).join('\n'),
    `${firstAddress.city}, ${firstAddress.state} ${firstAddress.postalCode}`,
    firstAddress.country,
  ];

  return buildup.join('\n');
};

// TODO: make it handle only years or months which is valid
// TODO: have it return months for babies
export const getPatientAge = (patient: Patient) => {
  const { birthDate } = patient;
  if (!birthDate) {
    return null;
  }
  const birthDuration = intervalToDuration(
    {
      start: parse(birthDate, 'yyyy-MM-dd', new Date()),
      end: new Date(),
    },
  );
  if (!birthDuration.years) {
    return null;
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

export const getResourceDate = (resource: TimelineResource) => (
  resource.timelineDate ? formatDate(resource.timelineDate) : 'No Date Found'
);

// TODO: Ensure these always receive a Date or empty value, and perform Date(...) casting in caller?
export const formatDate = (date: string | Date | void) => {
  if (!date) {
    return '';
  }
  const d = (date instanceof Date) ? date : new Date(date);
  return format(d, UI_DATE_FORMAT);
};

export const formatDateShortYear = (date: string) => (date ? format(new Date(date), UI_DATE_FORMAT_SHORT_YEAR) : '');

export const formatDateTime = (date: string) => (date ? format(new Date(date), UI_DATE_FORMAT_LONG) : '');

export const formatDateShort = (date: string) => (date ? format(new Date(date), UI_DATE_FORMAT_SHORT) : '');

const titleCase = (text: string | void) => (text ? text[0].toUpperCase() + text.substring(1).toLowerCase() : '');

export const getReason = (resource: MedicationRequest) => resource.reasonCode?.[0].coding?.[0].display; // eslint-disable-line max-len

// Called from MedicationCardBody, which is passed a MedicationRequest
// However, MedicationRequest has no onsetDateTime or abatementDateTime:
export const getOnsetDateTime = (resource: Condition) => formatDate(resource.onsetDateTime);
export const getAbatementDateTime = (resource: Condition) => formatDate(resource.abatementDateTime);

// Called from GenericCardBody.js, however, only NutritionOrder has an orderer field:
export const getOrderedBy = (resource: NutritionOrder) => titleCase(resource.orderer?.display);

// assertedDate is an extension for Condition:
// http://www.hl7.org/FHIR/extension-condition-asserteddate.html
// @ts-ignore
export const getAssertedDate = (resource: Condition) => formatDate(resource.assertedDate);

export const getStatus = (resource: Observation) => titleCase(resource.status);

// Called from GenericCardBody.js
export const getClinicalStatus = (resource: AllergyIntolerance | Condition) => (
  titleCase(resource.clinicalStatus?.coding?.[0]?.code)
);

// Called from GenericCardBody.js
export const getVerficationStatus = (resource: AllergyIntolerance | Condition) => (
  titleCase(resource.verificationStatus?.coding?.[0]?.code)
);

// TODO: getEnding also called for Observation and MedicationRequest, which have no period:
export const getEnding = (resource: Encounter) => resource.period?.end && formatDateTime(resource.period.end); // eslint-disable-line max-len

export const getClass = (resource: Encounter) => resource.class.code;

export const getPrimarySource = (resource: Immunization) => {
  const displayPrimarySource = resource.primarySource ? 'yes' : 'no';
  return titleCase(displayPrimarySource);
};

export const getValueRatio = (resource: Observation) => (
  resource.valueRatio ? `${resource.valueRatio.numerator?.value} / ${resource.valueRatio.denominator?.value}` : null
);

// TODO: fhir4 Observation does not have referenceRange[n].meaning:
// @ts-ignore
export const getRefRangeLabel = (resource: Observation) => resource.referenceRange?.[0]?.meaning?.coding?.[0]?.display || 'REFERENCE RANGE';

export const getRefRange = (resource: Observation) => {
  if (resource.referenceRange) {
    const lowValue = resource.referenceRange?.[0]?.low?.value;
    const lowUnits = resource.referenceRange?.[0]?.low?.unit;
    const highValue = resource.referenceRange?.[0]?.high?.value;
    const highUnits = resource.referenceRange?.[0]?.high?.unit;

    return lowValue && lowUnits && highValue && highUnits
      ? `${lowValue + (lowUnits && lowUnits !== highUnits ? ` ${lowUnits}` : '')} - ${highValue}${highUnits ? ` ${highUnits}` : ''}`
      : resource.referenceRange?.[0].text;
  }
  return null;
};

export const getValueQuantity = (resource: Observation) => {
  if (resource.valueQuantity?.value === undefined) {
    return null;
  }
  return `${resource.valueQuantity.value.toFixed(2)} ${resource.valueQuantity.unit}`;
};

export const getBloodPressureData = (resource: Observation) => {
  if (resource.component) {
    const bloodPressureData: BloodPressureData[] = [];
    resource.component.forEach((measurement) => {
      if (measurement.valueQuantity?.value !== undefined) {
        bloodPressureData.push(
          {
            code: measurement.code.text,
            valueQuantity: `${measurement.valueQuantity.value.toFixed(2)} ${measurement.valueQuantity.unit}`,
          },
        );
      }
    });
    return bloodPressureData;
  }
  return null;
};
