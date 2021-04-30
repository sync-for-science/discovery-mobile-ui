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
  resourceType, label, typeIsEnabled, toggleResourceTypeFilterAction, disabled,
}) => (
  <View style={styles.typeFilterRow}>
    <Text style={styles.rowLabel}>{label}</Text>
    <Switch
      trackColor={{
        false: Colors.mediumgrey,
        true: Platform.OS === 'ios' ? Colors.primary : Colors.primaryLight,
      }}
      thumbColor={(Platform.OS === 'ios') ? 'white' : Colors[(typeIsEnabled ? 'primary' : 'primaryLight')]}
      onValueChange={() => toggleResourceTypeFilterAction(resourceType)}
      value={typeIsEnabled}
      disabled={disabled}
    />
  </View>
);

TypeFilterRow.propTypes = {
  resourceType: string.isRequired,
  label: string.isRequired,
  typeIsEnabled: bool.isRequired,
  toggleResourceTypeFilterAction: func.isRequired,
  disabled: bool.isRequired,
};

const TypeFilterGroup = ({
  heading, filters, toggleResourceTypeFilterAction, disabled,
}) => {
  if (!filters.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.groupHeading}>{heading}</Text>
      {filters.map(({ type, typeIsEnabled, label }) => (
        <TypeFilterRow
          key={type}
          resourceType={type}
          label={label}
          typeIsEnabled={typeIsEnabled}
          toggleResourceTypeFilterAction={toggleResourceTypeFilterAction}
          disabled={disabled}
        />
      ))}
    </View>
  );
};

TypeFilterGroup.propTypes = {
  heading: string.isRequired,
  disabled: bool.isRequired,
  filters: arrayOf(shape({
    type: string.isRequired,
    typeIsEnabled: bool.isRequired,
    label: string.isRequired,
    hasItemsInDateRange: bool.isRequired,
  })).isRequired,
  toggleResourceTypeFilterAction: func.isRequired,
};

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
  groupHeading: {
    marginTop: 8,
    marginBottom: 4,
    fontSize: 16,
    textAlign: 'center',
  },
  typeFilterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginVertical: 4,
  },
  rowLabel: {
    fontSize: 18,
  },
});
