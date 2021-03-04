import React from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';
import { string, shape } from 'prop-types';
import { Card, CardItem, Button } from 'native-base';
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
  collectionResourceIdsSelector 
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
  collectionResourceIds
}) => {
  const resource = resources[resourceId];
  const resourceType = SINGULAR_RESOURCE_TYPES[resource?.type];
  const resourceDate = getResourceDate(resource);

  let displayButton = (
    <Button transparent onPress={() => addResourceToCollection(selectedCollectionId, resourceId)}>
      <BaseText style={{textAlign: 'center'}} variant="button">Add To Detail Panel</BaseText>
    </Button>
  )
  let starIcon
  if (collectionResourceIds[resourceId]) {
    displayButton = (
      <Button transparent onPress={() => removeResourceToCollection(selectedCollectionId, resourceId)}>
        <BaseText style={{color: 'red'}} variant="button">Remove From Detail Panel</BaseText>
      </Button>
    )
    starIcon = (
        <View style={{marginRight: 10}}>
          <Ionicons name="checkbox-outline" size={24} color={Colors.lastSelected} />
        </View>
      )
    if (lastAddedResourceId === resourceId) {
      starIcon = (
        <View style={{marginRight: 10}}>
          <Ionicons name="checkbox" size={24} color={Colors.lastSelected} />
        </View>
      )
    }
  }

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {starIcon}
          <BaseText variant="header">{resourceType}</BaseText>
        </View>
        <BaseText>{resourceDate}</BaseText>
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
  // return (
  //   <Card style={{backgroundColor: 'red'}}>
  //     <CardItem style={styles.header}>
  //       <BaseText variant="header">{resourceType}</BaseText>
  //       <BaseText>{resourceDate}</BaseText>
  //     </CardItem>
  //     <CardItem>
  //       <View style={styles.cardBody}>
  //         {selectCardBody(resource, patientAgeAtResources[resourceId])}
  //       </View>
  //     </CardItem>
  //     <BaseDivider />
  //     <View style={styles.button}>
  //       {displayButton}
  //     </View>
  //   </Card>
  // );
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
  root: {
    marginVertical: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.lightgrey
  },
  rootSelected: {
    marginVertical: 10,
    backgroundColor: Colors.selected,
    borderWidth: 1,
    borderColor: Colors.lightgrey
  },
  rootLastSelected: {
    marginVertical: 10,
    backgroundColor: Colors.lastSelected,
    borderWidth: 1,
    borderColor: Colors.lightgrey
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 50,
  },
  body: {
    padding: 15,
  },
  buttonContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
// const styles = StyleSheet.create({
//   cardSelected: {
//     backgroundColor: 'blue',
//   },
//   header: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   button: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   cardBody: {
//     width: '100%',
//   },
// });
