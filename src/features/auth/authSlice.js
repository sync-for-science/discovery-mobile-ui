import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { authResult: null },
  reducers: {
    setAuth: (state, action) => ({ ...state, authResult: action.payload }),
    logout: () => ({ authResult: null }),
  },
});

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
