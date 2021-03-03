import React from 'react';

import { shape } from 'prop-types';
import CardBodyField from './CardBodyField';
import {
  getPatientAgeAtResourceDate,
  getStatus,
} from '../../../resources/fhirReader';
import CARD_BODY_LABEL from '../../../resources/cardBodyLabel';

const LabResultCardBody = ({ resource, patientResource }) => {
  const { type, subType } = resource;

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
      {/* <CardBodyField
        label={CARD_BODY_LABEL.status}
        value={getValueRatio(resource)}
      /> */}
    </>
  );
};

LabResultCardBody.propTypes = {
  resource: shape({}).isRequired,
  patientResource: shape({}).isRequired,
};

export default LabResultCardBody;
