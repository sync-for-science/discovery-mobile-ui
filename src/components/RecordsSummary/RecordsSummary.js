import React from 'react';
import { shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View,
} from 'react-native';

import {
  getRecordsTotal,
} from '../../resources/fhirReader';
import { patientSelector, supportedResourcesSelector } from '../../redux/selectors';
import Colors from '../../constants/Colors';
import { clearPatientData } from '../../features/patient/patientDataSlice';
import RESOURCE_TYPES from '../../resources/resourceTypes';

const ResourceTypeRow = ({ resource }) => {
  // resourceIdsGroupedByType
  const resourceCount = 100;
  if (!resourceCount > 0) {
    return null;
  }

  const resourceType = 'Blah';

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
  patientResource, resourceIdsGroupedByType, resources,
}) => {
  const recordsTotal = getRecordsTotal(resources);

  return (
    <View style={styles.recordSummaryContainer}>
      <View style={styles.recordsHeader}>
        <Text style={styles.recordsHeaderText}>
          Records
        </Text>
        <Text style={styles.recordsHeaderTotal}>
          {recordsTotal}
          {' '}
          total
        </Text>
      </View>
      <View style={styles.resourceTypeContainer}>
        {Object.entries(resourceIdsGroupedByType).map(
          ([resourceType, resourceIds]) => (
            <ResourceTypeRow
              key={resourceType}
              resourceType={resourceType}
              resourceIds={resourceIds}
              resources={resources}
            />
          ),
        )}
      </View>
    </View>
  );
};

RecordsSummary.propTypes = {
  resourceIdsGroupedByType: shape({}),
  resources: shape({}),
  patientResource: shape({}),
};

RecordsSummary.defaultProps = {
  resourceIdsGroupedByType: {},
  resources: null,
  patientResource: null,
};

const mapStateToProps = (state) => ({
  resources: state.resources,
  resourceIdsGroupedByType: supportedResourcesSelector(state),
  patientResource: patientSelector(state),
});

const mapDispatchToProps = { clearPatientDataAction: clearPatientData };

export default connect(mapStateToProps, mapDispatchToProps)(RecordsSummary);

const styles = StyleSheet.create({
  recordSummaryContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  recordsHeader: {
    padding: 5,
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
  },
  recordsHeaderText: {
    color: 'white',
    fontSize: 16,
    padding: 5,
  },
  recordsHeaderTotal: {
    color: 'white',
    fontSize: 12,
    padding: 9, // FIXME, not the right way to align
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
