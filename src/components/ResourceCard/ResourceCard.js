import React from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';
import { string, shape } from 'prop-types';
import { Card, CardItem, Button } from 'native-base';
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
  lastAddedResourceIdSelector, 
  collectionResourceIdsSelector 
} from '../../redux/selectors';
import { getResourceDate } from '../../resources/fhirReader';

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
  collectionResourceIds
}) => {
  console.log('collectionResourceIds', collectionResourceIds)
  const resource = resources[resourceId];
  const resourceType = SINGULAR_RESOURCE_TYPES[resource?.type];
  const resourceDate = getResourceDate(resource);
  let sampleText
  if (collectionResourceIds[resourceId]) {
    sampleText = "I was selected!"
    if (lastAddedResourceId === resourceId) {
      sampleText = "I was selected last!"
    }
  }
  console.log('sampleText', sampleText)
  return (
    <Card>
      <Text>{sampleText}</Text>
      <CardItem style={styles.header}>
        <BaseText variant="header">{resourceType}</BaseText>
        <BaseText>{resourceDate}</BaseText>
      </CardItem>
      <CardItem>
        <View style={styles.cardBody}>
          {selectCardBody(resource, patientAgeAtResources[resourceId])}
        </View>
      </CardItem>
      <BaseDivider />
      <View style={styles.button}>
        <Button transparent onPress={() => addResourceToCollection(selectedCollectionId, resourceId)}>
          <BaseText variant="button">Add To Collection</BaseText>
        </Button>
      </View>
    </Card>
  );
};

ResourceCard.propTypes = {
  resourceId: string.isRequired,
  resources: shape({}).isRequired,
  patientAgeAtResources: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  resources: state.resources,
  patientResource: patientSelector(state),
  patientAgeAtResources: patientAgeAtResourcesSelector(state),
  lastAddedResourceId: lastAddedResourceIdSelector(state),
  collectionResourceIds: collectionResourceIdsSelector(state)
});

export default connect(mapStateToProps, null)(ResourceCard);

const styles = StyleSheet.create({
  cardSelected: {
    backgroundColor: 'blue',
  },
  header: {
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardBody: {
    width: '100%',
  },
});
