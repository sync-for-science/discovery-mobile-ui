import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DateRangePicker from './DateRangePicker';

const CatalogScreen = () => (
  <View style={styles.root}>
    <DateRangePicker />
  </View>
);

export default CatalogScreen;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'row',
    height: hp('20%'),
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    marginTop: 16,
  },
});
