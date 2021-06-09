export const PLURAL_RESOURCE_TYPES = {
  'vital-signs': 'Vital Signs',
  CarePlan: 'Care Plans',
  Condition: 'Conditions',
  DiagnosticReport: 'Diagnostic Reports',
  Encounter: 'Encounters',
  Immunization: 'Immunizations',
  MedicationRequest: 'Prescriptions',
  Procedure: 'Procedures',
  laboratory: 'Lab Results',
};

export const TYPES_SORTED_BY_LABEL = Object.entries(PLURAL_RESOURCE_TYPES)
  .sort(([, l1], [, l2]) => ((l1.toLowerCase() < l2.toLowerCase()) ? -1 : 1))
  .map(([type]) => type);

export const SINGULAR_RESOURCE_TYPES = {
  'vital-signs': 'Vital Sign',
  CarePlan: 'Care Plan',
  Condition: 'Condition',
  DiagnosticReport: 'Diagnostic Report',
  Encounter: 'Encounter',
  Immunization: 'Immunization',
  MedicationRequest: 'Prescription',
  Procedure: 'Procedure',
  laboratory: 'Lab Result',
};
