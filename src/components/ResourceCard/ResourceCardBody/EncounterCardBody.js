import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape } from 'prop-types';

import CardBodyField from './CardBodyField';
import {
  getEnding,
  getClass,
  getStatus,
  formatPractitionerName,
} from '../../../resources/fhirReader';
import CARD_BODY_LABEL from '../../../resources/cardBodyLabel';
import { participantsSelector, serviceProviderSelector } from '../../../redux/selectors';

const EncounterCardBody = ({ resource, serviceProvider, participants }) => {
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
        value={serviceProvider?.name}
      />
      {
        participants.map((participant) => (
          <CardBodyField
            key={participant.id}
            label={CARD_BODY_LABEL.practitioner}
            value={formatPractitionerName(participant)}
          />
        ))
      }
    </>
  );
};

EncounterCardBody.propTypes = {
  resource: shape({}).isRequired,
  serviceProvider: shape({}).isRequired,
  participants: arrayOf(shape({})).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  serviceProvider: serviceProviderSelector(state, ownProps),
  participants: participantsSelector(state, ownProps),
});

export default connect(mapStateToProps, null)(EncounterCardBody);
