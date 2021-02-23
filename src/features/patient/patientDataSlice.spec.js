import patientDataReducer, { setPatientData, clearPatientData, initialState } from './patientDataSlice';

const patientData = { patientName: 'Michael Scott' };
const stateWithPatient = { ...initialState, patientData };

describe('patient reducer', () => {
  it('should handle initial state', () => {
    expect(
      patientDataReducer(undefined, {}),
    ).toEqual(initialState);
  });

  it('should handle setPatient action', () => {
    expect(
      patientDataReducer(initialState, {
        type: setPatientData.type,
        payload: patientData,
      }),
    ).toEqual(stateWithPatient);
  });

  it('should handle clearPatient action', () => {
    expect(
      patientDataReducer(stateWithPatient, {
        type: clearPatientData.type,
      }),
    ).toEqual(initialState);
  });
});
