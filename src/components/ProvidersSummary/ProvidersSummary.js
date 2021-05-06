import React from 'react';
import { connect } from 'react-redux';
import {
  arrayOf, instanceOf, shape, string,
} from 'prop-types';
import {
  StyleSheet, Text, View,
} from 'react-native';

import {
  allValidRecordsGroupedByTypeSelector,
  allValidRecordsSortedByDateSelector,
  providersSelector,
} from '../../redux/selectors';
import Colors from '../../constants/Colors';

const ProviderRow = ({ name }) => (
  <View style={styles.providerTypeRow}>
    <Text style={styles.providerName}>{name}</Text>
  </View>
);

ProviderRow.propTypes = {
  name: string.isRequired,
};

const ProvidersSummary = ({
  allRecordsSortedByDate, recordsByType, providers,
}) => (
  <View style={styles.root}>
    <View style={styles.header}>
      <Text style={styles.recordCount}>
        {`${allRecordsSortedByDate.length} Records with ${providers.length} Providers`}
      </Text>
    </View>
    <View style={styles.providerTypeContainer}>
      {providers.map(
        ({ name }) => (
          <ProviderRow
            key={name}
            name={name}
          />
        ),
      )}
    </View>
  </View>
);

ProvidersSummary.propTypes = {
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

ProvidersSummary.defaultProps = {
};

const mapStateToProps = (state) => ({
  allRecordsSortedByDate: allValidRecordsSortedByDateSelector(state),
  recordsByType: allValidRecordsGroupedByTypeSelector(state),
  providers: providersSelector(state),
});

export default connect(mapStateToProps, null)(ProvidersSummary);

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
  providerTypeContainer: {
    alignItems: 'center',
    width: '100%',
  },
  providerTypeRow: {
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
  providerName: {
    alignSelf: 'flex-start',
    flex: 6,
    textTransform: 'capitalize',
  },
  providerLatestDate: {
    alignSelf: 'flex-end',
    flex: 1,
  },
  providerLatestDateLabel: {
    color: Colors.secondary,
    fontSize: 10,
    alignSelf: 'flex-end',
    flex: 1,
    textTransform: 'uppercase',
  },
});
