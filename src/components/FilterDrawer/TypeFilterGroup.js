import React from 'react';
import {
  arrayOf, bool, func, shape, string,
} from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import TypeFilterRow from './TypeFilterRow';

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

export default TypeFilterGroup;

const styles = StyleSheet.create({
  groupHeading: {
    marginTop: 8,
    marginBottom: 4,
    fontSize: 16,
    textAlign: 'center',
  },
});
