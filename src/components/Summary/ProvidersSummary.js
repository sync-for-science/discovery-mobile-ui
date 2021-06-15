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
import { formatDateShortYear } from '../../resources/fhirReader';

const ProvidersSummary = ({ providers, allResourcesByProvider }) => (
  <View style={styles.root}>
    <RecordCount
      emphasizeProviders
    />
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.resourceTypeContainer}>
        <View style={styles.header}>
          <DataRow
            isHeadingRow
            count=""
            label=""
            oldest="Oldest"
            latest="Latest"
          />
        </View>
        {providers.map(({ id, name }) => {
          const items = allResourcesByProvider[id];
          return (
            <DataRow
              key={name}
              count={String(items.length)}
              label={name}
              oldest={formatDateShortYear(items[0]?.timelineDate)}
              latest={formatDateShortYear(items[items.length - 1]?.timelineDate)}
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
    width: '100%',
  },
  header: {
    marginTop: 10,
  },
});
