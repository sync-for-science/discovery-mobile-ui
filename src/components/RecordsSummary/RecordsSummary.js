import React from 'react';
import { shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View,
} from 'react-native';

import {
  getResources,
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
    <View style={styles.recordSummaryContainer}>
      <View style={styles.panelHeader}>
        <Text style={styles.panelText}>
          Demographics
        </Text>
      </View>
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
  recordSummaryContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  panelHeader: {
    padding: 5,
    backgroundColor: Colors.secondary,
  },
  panelText: {
    color: 'white',
    fontSize: 16,
    padding: 5,
  },
  resourceTypeContainer: {
    alignItems: 'center',
    width: '100%',
  },
  resourceTypeRow: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5,

    padding: 10,
    backgroundColor: 'white',
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
  },
});
