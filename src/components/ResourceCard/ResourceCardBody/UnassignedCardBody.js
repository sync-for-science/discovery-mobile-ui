import React from 'react';

import { shape } from 'prop-types';
import CardBodyField from './CardBodyField';
import {
  getPatientAgeAtResourceDate,
  getReason,
  getOnsetDateTime,
  getAbatementDateTime,
  getOrderedBy,
  getAssertedDate,
  getStatus,
  getClinicalStatus,
  getVerficationStatus,
} from '../../../resources/fhirReader';
import CARD_BODY_LABEL from '../../../resources/cardBodyLabel';

const UnassignedCardBody = ({ resource, patientResource }) => {
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
        label={resourceType}
        value={subType}
        bold
      />
      <CardBodyField
        dependency={getStatus(resource)}
        label={CARD_BODY_LABEL.status}
        value={getStatus(resource)}
      />
    </>
  );
};

UnassignedCardBody.propTypes = {
  resource: shape({}).isRequired,
  patientResource: shape({}).isRequired,
};

export default UnassignedCardBody;
