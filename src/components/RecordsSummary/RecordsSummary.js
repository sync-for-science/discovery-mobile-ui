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
  allValidRecordsSortedByDateSelector,
  allValidRecordsGroupedByTypeSelector,
  providersSelector,
} from '../../redux/selectors';
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
  allRecordsSortedByDate, recordsByType, providers,
}) => (
  <View style={styles.root}>
    <View style={styles.header}>
      <Text style={styles.recordCount}>
        {`${providers.length} Providers with ${allRecordsSortedByDate.length} Records`}
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
    items: arrayOf(shape({
      id: string.isRequired,
      type: string.isRequired,
      subType: string.isRequired,
      timelineDate: instanceOf(Date).isRequired,
    })).isRequired,
  })).isRequired,
  providers: arrayOf(shape({
    name: string.isRequired,
  })).isRequired,
};

RecordsSummary.defaultProps = {
};

const mapStateToProps = (state) => ({
  allRecordsSortedByDate: allValidRecordsSortedByDateSelector(state),
  recordsByType: allValidRecordsGroupedByTypeSelector(state),
  providers: providersSelector(state),
});

export default connect(mapStateToProps, null)(RecordsSummary);

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
  },
  header: {
    margin: 6,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.lightgrey,
  },
  recordCount: {
    fontSize: 12,
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
