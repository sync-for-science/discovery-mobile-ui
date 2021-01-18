import { createSlice } from '@reduxjs/toolkit';

export const initialState = { authResult: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => ({ ...state, authResult: action.payload }),
    clearAuth: () => (initialState),
  },
});

export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;
