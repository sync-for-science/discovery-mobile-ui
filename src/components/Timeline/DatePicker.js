import React from 'react';
import { string, func, instanceOf } from 'prop-types';
import {
  Text, SafeAreaView, StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({
  label, activeDate, minimumDate, maximumDate, onDateSelect,
}) => {
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || activeDate;
    // (Platform.OS === 'ios');
    onDateSelect(currentDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>{label}</Text>
      <DateTimePicker
        style={styles.picker}
        mode="date"
        value={activeDate}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        display="default"
        onChange={onChange}
      />
    </SafeAreaView>
  );
};

DatePicker.propTypes = {
  label: string.isRequired,
  activeDate: instanceOf(Date).isRequired,
  minimumDate: instanceOf(Date).isRequired,
  maximumDate: instanceOf(Date).isRequired,
  onDateSelect: func.isRequired,
};

export default React.memo(DatePicker);

const styles = StyleSheet.create({
  container: {
    width: 150,
    alignItems: 'center',
  },
  label: {
    width: 150,
    alignItems: 'center',
  },
  picker: {
    width: 150,
    alignItems: 'center',
  },
});
