import authReducer, { setAuth, clearAuth, initialState } from './authSlice';

describe('auth reducer', () => {
  it('should handle initial state', () => {
    expect(
      authReducer(undefined, {}),
    ).toEqual(initialState);
  });
});
