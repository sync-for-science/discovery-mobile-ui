import React from 'react';

import { shape } from 'prop-types';
import CardBodyField from './CardBodyField';
import {
  getEnding,
  getClass,
  getStatus,
} from '../../../resources/fhirReader';
import CARD_BODY_LABEL from '../../../resources/cardBodyLabel';

const EncounterCardBody = ({ resource }) => {
  const { type, subType } = resource;

  return (
    <>
      <CardBodyField
        label={CARD_BODY_LABEL[type]}
        value={subType}
        bold
      />
      <CardBodyField
        label={CARD_BODY_LABEL.ending}
        value={getEnding(resource)}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.class}
        value={getClass(resource)}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.status}
        value={getStatus(resource)}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.provider}
        value={null}
      />
    </>
  );
};

EncounterCardBody.propTypes = {
  resource: shape({}).isRequired,
};

export default EncounterCardBody;
