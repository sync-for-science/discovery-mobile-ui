import React from 'react';
import {
  shape, arrayOf, instanceOf, string, number,
} from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { format } from 'date-fns';

import {
  getRecordsTotal,
} from '../../resources/fhirReader';
import { allValidRecordsGroupedByTypeSelector } from '../../redux/selectors';
import Colors from '../../constants/Colors';

const ResourceTypeRow = ({
  total, label, earliestDate, latestDate,
}) => (
  <View style={styles.resourceTypeRow}>
    <Text style={styles.resourceCount}>{total}</Text>
    <Text style={styles.resourceName}>{label}</Text>
    <Text style={styles.resourceLatestDate}>{format(earliestDate, 'Y')}</Text>
    <Text style={styles.resourceLatestDate}>{format(latestDate, 'Y')}</Text>
  </View>
);

ResourceTypeRow.propTypes = {
  label: string.isRequired,
  total: number.isRequired,
  earliestDate: instanceOf(Date).isRequired,
  latestDate: instanceOf(Date).isRequired,
};

const RecordsSummary = ({
  resources, recordsByType,
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
          <Text style={styles.resourceCountLabel}>count</Text>
          <Text style={styles.resourceName} />
          <Text style={styles.resourceLatestDateLabel}>Oldest</Text>
          <Text style={styles.resourceLatestDateLabel}>Latest</Text>
        </View>
        {recordsByType.map(({ type, label, items }) => (
          <ResourceTypeRow
            key={type}
            label={label}
            total={items.length}
            earliestDate={items[0].timelineDate}
            latestDate={items[items.length - 1].timelineDate}
          />
        ))}
      </View>
    </View>
  );
};

RecordsSummary.propTypes = {
  resources: shape({}),
  recordsByType: arrayOf(shape({
    type: string.isRequired,
    label: string.isRequired,
    items: arrayOf(string.isRequired).isRequired,
  })).isRequired,
};

RecordsSummary.defaultProps = {
  resources: null,
};

const mapStateToProps = (state) => ({
  resources: state.resources,
  recordsByType: allValidRecordsGroupedByTypeSelector(state),
});

export default connect(mapStateToProps, null)(RecordsSummary);

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
