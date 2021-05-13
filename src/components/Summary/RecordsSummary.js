import React from 'react';
import {
  shape, arrayOf, instanceOf, string,
} from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {
  allValidRecordsSortedByDateSelector,
  allValidRecordsGroupedByTypeSelector,
  providersSelector,
} from '../../redux/selectors';
import RecordCount from './RecordCount';
import DataRow from './DataRow';
import { formatDate } from '../../resources/fhirReader';

const RecordsSummary = ({ recordsByType }) => (
  <View style={styles.root}>
    <RecordCount
      emphasizeProviders={false}
    />
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.resourceTypeContainer}>
        <DataRow
          isHeadingRow
          label=""
          count=""
          oldest="Oldest"
          latest="Latest"
        />
        {recordsByType.map(({ type, label, items }) => (
          <DataRow
            key={type}
            label={label}
            count={items.length}
            oldest={formatDate(items[0]?.timelineDate)}
            latest={formatDate(items[items.length - 1]?.timelineDate)}
          />
        ))}
      </View>
    </ScrollView>
  </View>
);

RecordsSummary.propTypes = {
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
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  scrollContainer: {
  },
  resourceTypeContainer: {
    alignItems: 'center',
    width: '100%',
  },
});
