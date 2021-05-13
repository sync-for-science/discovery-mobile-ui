import React from 'react';
import { connect } from 'react-redux';
import {
  arrayOf, shape, string,
} from 'prop-types';
import {
  StyleSheet, View,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { providersSelector, allResourcesByProviderSelector } from '../../redux/selectors';
import RecordCount from './RecordCount';
import DataRow from './DataRow';
import { formatDate } from '../../resources/fhirReader';

const ProvidersSummary = ({ providers, allResourcesByProvider }) => (
  <View style={styles.root}>
    <RecordCount
      emphasizeProviders
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
        {providers.map(({ id, name }) => {
          const items = allResourcesByProvider[id];
          return (
            <DataRow
              key={name}
              label={name}
              count={items.length}
              oldest={formatDate(items[0]?.timelineDate)}
              latest={formatDate(items[items.length - 1]?.timelineDate)}
            />
          );
        })}
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
});
