import React from 'react';
import {
  arrayOf, bool, func, shape, string,
} from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';
import { orderedResourceTypeFiltersSelector } from '../../redux/selectors';
import { toggleResourceTypeFilter } from '../../redux/action-creators';
import TypeFilterGroup from './TypeFilterGroup';

const TypeFilter = ({ allTypeFilters, toggleResourceTypeFilterAction }) => (
  <View>
    <Text style={styles.drawerTitle}>Record Type Filters</Text>
    <TypeFilterGroup
      heading="Available in time window"
      disabled={false}
      filters={allTypeFilters.filter(({ hasItemsInDateRange }) => hasItemsInDateRange)}
      toggleResourceTypeFilterAction={toggleResourceTypeFilterAction}
    />
    <TypeFilterGroup
      heading="Outside of time window"
      disabled
      filters={allTypeFilters.filter(({ hasItemsInDateRange }) => !hasItemsInDateRange)}
      toggleResourceTypeFilterAction={toggleResourceTypeFilterAction}
    />
  </View>
);

TypeFilter.propTypes = {
  allTypeFilters: arrayOf(shape({
    type: string.isRequired,
    typeIsEnabled: bool.isRequired,
    label: string.isRequired,
    hasItemsInDateRange: bool.isRequired,
  })).isRequired,
  toggleResourceTypeFilterAction: func.isRequired,
};

const mapStateToProps = (state) => ({
  allTypeFilters: orderedResourceTypeFiltersSelector(state),
});

const mapDispatchToProps = {
  toggleResourceTypeFilterAction: toggleResourceTypeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeFilter);

const styles = StyleSheet.create({
  drawerTitle: {
    backgroundColor: Colors.secondary,
    color: 'white',
    marginBottom: 8,
    padding: 8,
    fontSize: 20,
    textAlign: 'center',
  },
});
