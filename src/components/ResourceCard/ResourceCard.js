import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import {
  arrayOf, string, shape, number, bool, func,
} from 'prop-types';
import { connect } from 'react-redux';

import BaseText from '../Generic/BaseText';
import { resourceByIdSelector, relatedPractitionersSelector, relatedProviderSelector } from '../../redux/selectors';
import { formatPractitionerName, getResourceDate } from '../../resources/fhirReader';
import FocusedIcon from '../Icons/FocusedIcon';
import MarkedIcon from '../Icons/MarkedIcon';
import CollectionIcon from '../Icons/CollectionIcon';
import { SINGULAR_RESOURCE_TYPES } from '../../constants/resource-types';
import Colors from '../../constants/Colors';
import ResourceCardNotes from '../ResourceCardNotes/ResourceCardNotes';
import CardBody from './CardBody';
import CardBodyField from './ResourceCardBody/CardBodyField';
import CARD_BODY_LABEL from '../../resources/cardBodyLabel';

const CardHeader = ({
  resourceId, resource, collectionId, fromDetailsPanel, fromNotesScreen,
}) => {
  const resourceDate = getResourceDate(resource);
  const displayType = SINGULAR_RESOURCE_TYPES[resource.type];

  if (fromDetailsPanel) {
    return (
      <>
        <BaseText style={styles.typeLabel}>{displayType}</BaseText>
        <View style={styles.rightIconsContainer}>
          <BaseText style={styles.resourceDate}>{resourceDate}</BaseText>
          <CollectionIcon
            showCount={false}
            collectionId={collectionId}
            resourceIds={[resourceId]}
          />
        </View>
      </>
    );
  }

  if (fromNotesScreen) {
    return <BaseText style={styles.resourceDate}>{resourceDate}</BaseText>;
  }

  return (
    <>
      <BaseText>{resourceDate}</BaseText>
      <View style={styles.rightIconsContainer}>
        <FocusedIcon
          subType={resource.subType}
          resourceIds={[resourceId]}
          isAccordion={false}
        />
        <MarkedIcon
          subType={resource.subType}
          resourceIds={[resourceId]}
          isAccordion={false}
        />
        <CollectionIcon
          showCount={false}
          collectionId={collectionId}
          resourceIds={[resourceId]}
        />
      </View>
    </>
  );
};

CardHeader.propTypes = {
  resourceId: string.isRequired,
  resource: shape({}).isRequired,
  collectionId: string,
  fromDetailsPanel: bool,
  fromNotesScreen: bool,
};

CardHeader.defaultProps = {
  fromDetailsPanel: false,
  fromNotesScreen: false,
  collectionId: null,
};

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
      <View style={styles.body}>
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
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgrey,
  },
  iconContainer: {
    marginLeft: 10,
  },
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resourceDate: {
    marginRight: 10,
  },
  typeLabel: {
    textTransform: 'uppercase',
  },
});
