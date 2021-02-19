import patient from './patient.json'
import carePlans from './care-plan.json'
import claims from './claim.json'
import diagnosticReports from './diagnostic-report.json'
import encounters from './encounter.json'
import immunizations from './immunization.json'
import observations from './observation.json'
import procedures from './procedure.json'
import providers from './provider.json'

const labResults = observations.filter(resource => resource.resource.category[0].coding[0].code === "laboratory")
const vitalSigns = observations.filter(resource => resource.resource.category[0].coding[0].code === "vital-signs")

const mockResponse = { patient, carePlans, claims, diagnosticReports, encounters, immunizations, procedures, labResults, vitalSigns, providers }

export default mockResponse