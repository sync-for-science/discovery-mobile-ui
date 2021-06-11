import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';

const RecordNumberBar = ({ count, maxCount }) => {
  const barFlexWidth = (count / maxCount).toFixed(2) * 100;
  const emptyFlexWidth = 100 - barFlexWidth;
  return (
    <>
      <View style={[styles.barWidth, { flex: barFlexWidth }]} />
      <View style={{ flex: emptyFlexWidth }}>
        <Text>{count}</Text>
      </View>
    </>
  );
};

export default RecordNumberBar;

const styles = StyleSheet.create({
  barWidth: {
    backgroundColor: Colors.collectionYellow,
    height: 6,
    marginRight: 8,
  },
});
