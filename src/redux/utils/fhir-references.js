import {
  compose, filter, hasPath, map, path, propOr,
} from 'ramda';

export const referenceMap = {
  // each key is a "type" (but not the referenced _resource_ type, eg: "Practitioner")
  // each value operates on a FHIR resource, and returns an Array of reference Objects
  serviceProvider: compose(
    (result) => (result ? [result] : []),
    path(['serviceProvider']),
  ),
  requester: compose(
    (result) => (result ? [result] : []),
    path(['requester']), // may or may not be practitioner?
  ),
  participant: compose(
    map(path(['individual'])), // may or may not be practitioner?
    filter(hasPath(['individual', 'reference'])),
    propOr([], 'participant'),
  ),
};

export const encounters = {
  encounter: compose(
    (result) => (result ? [result] : []),
    path(['encounter']),
  ),
};
