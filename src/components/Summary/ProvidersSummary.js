import React from 'react';
import { connect } from 'react-redux';
import {
  arrayOf, shape, string,
} from 'prop-types';
import {
  StyleSheet, Text, View,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { format } from 'date-fns';
import { providersSelector, allResourcesByProviderSelector } from '../../redux/selectors';
import RecordCount from './RecordCount';
import Colors from '../../constants/Colors';

const formatDate = (date) => {
  if (date) {
    return format(date, 'MMM d, Y');
  }
  return '';
};

const ProviderRow = ({ label, items }) => {
  const oldest = items[0];
  const latest = items.slice(-1)[0];
  return (
    <View style={styles.resourceTypeRow}>
      <Text style={styles.resourceCount}>{items.length}</Text>
      <Text style={styles.resourceLabel}>{label}</Text>
      <Text style={styles.resourceDate}>{formatDate(oldest.timelineDate)}</Text>
      <Text style={styles.resourceDate}>{formatDate(latest.timelineDate)}</Text>
    </View>
  );
};

ProviderRow.propTypes = {
  label: string.isRequired,
  items: arrayOf(shape({})).isRequired,
};

const ProvidersSummary = ({ providers, allResourcesByProvider }) => (
  <View style={styles.root}>
    <RecordCount
      emphasizeProviders
    />
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.resourceTypeContainer}>
        <View style={styles.resourceTypeRow}>
          <Text style={styles.resourceCount} />
          <Text style={styles.resourceLabel} />
          <Text style={[styles.resourceDate, styles.tableHeading]}>Oldest</Text>
          <Text style={[styles.resourceDate, styles.tableHeading]}>Latest</Text>
        </View>
        {providers.map(({ id, name }) => (
          <ProviderRow
            key={name}
            label={name}
            items={allResourcesByProvider[id]}
          />
        ))}
      </View>
    </ScrollView>
  </View>
);

ProvidersSummary.propTypes = {
  providers: arrayOf(shape({
    name: string.isRequired,
  })).isRequired,
  allResourcesByProvider: shape({}).isRequired,
};

ProvidersSummary.defaultProps = {
};

const mapStateToProps = (state) => ({
  providers: providersSelector(state),
  allResourcesByProvider: allResourcesByProviderSelector(state),
});

export default connect(mapStateToProps, null)(ProvidersSummary);

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
    textAlign: 'right',
    paddingRight: 10,
    flex: 1,
  },
  resourceLabel: {
    alignSelf: 'flex-start',
    fontSize: 12,
    flex: 4,
  },
  resourceDate: {
    alignSelf: 'flex-end',
    fontSize: 11,
    flex: 2,
  },
});
