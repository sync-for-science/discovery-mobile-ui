import React, { useState } from 'react';
import { string, func, instanceOf } from 'prop-types';
import {
  Platform, SafeAreaView, View, Text, Button, StyleSheet,
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
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        {
          isAndroid && (
            <Button
              title={format(activeDate, 'MMM do, yyyy')}
              onPress={() => setVisible(true)}
            />
          )
        }
      </View>
      <View style={styles.pickerContainer}>
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

export default React.memo(DatePicker);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginRight: 8,
  },
  pickerContainer: {
  },
  picker: {
    width: 136,
  },
});
