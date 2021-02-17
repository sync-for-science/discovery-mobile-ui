import { createSlice } from '@reduxjs/toolkit';

export const initialState = { patient: null, skipLogin: false };

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    setPatient: (state, action) => ({ ...state, patient: action.payload }),
    clearPatient: () => (initialState),
    setSkipLogin: (state, action) => ({...state, skipLogin: action.payload})
  },
});

export const { setPatient, clearPatient, setSkipLogin } = patientSlice.actions;

export default patientSlice.reducer;
