import { createSlice } from '@reduxjs/toolkit';

const patientSlice = createSlice({
  name: 'patient',
  initialState: { auth: null, patient: null },
  reducers: {
    setAuth: (state, action) => ({ ...state, auth: action.payload }),
    setPatient: (state, action) => ({ ...state, patient: action.payload }),
  },
});

export const { setAuth, setPatient } = patientSlice.actions;

export default patientSlice.reducer;
