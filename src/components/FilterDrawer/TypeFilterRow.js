import React from 'react';
import { bool, func, string } from 'prop-types';
import {
  Platform, StyleSheet, Switch, Text, View,
} from 'react-native';

import Colors from '../../constants/Colors';

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

export default TypeFilterRow;

const styles = StyleSheet.create({
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
