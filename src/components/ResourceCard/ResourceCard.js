import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { string, shape, func } from 'prop-types';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import GenericCardBody from './ResourceCardBody/GenericCardBody';
import MedicationCardBody from './ResourceCardBody/MedicationCardBody';
import EncounterCardBody from './ResourceCardBody/EncounterCardBody';
import ImmunizationCardBody from './ResourceCardBody/ImmunizationCardBody';
import UnassignedCardBody from './ResourceCardBody/UnassignedCardBody';
import LabResultCardBody from './ResourceCardBody/LabResultCardBody';
import VitalSignCardBody from './ResourceCardBody/VitalSignCardBody';
import BaseText from '../Generic/BaseText';
import BaseDivider from '../Generic/BaseDivider';
import { SINGULAR_RESOURCE_TYPES } from '../../resources/resourceTypes';
import {
  patientSelector,
  patientAgeAtResourcesSelector,
  lastAddedResourceIdSelector,
  collectionResourceIdsSelector,
} from '../../redux/selectors';
import { getResourceDate } from '../../resources/fhirReader';
import Colors from '../../constants/Colors';

const selectCardBody = (resource, patientAgeAtResource) => {
  switch (resource.type) {
    case 'Condition':
    case 'Procedure':
    case 'Document References': // legacy name from webUI, rename to correct resourceType
    case 'Meds Administration': // legacy name from webUI, rename to correct resourceType
    case 'Procedure Requests': // legacy name from webUI, rename to correct resourceType
      return <GenericCardBody resource={resource} patientAgeAtResource={patientAgeAtResource} />;
    case 'Meds Dispensed':
    case 'MedicationRequest':
      return <MedicationCardBody resource={resource} patientAgeAtResource={patientAgeAtResource} />;
    // case 'Benefits':
    //   return <BenefitCardBody fieldsData={fieldsData} />;
    // case 'Claims':
    //   return <ClaimCardBody fieldsData={fieldsData} />;
    case 'Encounter':
      return <EncounterCardBody resource={resource} patientAgeAtResource={patientAgeAtResource} />;
    case 'Immunization':
      return (
        <ImmunizationCardBody
          resource={resource}
          patientAgeAtResource={patientAgeAtResource}
        />
      );
    case 'laboratory':
      return <LabResultCardBody resource={resource} patientAgeAtResource={patientAgeAtResource} />;
    // case 'Exams':
    //   return <ExamCardBody fieldsData={fieldsData} />;
    // case 'Meds Statement':
    //   return <MedicationStatementCardBody fieldsData={fieldsData} />;
    // case 'Social History':
    //   return <SocialHistoryCardBody fieldsData={fieldsData} />;
    // case 'Other':
    //   return <UnimplementedCardBody fieldsData={fieldsData} />;
    case 'vital-signs':
      return <VitalSignCardBody resource={resource} patientAgeAtResource={patientAgeAtResource} />;
    default:
      console.log(`Unassigned CardBody rendered for resourceType: ${resource.resourceType}, resourceId: ${resource.id}`); // eslint-disable-line no-console
      return <UnassignedCardBody resource={resource} patientAgeAtResource={patientAgeAtResource} />;
  }
};

const ResourceCard = ({
  resourceId,
  resources,
  patientAgeAtResources,
  selectedCollectionId,
  addResourceToCollection,
  removeResourceToCollection,
  lastAddedResourceId,
  collectionResourceIds,
}) => {
  const resource = resources[resourceId];
  const resourceType = SINGULAR_RESOURCE_TYPES[resource?.type];
  const resourceDate = getResourceDate(resource);

  let displayButton = (
    <Button transparent onPress={() => addResourceToCollection(selectedCollectionId, resourceId)}>
      <BaseText style={{ textAlign: 'center' }} variant="button">Add To Detail Panel</BaseText>
    </Button>
  );
  let selectedIconName = 'square-outline';
  let selectedIconColor = Colors.lightgrey;
  if (collectionResourceIds[resourceId]) {
    selectedIconColor = Colors.lastSelected;
    displayButton = (
      <Button
        transparent
        onPress={() => removeResourceToCollection(selectedCollectionId, resourceId)}
      >
        <BaseText style={styles.removeButton} variant="button">Remove From Detail Panel</BaseText>
      </Button>
    );
    selectedIconName = 'checkbox-outline';
    if (lastAddedResourceId === resourceId) {
      selectedIconName = 'checkbox';
      selectedIconColor = Colors.lastSelected;
    }
  }

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <BaseText variant="header">{resourceType}</BaseText>
        <View style={styles.dateIconContainer}>
          <BaseText>{resourceDate}</BaseText>
          <View style={styles.iconContainer}>
            <Ionicons name={selectedIconName} size={24} color={selectedIconColor} />
          </View>
        </View>
      </View>
      <View style={styles.body}>
        {selectCardBody(resource, patientAgeAtResources[resourceId])}
      </View>
      <BaseDivider />
      <View style={styles.buttonContainer}>
        {displayButton}
      </View>
    </View>
  );
};

ResourceCard.propTypes = {
  resourceId: string.isRequired,
  resources: shape({}).isRequired,
  patientAgeAtResources: shape({}).isRequired,
  selectedCollectionId: string.isRequired,
  addResourceToCollection: func.isRequired,
  removeResourceToCollection: func.isRequired,
  lastAddedResourceId: string,
  collectionResourceIds: shape({}),
};

ResourceCard.defaultProps = {
  lastAddedResourceId: null,
  collectionResourceIds: {},
};

const mapStateToProps = (state) => ({
  resources: state.resources,
  patientResource: patientSelector(state),
  patientAgeAtResources: patientAgeAtResourcesSelector(state),
  lastAddedResourceId: lastAddedResourceIdSelector(state),
  collectionResourceIds: collectionResourceIdsSelector(state),
});

export default connect(mapStateToProps, null)(ResourceCard);

const styles = StyleSheet.create({
  root: {
    marginVertical: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: Colors.lightgrey,
    borderBottomColor: Colors.lightgrey,
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
  buttonContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  removeButton: {
    color: 'red',
  },
  iconContainer: {
    marginLeft: 10,
  },
  dateIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
