import React from 'react';

import { shape } from 'prop-types';
import CardBodyField from './CardBodyField';
import {
  getPrimarySource,
  getStatus,
} from '../../../resources/fhirReader';
import CARD_BODY_LABEL from '../../../resources/cardBodyLabel';

const ImmunizationCardBody = ({ resource }) => {
  const { type, subType } = resource;

  return (
    <>
      <CardBodyField
        label={CARD_BODY_LABEL[type]}
        value={subType}
        bold
      />
      <CardBodyField
        label={CARD_BODY_LABEL.given}
        value={null}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.reported}
        value={null}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.primarySource}
        value={getPrimarySource(resource)}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.provider}
        value={null}
      />
      <CardBodyField
        label={CARD_BODY_LABEL.status}
        value={getStatus(resource)}
      />
    </>
  );
};

ImmunizationCardBody.propTypes = {
  resource: shape({}).isRequired,
};

export default ImmunizationCardBody;
