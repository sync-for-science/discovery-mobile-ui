import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { number } from 'prop-types';

import Colors from '../../constants/Colors';

const RecordNumberBar = ({ count, maxCount }) => {
  const barFlexWidth = (count / maxCount).toFixed(2) * 100;
  const emptyFlexWidth = 100 - barFlexWidth;
  return (
    <View style={styles.root}>
      <View style={[styles.barWidth, { flex: barFlexWidth }]} />
      <View style={{ flex: emptyFlexWidth }}>
        <Text>{count}</Text>
      </View>
    </View>
  );
};

RecordNumberBar.propTypes = {
  count: number.isRequired,
  maxCount: number.isRequired,
};

export default RecordNumberBar;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barWidth: {
    backgroundColor: Colors.collectionYellow,
    height: 6,
    marginRight: 8,
  },
});
