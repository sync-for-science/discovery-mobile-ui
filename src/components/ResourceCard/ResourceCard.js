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
import ImmunizationCardBody from './ResourceCardBody/ImmunizationCardBody'
import UnassignedCardBody from './ResourceCardBody/UnassignedCardBody'
import LabResultCardBody from './ResourceCardBody/LabResultCardBody'
import VitalSignCardBody from './ResourceCardBody/VitalSignCardBody'
import BaseText from '../Generic/BaseText';
import BaseDivider from '../Generic/BaseDivider';
import { patientSelector } from '../../redux/selectors';
import RESOURCE_TYPES from '../../resources/resourceTypes';
import { getResourceDate } from '../../resources/fhirReader';

const selectCardBody = (resource, patientResource) => {
  switch (resource.type) {
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
    case 'Immunization':
      return <ImmunizationCardBody resource={resource} patientResource={patientResource} />;
    case 'laboratory':
      return <LabResultCardBody resource={resource} patientResource={patientResource} />;
    // case 'Exams':
    //   return <ExamCardBody fieldsData={fieldsData} />;
    // case 'Meds Statement':
    //   return <MedicationStatementCardBody fieldsData={fieldsData} />;
    // case 'Social History':
    //   return <SocialHistoryCardBody fieldsData={fieldsData} />;
    // case 'Other':
    //   return <UnimplementedCardBody fieldsData={fieldsData} />;
    case 'vital-signs':
      return <VitalSignCardBody resource={resource} patientResource={patientResource} />;
    default:
      console.log(`Unassigned CardBody rendered for resourceType: ${resource.resourceType}, resourceId: ${resource.id}`) // eslint-disable-line no-console
      return <UnassignedCardBody resource={resource} patientResource={patientResource}/>;
  }
};

const ResourceCard = ({ resourceId, resources, patientResource }) => {
  const resource = resources[resourceId];
  const resourceType = RESOURCE_TYPES[resource?.type];
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
