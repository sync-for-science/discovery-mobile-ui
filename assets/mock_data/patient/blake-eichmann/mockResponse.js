import Patient from './patient.json';
import CarePlan from './care-plan.json';
import Claim from './claim.json';
import DiagnosticReport from './diagnostic-report.json';
import Encounter from './encounter.json';
import Immunization from './immunization.json';
import Observation from './observation.json';
import Procedure from './procedure.json';
import Provider from './provider.json';

const LabResult = Observation.filter((resource) => resource.resource.category[0].coding[0].code === 'laboratory');
const VitalSign = Observation.filter((resource) => resource.resource.category[0].coding[0].code === 'vital-signs');

const mockResponse = {
  Patient,
  CarePlan,
  Claim,
  DiagnosticReport,
  Encounter,
  Immunization,
  Observation,
  LabResult,
  VitalSign,
  Provider,
  Procedure,
};

export default mockResponse;
