import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
// import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DateRangePicker from './DateRangePicker';
import TimelineBrowser from './TimelineBrowser';

const Timeline = () => (
  <View style={styles.root}>
    <DateRangePicker />
    <TimelineBrowser />
  </View>
);

export default Timeline;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'column',
    minHeight: 160,
    borderColor: 'gray',
    marginTop: 16,
  },
});
