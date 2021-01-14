import { createSlice } from '@reduxjs/toolkit';

export const initialState = { patient: null };

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    setPatient: (state, action) => ({ ...state, patient: action.payload }),
    clearPatient: () => (initialState),
  },
});

export const { setPatient, clearPatient } = patientSlice.actions;

export default patientSlice.reducer;
