import React, { useState } from 'react';
import { string, func, instanceOf } from 'prop-types';
import {
  Platform, SafeAreaView, Text, Button, StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

const DatePicker = ({
  label, activeDate, minimumDate, maximumDate, onDateSelect,
}) => {
  const isAndroid = Platform.OS === 'android';

  // by default, Android date picker is open:
  const [isVisible, setVisible] = useState(!isAndroid);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || activeDate;
    if (isAndroid) {
      setVisible(false);
    }
    onDateSelect(currentDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>{label}</Text>
      {
        isAndroid && (
          <Button
            title={format(activeDate, 'MMM do, yyyy')}
            onPress={() => setVisible(true)}
          />
        )
      }
      {
        isVisible && (
          <DateTimePicker
            style={styles.picker}
            mode="date"
            value={activeDate}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            display="default"
            onChange={onChange}
          />
        )
      }
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
