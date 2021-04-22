import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { func, shape } from 'prop-types';

import BaseText from '../Generic/BaseText';

const BUTTON_LABELS = {
  'record-type': 'Record Type',
  'record-date': 'Record Date',
  'time-saved': 'Time Saved',
};

const RECORD_TYPE_ASC_DESCRIPTION = 'Sorted by Record Type in ascending order.';
const RECORD_TYPE_DSC_DESCRIPTION = 'Sorted by Record Type in descending order.';
const RECORD_DATE_ASC_DESCRIPTION = 'Sorted by Record Date in ascending order.';
const RECORD_DATE_DSC_DESCRIPTION = 'Sorted by Record Date in descending order.';
const TIME_SAVED_ASC_DESCRIPTION = 'Sorted by Time Saved in ascending order.';
const TIME_SAVED_DSC_DESCRIPTION = 'Sorted by Time Saved in descending order.';

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
  const sortingButtons = Object.entries(sortingState).map(([buttonLabel, values]) => {
    if (values.isPicked) {
      selectedButton = buttonLabel;
      isDescending = values.isDescending;
    }
    const textStyle = values.isPicked ? 'title' : '';
    const arrowDirection = sortingState[buttonLabel].isDescending ? 'arrow-down' : 'arrow-up';
    return (
      <TouchableOpacity
        key={buttonLabel}
        style={styles.button}
        onPress={() => handlePress(buttonLabel)}
      >
        <BaseText variant={textStyle}>{BUTTON_LABELS[buttonLabel]}</BaseText>
        {values.isPicked && <Ionicons name={arrowDirection} size={20} color="black" />}
      </TouchableOpacity>
    );
  });

  const descriptionText = () => {
    if (selectedButton === 'record-type' && !isDescending) {
      return RECORD_TYPE_ASC_DESCRIPTION;
    }
    if (selectedButton === 'record-type' && isDescending) {
      return RECORD_TYPE_DSC_DESCRIPTION;
    }
    if (selectedButton === 'record-date' && !isDescending) {
      return RECORD_DATE_ASC_DESCRIPTION;
    }
    if (selectedButton === 'record-date' && isDescending) {
      return RECORD_DATE_DSC_DESCRIPTION;
    }
    if (selectedButton === 'time-saved' && !isDescending) {
      return TIME_SAVED_ASC_DESCRIPTION;
    }
    return TIME_SAVED_DSC_DESCRIPTION;
  };

  return (
    <View style={styles.root}>

      <View style={styles.buttonContainer}>
        {sortingButtons}
      </View>
      <View style={styles.descriptionContainer}>
        <BaseText style={styles.descriptionText}>{descriptionText()}</BaseText>
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