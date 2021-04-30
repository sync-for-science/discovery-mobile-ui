import React from 'react';
import {
  arrayOf, bool, func, shape, string,
} from 'prop-types';
import { connect } from 'react-redux';
import {
  Platform, StyleSheet, Switch, Text, View,
} from 'react-native';

import Colors from '../../constants/Colors';
import { orderedResourceTypeFiltersSelector } from '../../redux/selectors';
import { toggleResourceTypeFilter } from '../../redux/action-creators';

const TypeFilterRow = ({
  resourceType, label, typeIsEnabled, toggleResourceTypeFilterAction,
}) => (
  <View style={styles.typeFilterRow}>
    <Text>{label}</Text>
    <Switch
      trackColor={{
        false: Colors.mediumgrey,
        true: Platform.OS === 'ios' ? Colors.primary : Colors.primaryLight,
      }}
      thumbColor={(Platform.OS === 'ios') ? 'white' : Colors[(typeIsEnabled ? 'primary' : 'primaryLight')]}
      onValueChange={() => toggleResourceTypeFilterAction(resourceType)}
      value={typeIsEnabled}
    />
  </View>
);

TypeFilterRow.propTypes = {
  resourceType: string.isRequired,
  label: string.isRequired,
  typeIsEnabled: bool.isRequired,
  toggleResourceTypeFilterAction: func.isRequired,
};

const TypeFilter = ({ orderedResourceTypeFilters, toggleResourceTypeFilterAction }) => (
  <View>
    <Text style={styles.drawerTitle}>Record Type Filters</Text>
    {orderedResourceTypeFilters.map(({ type, typeIsEnabled, label }) => (
      <TypeFilterRow
        key={type}
        resourceType={type}
        label={label}
        typeIsEnabled={typeIsEnabled}
        toggleResourceTypeFilterAction={toggleResourceTypeFilterAction}
      />
    ))}
  </View>
);

TypeFilter.propTypes = {
  orderedResourceTypeFilters: arrayOf(shape({
    type: string.isRequired,
    typeIsEnabled: bool.isRequired,
    label: string.isRequired,
  })).isRequired,
  toggleResourceTypeFilterAction: func.isRequired,
};

const mapStateToProps = (state) => ({
  orderedResourceTypeFilters: orderedResourceTypeFiltersSelector(state),
});

const mapDispatchToProps = {
  toggleResourceTypeFilterAction: toggleResourceTypeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeFilter);

const styles = StyleSheet.create({
  drawerTitle: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  typeFilterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
