import React from 'react';

import { shape } from 'prop-types';
import CardBodyField from './CardBodyField';
import {
  getPatientAgeAtResource,
  getValueRatio,
  getRefRangeLabel,
  getRefRange,
  getStatus,
  getValueQuantity,
} from '../../../resources/fhirReader';
import CARD_BODY_LABEL from '../../../resources/cardBodyLabel';

const LabResultCardBody = ({ resource, patientAgeAtResource }) => {
  const { subType } = resource;

  return (
    <>
      <CardBodyField
        label={CARD_BODY_LABEL.age}
        value={getPatientAgeAtResource(patientAgeAtResource)}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.measure}
        value={subType}
        bold
      />
      <CardBodyField
        label={CARD_BODY_LABEL.valueRatio}
        value={getValueRatio(resource)}
      />
      <CardBodyField
        label={getRefRangeLabel(resource)}
        value={getRefRange(resource)}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.valueQuantity}
        value={getValueQuantity(resource)}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.provider}
        value={null}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.status}
        value={getStatus(resource)}
      />
      {/* add TimeSeries */}
    </>
  );
};

LabResultCardBody.propTypes = {
  resource: shape({}).isRequired,
  patientAgeAtResource: shape({}).isRequired,
};

export default LabResultCardBody;
