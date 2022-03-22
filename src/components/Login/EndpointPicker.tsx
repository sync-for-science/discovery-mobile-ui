import React, { useState } from 'react';
import { arrayOf, shape } from 'prop-types';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Endpoint } from 'fhir/r4'; // eslint-disable-line import/no-extraneous-dependencies

import {
  selectedEndpointIdState, endpointOptionsState,
} from '../../recoil';
import { TypedBundleEntry } from '../../../types/s4s';

type EndpointPickerProps = {
  endpoints: TypedBundleEntry<Endpoint>[],
};

const EndpointPicker = ({ endpoints }: EndpointPickerProps) => {
  const [open, setOpen] = useState(false);
  const [endpointId, setEndpointId] = useRecoilState(selectedEndpointIdState);
  const [filteredEndpoints, setFilteredEndpoints] = useState(useRecoilValue(endpointOptionsState));
  // console.log('filteredEndpoints: ', filteredEndpoints);

  const enpointCountMessage = `(${filteredEndpoints.length}/${endpoints.length} endpoints)`;
  console.log(enpointCountMessage);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={String(endpointId)}
        items={filteredEndpoints}
        searchable
        placeholder="Select a provider"
        searchPlaceholder="Search providers"
        setOpen={setOpen}
        // onChangeSearchText={(text) => {
        //   console.log('onChangeSearchText: ', text);
        // }}
        setValue={setEndpointId}
        setItems={setFilteredEndpoints}
      />
    </View>
  );
};

EndpointPicker.propTypes = {
  endpoints: arrayOf(shape({})).isRequired,
};

export default EndpointPicker;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 8,
  },
});
