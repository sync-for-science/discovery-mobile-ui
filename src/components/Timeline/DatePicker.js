import React, { useState } from 'react';
import { string, func, instanceOf } from 'prop-types';
import {
  Platform, SafeAreaView, View, Text, Button, StyleSheet, TouchableOpacity
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

import Colors from '../../constants/Colors'

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
    <View style={styles.container}>
      {isAndroid && 
        <TouchableOpacity style={styles.androidPicker} onPress={() => setVisible(true)}>
          <Text style={styles.androidPickerText}>{format(activeDate, 'MMM do, yyyy')}</Text>
        </TouchableOpacity>
      }
      { isVisible && 
      <View>
        <DateTimePicker
          style={styles.picker}
          mode="date"
          value={activeDate}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          display="default"
          onChange={onChange}
        />
      </View>
      }
    </View>
  );
};

DatePicker.propTypes = {
  activeDate: instanceOf(Date).isRequired,
  minimumDate: instanceOf(Date).isRequired,
  maximumDate: instanceOf(Date).isRequired,
  onDateSelect: func.isRequired,
};

export default React.memo(DatePicker);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center', 
  },
  picker: {
    width: 125
  },
  androidPicker: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: Colors.lightgrey2,
    borderRadius: 7
  },
  androidPickerText: {
    color: Colors.primary,
    fontSize: 16,
  }
});
