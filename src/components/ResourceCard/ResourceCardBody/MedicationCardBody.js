import React from 'react';
import { shape } from 'prop-types';
import { connect } from 'react-redux';

import CardBodyField from './CardBodyField';
import {
  getReason,
  getOnsetDateTime,
  getAbatementDateTime,
  getAssertedDate,
  getStatus,
  formatPractitionerName,
} from '../../../resources/fhirReader';
import CARD_BODY_LABEL from '../../../resources/cardBodyLabel';
import { requesterSelector } from '../../../redux/selectors';

const MedicationCardBody = ({ resource, requester }) => {
  const { type, subType } = resource;

  return (
    <>
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
      <CardBodyField
        label={CARD_BODY_LABEL.requester}
        value={formatPractitionerName(requester)}
      />
    </>
  );
};

MedicationCardBody.propTypes = {
  resource: shape({}).isRequired,
  requester: shape({}),
};

MedicationCardBody.defaultProps = {
  requester: null,
};

const mapStateToProps = (state, ownProps) => ({
  requester: requesterSelector(state, ownProps),
});

export default connect(mapStateToProps, null)(MedicationCardBody);
