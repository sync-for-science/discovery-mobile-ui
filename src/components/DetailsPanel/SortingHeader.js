import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { func, shape } from 'prop-types';

import BaseText from '../Generic/BaseText';

const SORTING_TEXT = {
  'record-type': {
    label: 'Record Type',
    asc: 'Sorted by Record Type in ascending order.',
    desc: 'Sorted by Record Type in descending order.',
  },
  'record-date': {
    label: 'Record Date',
    asc: 'Sorted by Record Date in ascending order.',
    desc: 'Sorted by Record Date in descending order.',
  },
  'time-saved': {
    label: 'Time Saved',
    asc: 'Sorted by Time Saved in ascending order.',
    desc: 'Sorted by Time Saved in descending order.',
  },
};

const SortingHeader = ({ sortingState, setSortingState }) => {
  const handlePress = (buttonLabel) => {
    if (sortingState[buttonLabel].isPicked) {
      const updatedButton = { ...sortingState[buttonLabel] };
      updatedButton.isDescending = !updatedButton.isDescending;
      setSortingState({ ...sortingState, [buttonLabel]: updatedButton });
    } else {
      const updatedSortingState = { ...sortingState };
      Object.keys(sortingState).forEach((buttonName) => {
        updatedSortingState[buttonName].isPicked = buttonName === buttonLabel;
      });
      setSortingState(updatedSortingState);
    }
  };

  let selectedButton;
  let isDescending;

  const sortConfig = Object.entries(sortingState).map(([buttonLabel, values]) => {
    if (values.isPicked) {
      selectedButton = buttonLabel;
      isDescending = values.isDescending;
    }
    return ({
      buttonLabel,
      label: SORTING_TEXT[buttonLabel],
      values,
      textVariant: values.isPicked ? 'title' : '',
      arrowType: sortingState[buttonLabel].isDescending ? 'arrow-down' : 'arrow-up',
    });
  });

  return (
    <View style={styles.root}>
      <View style={styles.buttonContainer}>
        {
          sortConfig.map(({
            buttonLabel,
            label,
            values,
            textVariant,
            arrowType,
          }) => (
            <TouchableOpacity
              key={buttonLabel}
              style={styles.button}
              onPress={() => handlePress(buttonLabel)}
            >
              <BaseText variant={textVariant}>{label}</BaseText>
              {values.isPicked && <Ionicons name={arrowType} size={20} color="black" />}
            </TouchableOpacity>
          ))
        }
      </View>
      <View style={styles.descriptionContainer}>
        <BaseText style={styles.descriptionText}>
          {isDescending ? SORTING_TEXT[selectedButton].desc : SORTING_TEXT[selectedButton].asc}
        </BaseText>
      </View>
    </View>

  );
};

SortingHeader.propTypes = {
  sortingState: shape({}).isRequired,
  setSortingState: func.isRequired,
};

export default SortingHeader;

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
  },
  descriptionContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  descriptionText: {
    fontStyle: 'italic',
  },
});
