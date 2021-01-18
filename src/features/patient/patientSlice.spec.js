import patientReducer, { setPatient, clearPatient, initialState } from './patientSlice';

const patientData = { patientName: 'Michael Scott' };
const stateWithPatient = { patient: patientData };

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
    ).toEqual(stateWithPatient);
  });

  it('should handle clearPatient action', () => {
    expect(
      patientReducer(stateWithPatient, {
        type: clearPatient.type,
      }),
    ).toEqual(initialState);
  });
});
