import React from 'react';

import { shape } from 'prop-types';
import CardBodyField from './CardBodyField';
import {
  getPatientAgeAtResourceDate,
  getEnding,
  getClass,
  getStatus,
} from '../../../resources/fhirReader';
import CARD_BODY_LABEL from '../../../resources/cardBodyLabel';

const EncounterCardBody = ({ resource, patientResource }) => {
  const { resourceType } = resource;
  const { subType } = resource;

  return (
    <>
      <CardBodyField
        dependency={getPatientAgeAtResourceDate(resource, patientResource)}
        label={CARD_BODY_LABEL.age}
        value={getPatientAgeAtResourceDate(resource, patientResource)}
      />
      <CardBodyField
        dependency={subType}
        label={CARD_BODY_LABEL[resourceType]}
        value={subType}
        bold
      />
      <CardBodyField
        dependency={getEnding(resource)}
        label={CARD_BODY_LABEL.ending}
        value={getEnding(resource)}
      />
      <CardBodyField
        dependency={getClass(resource)}
        label={CARD_BODY_LABEL.class}
        value={getClass(resource)}
      />
      <CardBodyField
        dependency={getStatus(resource)}
        label={CARD_BODY_LABEL.status}
        value={getStatus(resource)}
      />
      <CardBodyField
        dependency={null}
        label={CARD_BODY_LABEL.provider}
        value={null}
      />
    </>
  );
};

EncounterCardBody.propTypes = {
  resource: shape({}).isRequired,
  patientResource: shape({}).isRequired,
};

export default EncounterCardBody;
