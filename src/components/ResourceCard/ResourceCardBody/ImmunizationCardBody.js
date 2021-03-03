import React from 'react';

import { shape } from 'prop-types';
import CardBodyField from './CardBodyField';
import {
  getPatientAgeAtResourceDate,
  getPrimarySource,
  getStatus
} from '../../../resources/fhirReader';
import CARD_BODY_LABEL from '../../../resources/cardBodyLabel';

const ImmunizationCardBody = ({ resource, patientResource }) => {
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
        dependency={null}
        label={CARD_BODY_LABEL.given}
        value={null}
      />
      <CardBodyField
        dependency={null}
        label={CARD_BODY_LABEL.reported}
        value={null}
      />
      <CardBodyField
        dependency={getPrimarySource(resource)}
        label={CARD_BODY_LABEL.primarySource}
        value={getPrimarySource(resource)}
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
    </>
  );
};

ImmunizationCardBody.propTypes = {
  resource: shape({}).isRequired,
  patientResource: shape({}).isRequired,
};

export default ImmunizationCardBody;
