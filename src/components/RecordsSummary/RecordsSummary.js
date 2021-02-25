import React from 'react';
import { shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View,
} from 'react-native';

import {
  getResources,
  getPatient,
  getPatientGender,
  getPatientBirthDate,
  getPatientAge,
  getPatientAddresses,
  renderAddress,
  getResourceCount,
  getResourceType,
  getResourceCode,
} from '../../resources/fhirReader';
import Colors from '../../constants/Colors';
import mockBundle from '../../../assets/mock_data/bundle-blake-eichmann.json';
import { clearPatientData } from '../../features/patient/patientDataSlice';
import RESOURCE_TYPES from '../../resources/resourceTypes';

const ResourceTypeRow = ({ resource }) => {
  const resourceCount = getResourceCount(resource);
  if (!resourceCount > 0) {
    return null;
  }

  let resourceType = getResourceType(resource);
  if (resourceType === 'Observation') {
    resourceType = getResourceCode(resource);
  }

  return (
    <View style={styles.resourceTypeRow}>
      <Text>{RESOURCE_TYPES[resourceType]}</Text>
      <Text>{resourceCount}</Text>
    </View>
  );
};

ResourceTypeRow.propTypes = {
  resource: shape({}).isRequired,
};

const RecordsSummary = ({
  patientData,
}) => {
  const resources = patientData ? getResources(patientData) : getResources(mockBundle);

  return (
    <View style={styles.resourceTypeContainer}>
      {resources.map(
        (resource) => (
          <ResourceTypeRow
            key={`resourceTypeRow-${resource.resource.id}`}
            resource={resource}
          />
        ),
      )}
    </View>
  );
};

RecordsSummary.propTypes = {
  patientData: shape({}),
};

RecordsSummary.defaultProps = {
  patientData: null,
};

const mapStateToProps = (state) => ({
  patientData: state.patient.patientData,
});

const mapDispatchToProps = { clearPatientDataAction: clearPatientData };

export default connect(mapStateToProps, mapDispatchToProps)(RecordsSummary);

const styles = StyleSheet.create({
  resourceTypeContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
});
