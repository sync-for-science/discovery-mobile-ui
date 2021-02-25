import React from 'react';
import { func, string, bool } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PATIENTS = {
  '86512c6f-caf6-41f4-9503-e4270b37b94f': 'Blake Eichmann',
  'd0190651-b9b0-4513-8f3b-d542319220d1': 'Mr. Chadwick Von',
};

export const DEFAULT_PATIENT_ID = Object.keys(PATIENTS)[0];

const PatientPicker = ({ loading, patientId, setPatientId }) => !loading && (
  <View>
    <View style={styles.label}><Text>Select Example Patient:</Text></View>
    <Picker
      selectedValue={patientId}
      onValueChange={(itemValue) => setPatientId(itemValue)}
      style={styles.picker}
    >
      {Object.entries(PATIENTS).map(([id, name]) => (
        <Picker.Item
          key={id}
          value={id}
          label={name}
        />
      ))}
    </Picker>
  </View>
);

PatientPicker.propTypes = {
  loading: bool.isRequired,
  patientId: string.isRequired,
  setPatientId: func.isRequired,
};

export default PatientPicker;

const styles = StyleSheet.create({
  label: {
    alignItems: 'center',
    marginTop: 0,
  },
  picker: {
    height: 60,
    width: 600,
  },
});
