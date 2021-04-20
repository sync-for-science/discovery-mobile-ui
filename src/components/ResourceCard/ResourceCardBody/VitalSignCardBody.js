import React from 'react';

import { shape } from 'prop-types';
import CardBodyField from './CardBodyField';
import {
  getStatus,
  getValueQuantity,
  getBloodPressureData,
} from '../../../resources/fhirReader';
import CARD_BODY_LABEL from '../../../resources/cardBodyLabel';

const VitalSignCardBody = ({ resource }) => {
  const { subType } = resource;

  let displayBloodPressureFields = null;
  const bloodPressureData = getBloodPressureData(resource);
  if (bloodPressureData) {
    displayBloodPressureFields = bloodPressureData.map((datum) => {
      const label = datum.code === 'Diastolic Blood Pressure' ? CARD_BODY_LABEL.diastolic : CARD_BODY_LABEL.systolic;
      return (
        <CardBodyField
          key={label}
          label={label}
          value={datum.valueQuantity}
        />
      );
    });
  }
  return (
    <>
      <CardBodyField
        label={CARD_BODY_LABEL.measure}
        value={subType}
        bold
      />
      <CardBodyField
        label={CARD_BODY_LABEL.valueQuantity}
        value={getValueQuantity(resource)}
      />
      {displayBloodPressureFields}
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
};

export default VitalSignCardBody;
