import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { string, shape, func } from 'prop-types';
import { Button } from 'native-base';
import { connect } from 'react-redux';

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
  collectionResourceIdsSelector,
  markedResourcesSelector,
} from '../../redux/selectors';
import { getResourceDate } from '../../resources/fhirReader';
import Colors from '../../constants/Colors';
import CountIcon from '../Icons/CountIcon';
import MarkedIcon from '../Icons/MarkedIcon';
import { actionTypes } from '../../redux/epics';

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
  removeResourceFromCollection,
  collectionResourceIds,
  updateMarkedResources,
  markedResources,
}) => {
  const resource = resources[resourceId];
  const resourceType = SINGULAR_RESOURCE_TYPES[resource?.type];
  const resourceDate = getResourceDate(resource);

  let displayButton = (
    <Button transparent onPress={() => addResourceToCollection(selectedCollectionId, resourceId)}>
      <BaseText style={{ textAlign: 'center' }} variant="button">Add To Details Panel</BaseText>
    </Button>
  );
  if (collectionResourceIds[resourceId]) {
    displayButton = (
      <Button
        transparent
        onPress={() => removeResourceFromCollection(selectedCollectionId, resourceId)}
      >
        <BaseText style={styles.removeButton} variant="button">Remove From Details Panel</BaseText>
      </Button>
    );
  }

  const handleMarkedClick = () => {
    updateMarkedResources({
      [resourceId]: !markedResources.marked[resourceId],
    });
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <BaseText variant="header">{resourceType}</BaseText>
        <View style={styles.dateIconContainer}>
          <BaseText>{resourceDate}</BaseText>
          <MarkedIcon
            onClick={handleMarkedClick}
            actionDep={!!markedResources.marked[resourceId]}
            marginRight
            marginLeft
          />
          <CountIcon
            shape="square"
            color={Colors.lastSelected}
            action1={() => addResourceToCollection(selectedCollectionId, resourceId)}
            action2={() => removeResourceFromCollection(selectedCollectionId, resourceId)}
            actionDep={collectionResourceIds[resourceId]}
          />
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
  removeResourceFromCollection: func.isRequired,
  collectionResourceIds: shape({}),
  updateMarkedResources: func.isRequired,
  markedResources: shape({
    marked: shape({}).isRequired,
    lastMarked: shape({}).isRequired,
  }).isRequired,
};

ResourceCard.defaultProps = {
  collectionResourceIds: {},
};

const mapStateToProps = (state) => ({
  resources: state.resources,
  patientResource: patientSelector(state),
  patientAgeAtResources: patientAgeAtResourcesSelector(state),
  collectionResourceIds: collectionResourceIdsSelector(state),
  markedResources: markedResourcesSelector(state),
});

const mapDispatchToProps = {
  updateMarkedResources: (resourceIdsMap) => ({
    type: actionTypes.UPDATE_MARKED_RESOURCES,
    payload: resourceIdsMap,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ResourceCard));

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
