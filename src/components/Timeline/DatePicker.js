import React, { useState } from 'react';
import { string, func, instanceOf } from 'prop-types';
import {
  View, Text, SafeAreaView, StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({
  label, activeDate, minimumDate, maximumDate, onDateSelect,
}) => {
  const [date, setDate] = useState(new Date(activeDate));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // (Platform.OS === 'ios');
    setDate(currentDate);
    onDateSelect(currentDate);
  };

  console.info('minimumDate: ', minimumDate);
  console.info('maximumDate: ', maximumDate);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>{label}</Text>
        <DateTimePicker
          style={styles.picker}
          mode="date"
          value={date}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          display="default"
          onChange={onChange}
        />
      </View>
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

export default DatePicker;

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
