import {
  format, parse, parseISO, formatDuration, intervalToDuration, compareAsc,
} from 'date-fns';

// date format used throughout the UI
const UI_DATE_FORMAT = 'MMM d, Y';

export const getDataRange = (resourceSet, dateFormat = UI_DATE_FORMAT) => {
  const timestamps = Object.values(resourceSet).reduce((acc, cur) => {
    // TODO: this should consider the actual time the event happened,
    // instead of the last resource update date, for the resources that support this
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

export const getPatientAgeAtResourceDate = (resource, patientResource) => {
  const birthDate = patientResource?.birthDate;
  const resourceDate = format(resource.timelineDate, 'yyyy-MM-dd');
  const ageAtResourceDate = intervalToDuration({
    start: parse(birthDate, 'yyyy-MM-dd', new Date()),
    end: parse(resourceDate, 'yyyy-MM-dd', new Date()),
  });

  return formatDuration(ageAtResourceDate, { format: ['years', 'months'], delimiter: ', ' });
};

export const getResourceDate = (resource) => (
  resource.timelineDate ? formatDate(resource.timelineDate, true) : "No Date Found"
)

const formatDate = (date, includeTime = false) => {
  const dateFormat = includeTime ? 'MMM d, y h:mm:ssaaa' : 'MMM d, y'
  return date ? format(new Date(date), dateFormat) : null
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

export const getEnding = (resource) => formatDate(resource.period?.end, true)

export const getClass = (resource) => resource.class?.code

export const getPrimarySource = (resource) => {
  const displayPrimarySource = resource.primarySource ? "yes" : "no"
  return titleCase(displayPrimarySource)
}