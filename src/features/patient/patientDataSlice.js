import { createSlice } from '@reduxjs/toolkit';

export const initialState = { patientData: null };

const patientDataSlice = createSlice({
  name: 'patientData',
  initialState,
  reducers: {
    setPatientData: (state, action) => ({ ...state, patientData: action.payload }),
    clearPatientData: () => (initialState),
  },
});

export const { setPatientData, clearPatientData } = patientDataSlice.actions;

export default patientDataSlice.reducer;
