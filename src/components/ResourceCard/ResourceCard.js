import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { string, shape } from 'prop-types';
import { connect } from 'react-redux';

import GenericCardBody from './ResourceCardBody/GenericCardBody';
import MedicationCardBody from './ResourceCardBody/MedicationCardBody';
import EncounterCardBody from './ResourceCardBody/EncounterCardBody';
import ImmunizationCardBody from './ResourceCardBody/ImmunizationCardBody';
import UnassignedCardBody from './ResourceCardBody/UnassignedCardBody';
import LabResultCardBody from './ResourceCardBody/LabResultCardBody';
import VitalSignCardBody from './ResourceCardBody/VitalSignCardBody';
import BaseText from '../Generic/BaseText';
import { SINGULAR_RESOURCE_TYPES } from '../../resources/resourceTypes';
import {
  patientSelector,
  patientAgeAtResourcesSelector,
} from '../../redux/selectors';
import { getResourceDate } from '../../resources/fhirReader';
import Colors from '../../constants/Colors';
import FocusedIcon from '../Icons/FocusedIcon';
import MarkedIcon from '../Icons/MarkedIcon';
import CollectionIcon from '../Icons/CollectionIcon';

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
  collectionId,
  index
}) => {
  const resource = resources[resourceId];
  const resourceType = SINGULAR_RESOURCE_TYPES[resource?.type];
  const resourceDate = getResourceDate(resource);
  const firstCardStyle = index === 0 ? styles.firstCard : {}

  return (
    <View style={[styles.root, firstCardStyle]}>
      <View style={styles.header}>
        <BaseText variant="header">{resourceType}</BaseText>
        <View style={styles.rightIconsContainer}>
          <BaseText>{resourceDate}</BaseText>
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
      </View>
      <View style={styles.body}>
        {selectCardBody(resource, patientAgeAtResources[resourceId])}
      </View>
    </View>
  );
};

ResourceCard.propTypes = {
  resourceId: string.isRequired,
  resources: shape({}).isRequired,
  patientAgeAtResources: shape({}).isRequired,
  collectionId: string.isRequired,
};

const mapStateToProps = (state) => ({
  resources: state.resources,
  patientResource: patientSelector(state),
  patientAgeAtResources: patientAgeAtResourcesSelector(state),
});

export default connect(mapStateToProps, null)(ResourceCard);

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: Colors.resourceCardBorder,
    borderBottomColor: Colors.resourceCardBorder,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  firstCard: {
    marginTop: 10
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
});
