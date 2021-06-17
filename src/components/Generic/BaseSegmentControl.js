import React from 'react';
import { StyleSheet } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {
  arrayOf, func, number, string, bool,
} from 'prop-types';

const BaseSegmentControl = ({
  enabled, values, selectedIndex, onChange, activeColor, activeFontColor,
}) => {
  const tintColor = activeColor || 'lightblue';
  const fontColor = activeFontColor ? { color: activeFontColor } : {};
  return (
    <SegmentedControl
      enabled={enabled}
      values={values}
      selectedIndex={selectedIndex}
      onChange={(event) => {
        onChange(event.nativeEvent.selectedSegmentIndex);
      }}
      fontStyle={styles.scFontStyle}
      activeFontStyle={{ ...styles.scActiveFontStyle, ...fontColor }}
      tintColor={tintColor}
    />
  );
};

BaseSegmentControl.propTypes = {
  enabled: bool.isRequired,
  values: arrayOf(string.isRequired).isRequired,
  selectedIndex: number.isRequired,
  onChange: func.isRequired,
  activeColor: string,
  activeFontColor: string,
};

BaseSegmentControl.defaultProps = {
  activeColor: null,
  activeFontColor: null,
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
