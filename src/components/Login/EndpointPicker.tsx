import React from 'react';
import {
  arrayOf, shape, func, string,
} from 'prop-types';
import {
  StyleSheet, Text, View, Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Endpoint } from 'fhir/r4'; // eslint-disable-line import/no-extraneous-dependencies

import { endpointFilterState, filteredEndpointsState } from '../../recoil';
import { TypedBundleEntry } from '../../../types/s4s';

type EndpointPickerProps = {
  prompt: string,
  endpoints: TypedBundleEntry<Endpoint>[],
  selectedValue: string,
  onChange: (itemValue: string) => void,
};

const EndpointPicker = ({
  prompt, endpoints, selectedValue, onChange,
}: EndpointPickerProps) => {
  const [searchQuery, setSearchQuery] = useRecoilState(endpointFilterState);
  const filteredEndpoints = useRecoilValue(filteredEndpointsState);

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  const enpointCountMessage = `(${filteredEndpoints.length}/${endpoints.length} endpoints)`;
  console.log(enpointCountMessage);

  return (
    <View style={styles.container}>
      <View style={styles.label}><Text>{prompt}</Text></View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Picker
        selectedValue={selectedValue}
        onValueChange={onChange}
        style={styles.picker}
      >
        {filteredEndpoints.map(({ resource: { id, name } }) => (
          <Picker.Item
            key={id}
            value={id}
            label={name}
          />
        ))}
      </Picker>
    </View>
  );
};

EndpointPicker.propTypes = {
  prompt: string.isRequired,
  endpoints: arrayOf(shape({})).isRequired,
  selectedValue: string.isRequired,
  onChange: func.isRequired,
};

export default EndpointPicker;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 8,
  },
  label: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 8,
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
