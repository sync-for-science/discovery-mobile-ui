import React, { useState } from 'react';
import {
  StyleSheet, View, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import DateRangePicker from './DateRangePicker';
import TimelineChart from './TimelineChart';

import Colors from '../../constants/Colors';

const Timeline = () => {
  const [showTimeline, setShowTimeline] = useState(true);

  return (
    <View style={styles.root}>
      <View style={styles.dateRangeContainer}>
        <View style={styles.iconContainer} />
        <DateRangePicker />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setShowTimeline(!showTimeline)}
        >
          <Ionicons
            name={showTimeline ? 'chevron-up' : 'chevron-down'}
            size={24}
            color={Colors.expandTimeline}
          />
        </TouchableOpacity>
      </View>
      {showTimeline && <TimelineChart />}
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
