import React from 'react';
import { StyleSheet } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {
  arrayOf, func, number, string,
} from 'prop-types';

const BaseSegmentControl = ({
  values, selectedIndex, handleChange, activeColor,
}) => {
  const tintColor = activeColor || 'lightblue';
  return (
    <SegmentedControl
      values={values}
      selectedIndex={selectedIndex}
      onChange={(event) => {
        handleChange(event.nativeEvent.selectedSegmentIndex);
      }}
      fontStyle={styles.scFontStyle}
      activeFontStyle={styles.scActiveFontStyle}
      tintColor={tintColor}
    />
  );
};

BaseSegmentControl.propTypes = {
  values: arrayOf(string.isRequired).isRequired,
  selectedIndex: number.isRequired,
  handleChange: func.isRequired,
  activeColor: string,
};

BaseSegmentControl.defaultProps = {
  activeColor: null,
};

export default BaseSegmentControl;

const styles = StyleSheet.create({
  scFontStyle: {
    fontSize: 16,
    color: 'black',
  },
  scActiveFontStyle: {
    fontSize: 16,
  },
});
