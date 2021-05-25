export default [
  {
    type: 'CarePlan',
    params: {
      // https://fhir.epic.com/Specifications?api=1067
      // 734163000 should be used to search for encounter-level CarePlans.
      category: '734163000',
    },
  },
  {
    type: 'Condition',
    params: {
      category: 'encounter-diagnosis',
    },
  },
  {
    type: 'Condition',
    params: {
      category: 'health-concern',
    },
  },
  {
    type: 'Condition',
    params: {
      category: 'problem-list-item',
    },
  },
  {
    type: 'DiagnosticReport',
    params: {},
  },
  {
    type: 'Encounter',
    params: {},
  },
  {
    type: 'Immunization',
    params: {},
  },
  {
    type: 'MedicationRequest',
    params: {},
  },
  {
    type: 'Observation',
    params: {
      category: 'laboratory',
    },
  },
  {
    type: 'Observation',
    params: {
      category: 'vital-signs',
    },
  },
  {
    type: 'Procedure',
    params: {},
  },
];
