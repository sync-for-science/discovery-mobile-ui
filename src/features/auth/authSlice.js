import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { authResult: null },
  reducers: {
    setAuth: (state, action) => ({ ...state, authResult: action.payload }),
    clearAuth: () => ({ authResult: null }),
  },
});

export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;
