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
import TextStyles from '../../constants/TextStyles';

const RecordCount = ({
  emphasizeProviders, allRecordsSortedByDate, providers, dateRange,
}) => {
  const { minimumDate, maximumDate } = dateRange;
  const formattedDateRange = !(minimumDate && maximumDate) ? '' : `from ${formatDate(minimumDate)} to ${formatDate(maximumDate)}`;
  const pluralizedRecords = allRecordsSortedByDate.length > 1 ? 'Records' : 'Record';
  const pluralizedProviders = providers.length > 1 ? 'Providers' : 'Provider';

  return (
    <View style={styles.root}>
      <Text style={styles.recordCount}>
        {!emphasizeProviders && `${allRecordsSortedByDate.length} ${pluralizedRecords} with ${providers.length} ${pluralizedProviders}`}
        {emphasizeProviders && `${providers.length} ${pluralizedProviders} from ${allRecordsSortedByDate.length} ${pluralizedRecords}`}
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

const { body1 } = TextStyles;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    margin: 6,
    marginTop: 24,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.primary,
  },
  recordCount: {
    ...body1,
  },
  dateRange: {
    ...body1,
  },
});
