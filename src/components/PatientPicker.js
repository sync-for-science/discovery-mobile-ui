import React from 'react';
import { Picker } from 'react-native';
import { func, string, bool } from 'prop-types';

export const PATIENTS = {
  '86512c6f-caf6-41f4-9503-e4270b37b94f': 'Blake Eichmann',
  'd0190651-b9b0-4513-8f3b-d542319220d1': 'Mr. Chadwick Von',
};

const PatientPicker = ({ loading, patientId, setPatientId }) => !loading && (
  <Picker
    selectedValue={patientId}
    onValueChange={(itemValue) => setPatientId(itemValue)}
    style={{ height: 60, width: 600 }}
  >
    {Object.entries(PATIENTS).map(([id, name]) => (
      <Picker.Item
        key={id}
        value={id}
        label={name}
      />
    ))}
  </Picker>
);

PatientPicker.propTypes = {
  loading: bool.isRequired,
  patientId: string.isRequired,
  setPatientId: func.isRequired,
};

export default PatientPicker;
