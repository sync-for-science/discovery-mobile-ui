import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  baseUrl: null,
  authResult: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { baseUrl, authResult } = action.payload;
      return ({
        baseUrl,
        authResult,
      });
    },
    clearAuth: () => (initialState),
  },
});

export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;
