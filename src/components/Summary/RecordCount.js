import React from 'react';
import {
  shape, arrayOf, instanceOf, string, bool,
} from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View,
} from 'react-native';

import {
  allValidRecordsSortedByDateSelector,
  providersSelector,
  dateRangeForAllRecordsSelector,
} from '../../redux/selectors';
import Colors from '../../constants/Colors';
import { formatDate } from '../../resources/fhirReader';

const RecordCount = ({
  emphasizeProviders, allRecordsSortedByDate, providers, dateRange,
}) => {
  const { minimumDate, maximumDate } = dateRange;
  const formattedDateRange = !(minimumDate && maximumDate) ? '' : `from ${formatDate(minimumDate)} to ${formatDate(maximumDate)}`;

  return (
    <View style={styles.root}>
      <Text style={styles.recordCount}>
        {!emphasizeProviders && `${allRecordsSortedByDate.length} Records with ${providers.length} Providers`}
        {emphasizeProviders && `${providers.length} Providers from ${allRecordsSortedByDate.length} Records`}
      </Text>
      <Text style={styles.dateRange}>
        {formattedDateRange}
      </Text>
    </View>
  );
};

RecordCount.propTypes = {
  emphasizeProviders: bool.isRequired,
  allRecordsSortedByDate: arrayOf(shape({})).isRequired,
  providers: arrayOf(shape({
    name: string.isRequired,
  })).isRequired,
  dateRange: shape({
    minimumDate: instanceOf(Date),
    maximumDate: instanceOf(Date),
  }).isRequired,
};

RecordCount.defaultProps = {
};

const mapStateToProps = (state) => ({
  allRecordsSortedByDate: allValidRecordsSortedByDateSelector(state),
  providers: providersSelector(state),
  dateRange: dateRangeForAllRecordsSelector(state),
});

export default connect(mapStateToProps, null)(RecordCount);

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    margin: 6,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.lightgrey,
  },
  recordCount: {
    fontSize: 16,
  },
  dateRange: {
    fontSize: 16,
  },
});
