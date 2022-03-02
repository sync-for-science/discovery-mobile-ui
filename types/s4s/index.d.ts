import { Bundle, BundleEntry, FhirResource } from 'fhir/r4'; // eslint-disable-line import/no-extraneous-dependencies

// export interface Dictionary<Type> {
//   [key: string]: Type
// }

export interface TypedBundleEntry<Type extends FhirResource> extends BundleEntry {
  resource: Type
}

export interface TypedBundle<Type extends FhirResource> extends Bundle {
  entry: TypedBundleEntry<Type>[]
}

export interface TimelineResource extends FhirResource {
  timelineDate: Date
}

export interface BloodPressureData {
  code: string | void
  valueQuantity: string | void
}
