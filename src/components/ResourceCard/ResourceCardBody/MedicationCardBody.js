import React from 'react';

import { shape } from 'prop-types';
import CardBodyField from './CardBodyField';
import {
  getPatientAgeAtResourceDate,
  getReason,
  getOnsetDateTime,
  getAbatementDateTime,
  getAssertedDate,
  getStatus,
} from '../../../resources/fhirReader';
import CARD_BODY_LABEL from '../../../resources/cardBodyLabel';

const MedicationCardBody = ({ resource, patientResource }) => {
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
  patientResource: shape({}).isRequired,
};

export default MedicationCardBody;
