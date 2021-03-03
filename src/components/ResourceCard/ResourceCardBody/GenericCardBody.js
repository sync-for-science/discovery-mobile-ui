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

const GenericCardBody = ({ resource, patientResource }) => {
  const { type, subType } = resource;

  return (
    <>
      <CardBodyField
        label={CARD_BODY_LABEL.age}
        value={getPatientAgeAtResourceDate(resource, patientResource)}
      />
      <CardBodyField
        label={CARD_BODY_LABEL[type]}
        value={subType}
        bold
      />
      <CardBodyField
        label={CARD_BODY_LABEL.reason}
        value={getReason(resource)}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.onset}
        value={getOnsetDateTime(resource)}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.abatement}
        value={getAbatementDateTime(resource)}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.orderedBy}
        value={getOrderedBy(resource)}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.asserted}
        value={getAssertedDate(resource)}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.provider}
        value={null}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.status}
        value={getStatus(resource)}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.clinicalStatus}
        value={getClinicalStatus(resource)}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.verificationStatus}
        value={getVerficationStatus(resource)}
      />
    </>
  );
};

GenericCardBody.propTypes = {
  resource: shape({}).isRequired,
  patientResource: shape({}).isRequired,
};

export default GenericCardBody;
