import React from 'react';
import { string, bool } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';
import TextStyles from '../../constants/TextStyles';

const DataRow = ({
  isHeadingRow, count, label, oldest, latest,
}) => (
  <View style={styles.root}>
    <Text style={styles.count}>
      {count}
    </Text>
    <Text style={styles.label}>
      {label}
    </Text>
    <Text style={[
      styles.date,
      isHeadingRow ? styles.heading : null,
    ]}
    >
      {oldest}
    </Text>
    <Text style={[
      styles.date,
      isHeadingRow ? styles.heading : null,
    ]}
    >
      {latest}
    </Text>
  </View>
);

DataRow.propTypes = {
  isHeadingRow: bool,
  count: string.isRequired,
  label: string.isRequired,
  oldest: string.isRequired,
  latest: string.isRequired,
};

DataRow.defaultProps = {
  isHeadingRow: false,
};

export default DataRow;

const { body1 } = TextStyles;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },
  heading: {
    color: Colors.secondary,
    ...body1
  },
  count: {
    textAlign: 'right',
    paddingRight: 10,
    flex: 1,
  },
  label: {
    ...body1,
    flex: 5,
  },
  date: {
    flex: 3,
    ...body1
  },
});
