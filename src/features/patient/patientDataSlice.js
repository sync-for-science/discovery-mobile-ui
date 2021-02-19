import { createSlice } from '@reduxjs/toolkit';

export const initialState = { patientData: null, skipLogin: false };

const patientDataSlice = createSlice({
  name: 'patientData',
  initialState,
  reducers: {
    setPatientData: (state, action) => ({ ...state, patientData: action.payload }),
    clearPatientData: () => (initialState),
    setSkipLogin: (state, action) => ({ ...state, skipLogin: action.payload }),
  },
});

export const { setPatientData, clearPatientData, setSkipLogin } = patientDataSlice.actions;

export default patientDataSlice.reducer;
