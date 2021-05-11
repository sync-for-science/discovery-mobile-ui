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

const formatDate = (date) => {
  if (date) {
    return format(date, 'MMM d, Y');
  }
  return '';
};

const ProviderRow = ({ name, items }) => {
  const oldest = items[0];
  const latest = items.slice(-1)[0];

  return (
    <View style={styles.providerTypeRow}>
      <Text style={styles.providerCount}>{items.length}</Text>
      <Text style={styles.providerName}>{name}</Text>
      <Text style={styles.oldest}>{formatDate(oldest?.timelineDate)}</Text>
      <Text style={styles.latest}>{formatDate(latest?.timelineDate)}</Text>
    </View>
  );
};

ProviderRow.propTypes = {
  name: string.isRequired,
  items: arrayOf(shape({})).isRequired,
};

const ProvidersSummary = ({ providers, allResourcesByProvider }) => (
  <View style={styles.root}>
    <RecordCount
      emphasizeProviders
    />
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.providerTypeContainer}>
        {providers.map(
          ({ id, name }) => (
            <ProviderRow
              key={name}
              name={name}
              items={allResourcesByProvider[id]}
            />
          ),
        )}
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
  providerCount: {
    flex: 1,
    textAlign: 'right',
    paddingRight: 8,
  },
  providerName: {
    alignSelf: 'flex-start',
    flex: 4,
  },
  oldest: {
    flex: 2,
  },
  latest: {
    flex: 2,
  },
});
