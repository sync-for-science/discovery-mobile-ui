import React, { useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useRecoilState } from 'recoil';

import { selectedEndpointIdState, searchTextState } from '../../recoil';
import { EndpointOption } from '../../../types/s4s';
import endpointTheme from '../../themes/light';

type EndpointPickerProps = {
  endpointOptions: EndpointOption[],
};

// DropDownPicker.addTheme('LIGHT', endpointTheme);
// DropDownPicker.setTheme('LIGHT');

const EndpointPicker = ({ endpointOptions }: EndpointPickerProps) => {
  const [open, setOpen] = useState(true);
  const [endpointId, setEndpointId] = useRecoilState(selectedEndpointIdState);
  const [searchText, setSearchText] = useRecoilState(searchTextState);
  const [filteredEndpoints, setFilteredEndpoints] = useState(endpointOptions);

  const enpointCountMessage = `(${filteredEndpoints.length}/${endpointOptions.length} endpoints)`;
  console.log(enpointCountMessage);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={String(endpointId)}
        items={filteredEndpoints}
        searchable
        translation={{
          PLACEHOLDER: 'Select a provider',
          SEARCH_PLACEHOLDER: 'Search providers',
          // SELECTED_ITEMS_COUNT_TEXT: '', // for multi-select
          NOTHING_TO_SHOW: `No providers match "${searchText}"`,
        }}
        setOpen={setOpen}
        onChangeSearchText={setSearchText}
        setValue={setEndpointId}
        setItems={setFilteredEndpoints}
        style={endpointTheme.style}
        containerStyle={endpointTheme.container}
        searchContainerStyle={endpointTheme.searchContainer}
        searchTextInputStyle={endpointTheme.searchTextInput}
        dropDownContainerStyle={endpointTheme.dropDownContainer}
        labelStyle={endpointTheme.label}
        listItemLabelStyle={endpointTheme.listItemLabel}
        // disabledStyle={endpointTheme.disabled}
        // textStyle={endpointTheme.text}
        // placeholderStyle={endpointTheme.placeholder}
        // arrowIconStyle={endpointTheme.arrowIcon}
        // arrowIconContainerStyle={endpointTheme.arrowIconContainer}
      />
    </View>
  );
};

EndpointPicker.propTypes = {
  endpointOptions: arrayOf(shape({
    label: string.isRequired,
    value: string.isRequired,
    address: string.isRequired,
  })).isRequired,
};

export default EndpointPicker;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 8,
  },
});
