import React from 'react';
import {
  arrayOf, shape, func, string, bool,
} from 'prop-types';
import {
  StyleSheet, Text, View, Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const OrganizationPicker = ({
  loading, organizations, selectedValue, onChange,
}) => !loading && (
  <View style={styles.container}>
    <View style={styles.label}><Text>Select synthetic patient:</Text></View>
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue) => onChange(itemValue)}
      style={styles.picker}
    >
      {organizations.map(({ organization, baseUrl }) => (
        <Picker.Item
          key={baseUrl}
          value={baseUrl}
          label={organization}
        />
      ))}
    </Picker>
  </View>
);

OrganizationPicker.propTypes = {
  loading: bool.isRequired,
  organizations: arrayOf(shape({})).isRequired,
  selectedValue: string.isRequired,
  onChange: func.isRequired,
};

export default OrganizationPicker;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    width: '100%',
    alignItems: 'center',
  },
  picker: Platform.select({
    ios: {
      width: '100%',
    },
    android: {
      width: '70%',
      alignSelf: 'center',
      margin: 20,
    },
  }),
});
