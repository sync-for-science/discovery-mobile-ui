import React from 'react';
import { string, bool } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';

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

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    padding: 10,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,

  },
  heading: {
    color: Colors.secondary,
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  count: {
    alignSelf: 'flex-start',
    textAlign: 'right',
    paddingRight: 10,
    flex: 1,
  },
  label: {
    alignSelf: 'flex-start',
    flex: 4,
  },
  date: {
    alignSelf: 'flex-end',
    fontSize: 11,
    flex: 2,
  },
});
