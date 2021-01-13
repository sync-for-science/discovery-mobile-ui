import { createSlice } from '@reduxjs/toolkit';

const patientSlice = createSlice({
  name: 'patient',
  initialState: { patient: null },
  reducers: {
    setPatient: (state, action) => ({ ...state, patient: action.payload }),
  },
});

export const { setPatient } = patientSlice.actions;

export default patientSlice.reducer;
