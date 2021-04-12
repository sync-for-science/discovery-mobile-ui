import React, { useState } from 'react';
import {
  StyleSheet, View, TouchableOpacity
} from 'react-native';
import DateRangePicker from './DateRangePicker';
import TimelineBrowser, { CHART_HEIGHT } from './TimelineBrowser';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors'


const Timeline = () => {
  const [showTimeline, setShowTimeline] = useState(true)
  const expandIcon = showTimeline 
    ? <Ionicons name="caret-down" size={24} color={Colors.darkgrey} />
    : <Ionicons name="caret-up" size={24} color={Colors.darkgrey} />

  return (
  <View style={styles.root}>
    <View style={styles.dateRangeContainer}>
      <View style={styles.iconContainer} />
      <DateRangePicker />
      <TouchableOpacity style={styles.iconContainer} onPress={() => setShowTimeline(!showTimeline)}>
        {expandIcon}
      </TouchableOpacity>
    </View>
    {showTimeline && <TimelineBrowser />}
  </View>
)};

export default Timeline;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'column',
    minHeight: CHART_HEIGHT + 60, // + height of date selectors
    borderColor: 'gray',
    marginTop: 16,
  },
  dateRangeContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 10,
  },
  iconContainer: {
    width: 50,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
