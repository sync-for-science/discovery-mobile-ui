import React from 'react';
import { StyleSheet } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {
  arrayOf, bool, func, number, string,
} from 'prop-types';

const BaseSegmentControl = ({
  values, selectedIndex, onChange, activeColor, enabled
}) => {
  const tintColor = activeColor || 'lightblue';
  return (
    <SegmentedControl
      values={values}
      selectedIndex={selectedIndex}
      onChange={(event) => {
        onChange(event.nativeEvent.selectedSegmentIndex);
      }}
      fontStyle={styles.scFontStyle}
      activeFontStyle={styles.scActiveFontStyle}
      tintColor={tintColor}
      enabled={enabled}
    />
  );
};

BaseSegmentControl.propTypes = {
  values: arrayOf(string.isRequired).isRequired,
  selectedIndex: number.isRequired,
  onChange: func.isRequired,
  activeColor: string,
  enabled: bool
};

BaseSegmentControl.defaultProps = {
  activeColor: null,
  enabled: true
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
