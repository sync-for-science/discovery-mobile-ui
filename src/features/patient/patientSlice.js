import { createSlice } from '@reduxjs/toolkit';

const patientSlice = createSlice({
  name: 'patient',
  initialState: { patient: null },
  reducers: {
    setPatient: (state, action) => ({ ...state, patient: action.payload }),
    clearPatient: () => ({ patient: null }),
  },
});

export const { setPatient, clearPatient } = patientSlice.actions;

export default patientSlice.reducer;
