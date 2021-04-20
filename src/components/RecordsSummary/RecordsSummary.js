import React from 'react';
import {
  shape, arrayOf, instanceOf, string, number,
} from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { format } from 'date-fns';

import { allValidRecordsSortedByDateSelector, allValidRecordsGroupedByTypeSelector } from '../../redux/selectors';
import Colors from '../../constants/Colors';

const ResourceTypeRow = ({
  count, label, earliestDate, latestDate,
}) => (
  <View style={styles.resourceTypeRow}>
    <Text style={styles.resourceCount}>{count}</Text>
    <Text style={styles.resourceLabel}>{label}</Text>
    <Text style={styles.resourceDate}>{format(earliestDate, 'MMM d, Y')}</Text>
    <Text style={styles.resourceDate}>{format(latestDate, 'MMM d, Y')}</Text>
  </View>
);

ResourceTypeRow.propTypes = {
  count: number.isRequired,
  label: string.isRequired,
  earliestDate: instanceOf(Date).isRequired,
  latestDate: instanceOf(Date).isRequired,
};

const RecordsSummary = ({
  allRecordsSortedByDate, recordsByType,
}) => (
  <View style={styles.recordSummaryContainer}>
    <View style={styles.recordsHeader}>
      <Text style={styles.recordsHeaderText}>
        Records
      </Text>
      <Text style={styles.recordsHeaderTotal}>
        {`${allRecordsSortedByDate.length} Total`}
      </Text>
    </View>
    <View style={styles.resourceTypeContainer}>
      <View style={styles.resourceTypeRow}>
        <Text style={styles.resourceCount} />
        <Text style={styles.resourceLabel} />
        <Text style={[styles.resourceDate, styles.tableHeading]}>Oldest</Text>
        <Text style={[styles.resourceDate, styles.tableHeading]}>Latest</Text>
      </View>
      {recordsByType.map(({ type, label, items }) => (
        <ResourceTypeRow
          key={type}
          label={label}
          count={items.length}
          earliestDate={items[0].timelineDate}
          latestDate={items[items.length - 1].timelineDate}
        />
      ))}
    </View>
  </View>
);

RecordsSummary.propTypes = {
  allRecordsSortedByDate: arrayOf(shape({})).isRequired,
  recordsByType: arrayOf(shape({
    type: string.isRequired,
    label: string.isRequired,
    items: arrayOf(string.isRequired).isRequired,
  })).isRequired,
};

RecordsSummary.defaultProps = {
};

const mapStateToProps = (state) => ({
  allRecordsSortedByDate: allValidRecordsSortedByDateSelector(state),
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
  tableHeading: {
    color: Colors.secondary,
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  resourceCount: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    paddingRight: 10,
    flex: 1,
  },
  resourceLabel: {
    alignSelf: 'flex-start',
    flex: 4,
  },
  resourceDate: {
    alignSelf: 'flex-end',
    fontSize: 11,
    flex: 2,
  },
});
