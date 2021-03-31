import React from 'react';
import { connect } from 'react-redux';
import { string, number } from 'prop-types';
import {
  StyleSheet, Text, View,
} from 'react-native';

import Colors from '../../constants/Colors';

const ProviderRow = ({ name, latestDataYear }) => (
  <View style={styles.providerTypeRow}>
    <Text style={styles.providerName}>{name}</Text>
    <Text style={styles.providerLatestDate}>{latestDataYear}</Text>
  </View>
);

ProviderRow.propTypes = {
  name: string.isRequired,
  latestDataYear: number.isRequired,
};

const ProvidersSummary = () => {
  const providers = [
    { name: 'LAC/Olive View-UCLA Medical Center', latestDataYear: 2020 },
    { name: 'Pacific Alliance Medical Center', latestDataYear: 2018 },
  ];

  return (
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
        <View style={styles.providerTypeRow}>
          <Text style={styles.providerName} />
          <Text style={styles.providerLatestDateLabel}>latest data</Text>
        </View>
        {providers.map(
          ({ name, latestDataYear }) => (
            <ProviderRow
              key={name}
              name={name}
              latestDataYear={latestDataYear}
            />
          ),
        )}
      </View>
    </View>
  );
};

ProvidersSummary.propTypes = {
};

ProvidersSummary.defaultProps = {
};

const mapStateToProps = () => ({
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
