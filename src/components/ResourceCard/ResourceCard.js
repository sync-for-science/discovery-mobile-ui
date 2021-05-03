import React from 'react';
import {
  StyleSheet, View, TouchableOpacity,
} from 'react-native';
import {
  string, shape, number, bool,
} from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { useNavigation } from '@react-navigation/native';

import GenericCardBody from './ResourceCardBody/GenericCardBody';
import MedicationCardBody from './ResourceCardBody/MedicationCardBody';
import EncounterCardBody from './ResourceCardBody/EncounterCardBody';
import ImmunizationCardBody from './ResourceCardBody/ImmunizationCardBody';
import UnassignedCardBody from './ResourceCardBody/UnassignedCardBody';
import LabResultCardBody from './ResourceCardBody/LabResultCardBody';
import VitalSignCardBody from './ResourceCardBody/VitalSignCardBody';
import BaseText from '../Generic/BaseText';
import { resourceByIdSelector } from '../../redux/selectors';
import { getResourceDate } from '../../resources/fhirReader';
import FocusedIcon from '../Icons/FocusedIcon';
import MarkedIcon from '../Icons/MarkedIcon';
import CollectionIcon from '../Icons/CollectionIcon';
import { SINGULAR_RESOURCE_TYPES } from '../../constants/resource-types';
import Colors from '../../constants/Colors';

const selectCardBody = (resource) => {
  switch (resource.type) {
    case 'Condition':
    case 'Procedure':
    case 'Document References': // legacy name from webUI, rename to correct resourceType
    case 'Meds Administration': // legacy name from webUI, rename to correct resourceType
    case 'Procedure Requests': // legacy name from webUI, rename to correct resourceType
      return <GenericCardBody resource={resource} />;
    case 'Meds Dispensed':
    case 'MedicationRequest':
      return <MedicationCardBody resource={resource} />;
    // case 'Benefits':
    //   return <BenefitCardBody fieldsData={fieldsData} />;
    // case 'Claims':
    //   return <ClaimCardBody fieldsData={fieldsData} />;
    case 'Encounter':
      return (
        <EncounterCardBody
          resource={resource}
        />
      );
    case 'Immunization':
      return (
        <ImmunizationCardBody
          resource={resource}
        />
      );
    case 'laboratory':
      return <LabResultCardBody resource={resource} />;
    // case 'Exams':
    //   return <ExamCardBody fieldsData={fieldsData} />;
    // case 'Meds Statement':
    //   return <MedicationStatementCardBody fieldsData={fieldsData} />;
    // case 'Social History':
    //   return <SocialHistoryCardBody fieldsData={fieldsData} />;
    // case 'Other':
    //   return <UnimplementedCardBody fieldsData={fieldsData} />;
    case 'vital-signs':
      return <VitalSignCardBody resource={resource} />;
    default:
      console.log(`Unassigned CardBody rendered for resourceType: ${resource.resourceType}, resourceId: ${resource.id}`); // eslint-disable-line no-console
      return <UnassignedCardBody resource={resource} />;
  }
};

const CardHeader = ({
  resourceId, resource, collectionId, fromDetailsPanel,
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
  collectionId: string.isRequired,
  fromDetailsPanel: bool,
};

CardHeader.defaultProps = {
  fromDetailsPanel: false,
};

const ResourceCard = ({
  resourceId,
  resource,
  collectionId,
  index,
  fromDetailsPanel,
}) => {
  const firstCardStyle = index === 0 ? styles.firstCard : {};
  const navigation = useNavigation();

  return (
    <View style={[styles.root, firstCardStyle]}>
      <View style={styles.header}>
        <CardHeader
          resourceId={resourceId}
          resource={resource}
          collectionId={collectionId}
          fromDetailsPanel={fromDetailsPanel}
        />
      </View>
      <View style={styles.body}>
        {selectCardBody(resource)}
      </View>
      <TouchableOpacity style={styles.addNoteButton} onPress={() => navigation.navigate('Notes', { resource })}>
        <FontAwesome name="sticky-note-o" size={20} color={Colors.darkgrey} />
        <BaseText variant="title" style={{ color: Colors.darkgrey, marginLeft: 10 }}>Add Note</BaseText>
      </TouchableOpacity>
    </View>
  );
};

ResourceCard.propTypes = {
  resourceId: string.isRequired,
  resource: shape({}).isRequired,
  collectionId: string.isRequired,
  index: number.isRequired,
  fromDetailsPanel: bool,
};

ResourceCard.defaultProps = {
  fromDetailsPanel: false,
};

const mapStateToProps = (state, ownProps) => ({
  resource: resourceByIdSelector(state, ownProps),
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
  addNoteButton: {
    marginHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.lightgrey,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
