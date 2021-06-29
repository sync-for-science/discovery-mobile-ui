declare namespace s4s {
  interface Resource extends fhir4.Resource {
    timelineDate: Date
  }
  interface BloodPressureData {
    code: string | undefined,
    valueQuantity: string
  }
}
