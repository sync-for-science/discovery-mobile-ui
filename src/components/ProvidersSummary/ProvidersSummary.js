import React from 'react';
import { connect } from 'react-redux';
import {
  arrayOf, shape, string,
} from 'prop-types';
import {
  StyleSheet, Text, View,
} from 'react-native';

import { providersSelector } from '../../redux/selectors';
import Colors from '../../constants/Colors';

const ProviderRow = ({ name }) => (
  <View style={styles.providerTypeRow}>
    <Text style={styles.providerName}>{name}</Text>
  </View>
);

ProviderRow.propTypes = {
  name: string.isRequired,
};

const ProvidersSummary = ({ providers }) => (
  <View style={styles.providerSummaryContainer}>
    <View style={styles.providersHeader}>
      <Text style={styles.providersHeaderText}>
        providers
      </Text>
      <Text style={styles.providersHeaderTotal}>
        {`${providers.length} Total`}
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
  providers: arrayOf(shape({
    name: string.isRequired,
  })).isRequired,
};

ProvidersSummary.defaultProps = {
};

const mapStateToProps = (state) => ({
  providers: providersSelector(state),
});

export default connect(mapStateToProps, null)(ProvidersSummary);

const styles = StyleSheet.create({
  providerSummaryContainer: {
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  providersHeader: {
    padding: 5,
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
  },
  providersHeaderText: {
    color: 'white',
    fontSize: 16,
    padding: 5,
    textTransform: 'capitalize',
  },
  providersHeaderTotal: {
    color: 'white',
    fontSize: 12,
    padding: 9, // FIXME, not the right way to align
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
