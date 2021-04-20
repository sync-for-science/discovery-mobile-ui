import {
  format, parse, formatDuration, intervalToDuration,
} from 'date-fns';

// date format used throughout the UI
const UI_DATE_FORMAT = 'MMM d, Y';
const UI_DATE_FORMAT_LONG = 'MMM d, y h:mm:ssaaa';

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
  return format(birthDate, UI_DATE_FORMAT);
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

export const getPatientAgeAtResource = (duration) => {
  if (duration) {
    return formatDuration(duration, { format: ['years', 'months'], delimiter: ', ' });
  }
  console.warn('No age found'); // eslint-disable-line no-console
  return 'No Age Found';
};

export const getResourceDate = (resource) => (
  resource.timelineDate ? formatDate(resource.timelineDate) : 'No Date Found'
);

const formatDate = (date, includeTime = false) => {
  const dateFormat = includeTime ? UI_DATE_FORMAT_LONG : UI_DATE_FORMAT;
  return date ? format(new Date(date), dateFormat) : null;
};
const titleCase = (text) => (text ? text[0].toUpperCase() + text.substring(1).toLowerCase() : null);

export const getReason = (resource) => resource.reasonCode?.[0]?.coding?.[0]?.display;

export const getOnsetDateTime = (resource) => formatDate(resource.onsetDateTime);

export const getAbatementDateTime = (resource) => formatDate(resource.abatementDateTime);

export const getOrderedBy = (resource) => titleCase(resource.orderer?.display);

export const getAssertedDate = (resource) => formatDate(resource.assertedDate);

export const getStatus = (resource) => titleCase(resource.status);

export const getClinicalStatus = (resource) => (
  titleCase(resource.clinicalStatus?.coding?.[0]?.code)
);

export const getVerficationStatus = (resource) => (
  titleCase(resource.verificationStatus?.coding?.[0]?.code)
);

export const getEnding = (resource) => formatDate(resource.period?.end, true);

export const getClass = (resource) => resource.class?.code;

export const getPrimarySource = (resource) => {
  const displayPrimarySource = resource.primarySource ? 'yes' : 'no';
  return titleCase(displayPrimarySource);
};

export const getValueRatio = (resource) => (
  resource.valueRatio ? `${resource.valueRatio?.numerator?.value} / ${resource.valueRatio?.denominator?.value}` : null
);

export const getRefRangeLabel = (resource) => resource.referenceRange?.[0]?.meaning?.coding?.[0]?.display || 'REFERENCE RANGE';

export const getRefRange = (resource) => {
  if (resource.referenceRange) {
    const lowValue = resource.referenceRange?.[0]?.low?.value;
    const lowUnits = resource.referenceRange?.[0]?.low?.unit;
    const highValue = resource.referenceRange?.[0]?.high?.value;
    const highUnits = resource.referenceRange?.[0]?.high?.unit;

    return lowValue && lowUnits && highValue && highUnits
      ? `${lowValue + (lowUnits && lowUnits !== highUnits ? ` ${lowUnits}` : '')} - ${highValue}${highUnits ? ` ${highUnits}` : ''}`
      : resource.referenceRange?.text;
  }
  return null;
};

export const getValueQuantity = (resource) => (resource.valueQuantity ? `${+resource.valueQuantity.value.toFixed(2)} ${resource.valueQuantity.unit}` : null);

export const getBloodPressureData = (resource) => {
  if (resource.component) {
    const bloodPressureData = [];
    resource.component.forEach((measurement) => {
      bloodPressureData.push(
        {
          code: measurement.code.text,
          valueQuantity: `${+measurement.valueQuantity.value.toFixed(2)} ${measurement.valueQuantity.unit}`,
        },
      );
    });
    return bloodPressureData;
  }
  return null;
};
