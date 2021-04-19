import React, { useState } from 'react';
import {
  StyleSheet, View, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import DateRangePicker from './DateRangePicker';
import TimelineBrowser from './TimelineBrowser';

import Colors from '../../constants/Colors';

const Timeline = () => {
  const [showTimeline, setShowTimeline] = useState(true);
  const expandIcon = showTimeline
    ? <Ionicons name="caret-down" size={20} color={Colors.expandTimeline} />
    : <Ionicons name="caret-up" size={20} color={Colors.expandTimeline} />;

  return (
    <View style={styles.root}>
      <View style={styles.dateRangeContainer}>
        <View style={styles.iconContainer} />
        <DateRangePicker />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setShowTimeline(!showTimeline)}
        >
          {expandIcon}
        </TouchableOpacity>
      </View>
      {showTimeline && <TimelineBrowser />}
    </View>
  );
};

export default Timeline;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'column',
    borderColor: 'gray',
  },
  dateRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  iconContainer: {
    width: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
