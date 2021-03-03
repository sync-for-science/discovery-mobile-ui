import React from 'react';

import { shape } from 'prop-types';
import CardBodyField from './CardBodyField';
import {
  getPatientAgeAtResourceDate,
  getValueRatio,
  getRefRangeLabel,
  getRefRange,
  getStatus,
  getValueQuantity
} from '../../../resources/fhirReader';
import CARD_BODY_LABEL from '../../../resources/cardBodyLabel';

const VitalSignCardBody = ({ resource, patientResource }) => {
  const { subType } = resource;
  if (subType === 'Blood Pressure') {
    console.log('vital sings', resource.id)
  }

  return (
    <>
      <CardBodyField
        label={CARD_BODY_LABEL.age}
        value={getPatientAgeAtResourceDate(resource, patientResource)}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.measure}
        value={subType}
        bold
      />
      <CardBodyField
        label={CARD_BODY_LABEL.valueQuantity}
        value={getValueQuantity(resource)}
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

VitalSignCardBody.propTypes = {
  resource: shape({}).isRequired,
  patientResource: shape({}).isRequired,
};

export default VitalSignCardBody;
