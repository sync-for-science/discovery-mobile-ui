import { FhirResource } from 'fhir/r4';

// export interface Dictionary<Type> {
//   [key: string]: Type
// }

// export interface TypedBundleEntry<Type extends FhirResource> extends BundleEntry {
//   resource: Type
// }

export interface TimelineResource extends FhirResource {
  timelineDate: Date
}

export interface BloodPressureData {
  code: string | void
  valueQuantity: string | void
}
