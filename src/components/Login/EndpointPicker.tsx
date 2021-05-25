import React from 'react';
import {
  arrayOf, shape, func, string, bool,
} from 'prop-types';
import {
  StyleSheet, Text, View, Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Endpoint } from 'fhir/r4'; // eslint-disable-line import/no-extraneous-dependencies

import { TypedBundleEntry } from '../../../types/s4s';

type EndpointPickerProps = {
  loading: boolean,
  prompt: string,
  endpoints: TypedBundleEntry<Endpoint>[],
  selectedValue: string,
  onChange: (itemValue: string) => void,
};

const EndpointPicker = ({
  loading, prompt, endpoints, selectedValue, onChange,
}: EndpointPickerProps) => (loading ? null : (
  <View style={styles.container}>
    <View style={styles.label}><Text>{prompt}</Text></View>
    <View style={styles.count}>
      <Text>
        (
        {String(endpoints.length)}
        {' '}
        organizations)
      </Text>
    </View>
    <Picker
      selectedValue={selectedValue}
      onValueChange={onChange}
      style={styles.picker}
    >
      {endpoints.map(({ resource: { id, name } }) => (
        <Picker.Item
          key={id}
          value={id}
          label={name}
        />
      ))}
    </Picker>
  </View>
));

EndpointPicker.propTypes = {
  loading: bool.isRequired,
  prompt: string.isRequired,
  endpoints: arrayOf(shape({})).isRequired,
  selectedValue: string.isRequired,
  onChange: func.isRequired,
};

export default EndpointPicker;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    width: '100%',
    alignItems: 'center',
    // fontWeight: '900',
  },
  count: {
    width: '100%',
    alignItems: 'center',
  },
  // @ts-ignore
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
