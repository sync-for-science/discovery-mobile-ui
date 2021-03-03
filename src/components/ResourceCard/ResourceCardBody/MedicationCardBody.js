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
        dependency={getReason(resource)}
        label={CARD_BODY_LABEL.reason}
        value={getReason(resource)}
      />
      <CardBodyField
        dependency={getOnsetDateTime(resource)}
        label={CARD_BODY_LABEL.onset}
        value={getOnsetDateTime(resource)}
      />
      <CardBodyField
        dependency={getAbatementDateTime(resource)}
        label={CARD_BODY_LABEL.abatement}
        value={getAbatementDateTime(resource)}
      />
      <CardBodyField
        dependency={getAssertedDate(resource)}
        label={CARD_BODY_LABEL.asserted}
        value={getAssertedDate(resource)}
      />
      <CardBodyField
        dependency={null}
        label={CARD_BODY_LABEL.provider}
        value={null}
      />
      <CardBodyField
        dependency={getStatus(resource)}
        label={CARD_BODY_LABEL.status}
        value={getStatus(resource)}
      />
      <CardBodyField
        dependency={null}
        label={CARD_BODY_LABEL.quantity}
        value={null}
      />
      <CardBodyField
        dependency={null}
        label={CARD_BODY_LABEL.supply}
        value={null}
      />
      <CardBodyField
        dependency={null}
        label={CARD_BODY_LABEL.dosage}
        value={null}
      />
      <CardBodyField
        dependency={null}
        label={CARD_BODY_LABEL.startingOn}
        value={null}
      />
      <CardBodyField
        dependency={null}
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
