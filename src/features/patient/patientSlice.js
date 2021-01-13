import { createSlice } from '@reduxjs/toolkit';

const patientSlice = createSlice({
  name: 'patient',
  initialState: { auth: null, patientData: null },
  reducers: {
    setAuth: (state, action) => ({ ...state, auth: action.payload }),
    setPatientData: (state, action) => ({ ...state, patientData: action.payload }),
  },
});

export const { setAuth, setPatientData } = patientSlice.actions;

export default patientSlice.reducer;
