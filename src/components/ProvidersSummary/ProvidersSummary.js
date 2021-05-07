import React from 'react';
import { connect } from 'react-redux';
import {
  arrayOf, shape, string,
} from 'prop-types';
import {
  StyleSheet, Text, View,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { providersSelector } from '../../redux/selectors';
import RecordCount from '../Summary/RecordCount';

const ProviderRow = ({ name }) => (
  <View style={styles.providerTypeRow}>
    <Text style={styles.providerName}>{name}</Text>
  </View>
);

ProviderRow.propTypes = {
  name: string.isRequired,
};

const ProvidersSummary = ({ providers }) => (
  <View style={styles.root}>
    <RecordCount
      emphasizeProviders
    />
    <ScrollView style={styles.scrollContainer}>
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
    </ScrollView>
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
  providerName: {
    alignSelf: 'flex-start',
    flex: 6,
  },
});
