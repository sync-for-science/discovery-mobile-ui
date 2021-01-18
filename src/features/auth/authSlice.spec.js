import authReducer, { setAuth, clearAuth, initialState } from './authSlice';

const token = { auth_token: '1234' };
const stateWithToken = { authResult: token };

describe('auth reducer', () => {
  it('should handle initial state', () => {
    expect(
      authReducer(undefined, {}),
    ).toEqual(initialState);
  });

  it('should handle setAuth action', () => {
    expect(
      authReducer(initialState, {
        type: setAuth.type,
        payload: token,
      }),
    ).toEqual(stateWithToken);
  });

  it('should handle clearAuth action', () => {
    expect(
      authReducer(stateWithToken, {
        type: clearAuth.type,
      }),
    ).toEqual(initialState);
  });
});
