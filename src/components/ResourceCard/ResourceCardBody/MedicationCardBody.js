import React from 'react';

import { shape } from 'prop-types';
import CardBodyField from './CardBodyField';
import {
  getPatientAgeAtResource,
  getReason,
  getOnsetDateTime,
  getAbatementDateTime,
  getAssertedDate,
  getStatus,
} from '../../../resources/fhirReader';
import CARD_BODY_LABEL from '../../../resources/cardBodyLabel';

const MedicationCardBody = ({ resource, patientAgeAtResource }) => {
  const { type, subType } = resource;

  return (
    <>
      <CardBodyField
        label={CARD_BODY_LABEL.age}
        value={getPatientAgeAtResource(patientAgeAtResource)}
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
        label={CARD_BODY_LABEL.quantity}
        value={null}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.supply}
        value={null}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.dosage}
        value={null}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.startingOn}
        value={null}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.refill}
        value={null}
      />
    </>
  );
};

MedicationCardBody.propTypes = {
  resource: shape({}).isRequired,
  patientAgeAtResource: shape({}).isRequired,
};

export default MedicationCardBody;
