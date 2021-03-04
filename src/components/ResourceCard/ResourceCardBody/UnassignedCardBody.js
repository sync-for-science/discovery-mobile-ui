import React from 'react';

import { shape } from 'prop-types';
import CardBodyField from './CardBodyField';
import {
  getPatientAgeAtResource,
  getStatus,
} from '../../../resources/fhirReader';
import CARD_BODY_LABEL from '../../../resources/cardBodyLabel';

const UnassignedCardBody = ({ resource, patientAgeAtResource }) => {
  const { type, subType } = resource;

  return (
    <>
      <CardBodyField
        label={CARD_BODY_LABEL.age}
        value={getPatientAgeAtResource(patientAgeAtResource)}
      />
      <CardBodyField
        label={type}
        value={subType}
        bold
      />
      <CardBodyField
        label={CARD_BODY_LABEL.status}
        value={getStatus(resource)}
      />
    </>
  );
};

UnassignedCardBody.propTypes = {
  resource: shape({}).isRequired,
  patientAgeAtResource: shape({}).isRequired,
};

export default UnassignedCardBody;
