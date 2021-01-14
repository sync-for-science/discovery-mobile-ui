import patientReducer, { setPatient, clearPatient, initialState } from './patientSlice';

const patientData = { patient: 'Michael Scott' };
const stateWithToken = { patient: patientData };

describe('patient reducer', () => {
  it('should handle initial state', () => {
    expect(
      patientReducer(undefined, {}),
    ).toEqual(initialState);
  });

  it('should handle setPatient action', () => {
    expect(
      patientReducer(initialState, {
        type: setPatient.type,
        payload: patientData,
      }),
    ).toEqual(stateWithToken);
  });

  it('should handle clearPatient action', () => {
    expect(
      patientReducer(stateWithToken, {
        type: clearPatient.type,
      }),
    ).toEqual(initialState);
  });
});
