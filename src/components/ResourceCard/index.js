import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import {
  arrayOf, string, shape, number, bool, func,
} from 'prop-types';
import { connect } from 'react-redux';

import { resourceByIdSelector, relatedPractitionersSelector, relatedProviderSelector } from '../../redux/selectors';
import { formatPractitionerName } from '../../resources/fhirReader';
import Colors from '../../constants/Colors';
import ResourceCardNotes from '../ResourceCardNotes/ResourceCardNotes';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardBodyField from './ResourceCardBody/CardBodyField';
import CARD_BODY_LABEL from '../../resources/cardBodyLabel';

const ResourceCard = ({
  resourceId,
  resource,
  collectionId,
  index,
  fromDetailsPanel,
  fromNotesScreen,
  relatedPractitioners,
  relatedProvider,
  handleEditNote,
  editNoteId,
}) => {
  const firstCardStyle = index === 0 ? styles.firstCard : {};

  return (
    <View style={[styles.root, firstCardStyle]}>
      <View style={styles.header}>
        <CardHeader
          resourceId={resourceId}
          resource={resource}
          collectionId={collectionId}
          fromDetailsPanel={fromDetailsPanel}
          fromNotesScreen={fromNotesScreen}
        />
      </View>
      <View style={[styles.body, fromNotesScreen ? {} : styles.bottomBorder]}>
        <CardBody
          resource={resource}
        />
        {
          relatedProvider && (
            <CardBodyField
              label={CARD_BODY_LABEL.provider}
              value={relatedProvider?.name}
            />
          )
        }
        {
          relatedPractitioners.map((practitioner) => (
            <CardBodyField
              key={practitioner.id}
              label={CARD_BODY_LABEL.practitioner}
              value={formatPractitionerName(practitioner)}
            />
          ))
        }
      </View>
      <ResourceCardNotes
        fromNotesScreen={fromNotesScreen}
        resourceId={resourceId}
        handleEditNote={handleEditNote}
        editNoteId={editNoteId}
      />
    </View>
  );
};

ResourceCard.propTypes = {
  resourceId: string.isRequired,
  resource: shape({}).isRequired,
  relatedProvider: shape({}),
  relatedPractitioners: arrayOf(shape({})).isRequired,
  collectionId: string,
  index: number,
  fromDetailsPanel: bool,
  fromNotesScreen: bool,
  handleEditNote: func,
  editNoteId: string,
};

ResourceCard.defaultProps = {
  collectionId: null,
  relatedProvider: null,
  index: null,
  fromDetailsPanel: false,
  fromNotesScreen: false,
  handleEditNote: undefined,
  editNoteId: null,
};

const mapStateToProps = (state, ownProps) => ({
  resource: resourceByIdSelector(state, ownProps),
  relatedProvider: relatedProviderSelector(state, ownProps),
  relatedPractitioners: relatedPractitionersSelector(state, ownProps),
});

export default connect(mapStateToProps, null)(ResourceCard);

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  firstCard: {
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
  },
  body: {
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgrey,
  },
});
