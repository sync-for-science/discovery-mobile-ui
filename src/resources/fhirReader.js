import {
  format, parse, parseISO, formatDuration, intervalToDuration, compareAsc,
} from 'date-fns';

// date format used throughout the UI
const UI_DATE_FORMAT = 'MMM d, Y';

export const getDataRange = (resourceSet, dateFormat = UI_DATE_FORMAT) => {
  const timestamps = Object.values(resourceSet).reduce((acc, { timelineDate }) => {
    // TODO: this should consider the actual time the event happened,
    // instead of the last resource update date, for the resources that support this
    if (timelineDate) {
      return acc.concat(parseISO(timelineDate));
    }
    return acc;
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
