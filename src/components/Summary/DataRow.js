import React from 'react';
import { string, bool } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';
import TextStyles from '../../constants/TextStyles'

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

const { body1 } = TextStyles

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  heading: {
    color: Colors.secondary,
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  count: {
    textAlign: 'right',
    paddingRight: 10,
    flex: 1,
  },
  label: {
    ...body1,
    flex: 4,
  },
  date: {
    fontSize: 11,
    flex: 2,
  },
});
