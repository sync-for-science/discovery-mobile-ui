import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { string, shape } from 'prop-types';
import { Card, CardItem, Button } from 'native-base';
import { connect } from 'react-redux';

import GenericCardBody from './ResourceCardBody/GenericCardBody';
import MedicationCardBody from './ResourceCardBody/MedicationCardBody';
import EncounterCardBody from './ResourceCardBody/EncounterCardBody'
import BaseText from '../Generic/BaseText';
import BaseDivider from '../Generic/BaseDivider';
import { patientSelector } from '../../redux/selectors';
import RESOURCE_TYPES from '../../resources/resourceTypes';
import { getResourceDate } from '../../resources/fhirReader';

const selectCardBody = (resource, patientResource) => {
  switch (resource.resourceType) {
    case 'Condition':
    case 'Procedure':
    case 'Document References': // legacy name from webUI, rename to correct resourceType
    case 'Meds Administration': // legacy name from webUI, rename to correct resourceType
    case 'Procedure Requests': // legacy name from webUI, rename to correct resourceType
      return <GenericCardBody resource={resource} patientResource={patientResource} />;
    case 'Meds Dispensed':
    case 'MedicationRequest':
      return <MedicationCardBody resource={resource} patientResource={patientResource} />;
    // case 'Benefits':
    //   return <BenefitCardBody fieldsData={fieldsData} />;
    // case 'Claims':
    //   return <ClaimCardBody fieldsData={fieldsData} />;
    case 'Encounter':
      return <EncounterCardBody resource={resource} patientResource={patientResource} />;
    // case 'Immunizations':
    //   return <ImmunizationCardBody fieldsData={fieldsData} />;
    // case 'Lab Results':
    //   return <LabResultCardBody fieldsData={fieldsData} />;
    // case 'Exams':
    //   return <ExamCardBody fieldsData={fieldsData} />;
    // case 'Meds Statement':
    //   return <MedicationStatementCardBody fieldsData={fieldsData} />;
    // case 'Social History':
    //   return <SocialHistoryCardBody fieldsData={fieldsData} />;
    // case 'Other':
    //   return <UnimplementedCardBody fieldsData={fieldsData} />;
    // case 'Vital Signs':
    //   return <VitalSignCardBody fieldsData={fieldsData} />;
    default:
      return (<View><Text>Card Body Not Implemented Yet</Text></View>);
  }
};

const ResourceCard = ({ resourceId, resources, patientResource }) => {
  const resource = resources[resourceId];
  const resourceType = RESOURCE_TYPES[resource?.resourceType];
  const resourceDate = getResourceDate(resource);
  return (
    <Card>
      <CardItem style={styles.header}>
        <BaseText variant="header">{resourceType}</BaseText>
        <BaseText>{resourceDate}</BaseText>
      </CardItem>
      <CardItem>
        <View style={styles.cardBody}>
          {selectCardBody(resource, patientResource)}
        </View>
      </CardItem>
      <BaseDivider />
      <View style={styles.button}>
        <Button transparent>
          <BaseText variant="button">Add To Collection</BaseText>
        </Button>
      </View>
    </Card>
  );
};

ResourceCard.propTypes = {
  resourceId: string.isRequired,
  resources: shape({}).isRequired,
  patientResource: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  resources: state.resources,
  patientResource: patientSelector(state),
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
