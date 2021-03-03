import React from 'react';
import {
  shape, string, arrayOf, number,
} from 'prop-types';
import { pick } from 'ramda';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View,
} from 'react-native';

import {
  getRecordsTotal,
  getDataRange,
} from '../../resources/fhirReader';
import { supportedResourcesSelector } from '../../redux/selectors';
import Colors from '../../constants/Colors';
import { clearPatientData } from '../../features/patient/patientDataSlice';
import RESOURCE_TYPES from '../../resources/resourceTypes';

const ResourceTypeRow = ({
  resourceType, total, resources, subtypes,
}) => {
  const consolidatedIds = Object.values(subtypes)
    .reduce((acc, cur) => {
      acc.push(...cur);
      return acc;
    }, []);
  const inflatedObjects = pick(consolidatedIds, resources);
  const [, latestDate] = getDataRange(inflatedObjects, 'Y');
  return (
    <View style={styles.resourceTypeRow}>
      <Text style={styles.resourceName}>{RESOURCE_TYPES[resourceType]}</Text>
      <Text style={styles.resourceCount}>{total}</Text>
      <Text style={styles.resourceLatestDate}>{latestDate}</Text>
    </View>
  );
};

ResourceTypeRow.propTypes = {
  resourceType: string.isRequired,
  resources: shape({}).isRequired,
  subtypes: shape({}).isRequired,
  total: number.isRequired,
};

const RecordsSummary = ({
  resources, sortedResourceTypes,
}) => {
  const recordsTotal = getRecordsTotal(resources);

  return (
    <View style={styles.recordSummaryContainer}>
      <View style={styles.recordsHeader}>
        <Text style={styles.recordsHeaderText}>
          Records
        </Text>
        <Text style={styles.recordsHeaderTotal}>
          {`${recordsTotal} Total`}
        </Text>
      </View>
      <View style={styles.resourceTypeContainer}>
        <View style={styles.resourceTypeRow}>
          <Text style={styles.resourceName} />
          <Text style={styles.resourceCountLabel}>count</Text>
          <Text style={styles.resourceLatestDateLabel}>newest</Text>
        </View>
        {sortedResourceTypes.map(({ resourceType, totalCount, subtypes }) => (
          <ResourceTypeRow
            key={resourceType}
            resourceType={resourceType}
            total={totalCount}
            subtypes={subtypes}
            resources={resources}
          />
        ))}
      </View>
    </View>
  );
};

RecordsSummary.propTypes = {
  resources: shape({}),
  sortedResourceTypes: arrayOf(shape({})).isRequired,
};

RecordsSummary.defaultProps = {
  resources: null,
};

const mapStateToProps = (state) => ({
  resources: state.resources,
  sortedResourceTypes: supportedResourcesSelector(state),
});

const mapDispatchToProps = { clearPatientDataAction: clearPatientData };

export default connect(mapStateToProps, mapDispatchToProps)(RecordsSummary);

const styles = StyleSheet.create({
  recordSummaryContainer: {
    marginTop: 10,
    marginBottom: 20,
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
    padding: 9,
  },
  resourceTypeContainer: {
    alignItems: 'center',
    width: '100%',
  },
  resourceTypeRow: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,

    padding: 10,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,

  },
  resourceName: {
    alignSelf: 'flex-start',
    flex: 6,
  },
  resourceCount: {
    alignSelf: 'flex-end',
    textAlign: 'right',
    paddingRight: 10,
    flex: 1,
  },
  resourceLatestDate: {
    alignSelf: 'flex-end',
    flex: 1,
  },
  resourceCountLabel: {
    color: Colors.secondary,
    fontSize: 10,
    alignSelf: 'flex-end',
    flex: 1,
    textTransform: 'uppercase',
  },
  resourceLatestDateLabel: {
    color: Colors.secondary,
    fontSize: 10,
    alignSelf: 'flex-end',
    flex: 1,
    textTransform: 'uppercase',
  },
});
