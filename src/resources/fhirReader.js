export const getResources = (response) => {
  console.log('response: ', response)
  return response?.entry
}

export const getPatient = (resources) => resources.find(resource => resource.resource.resourceType === "Patient")

export const getPatientName = (patient) => {
  const nameData = patient?.resource?.name?.[0]
  const given = nameData.given?.[0]
  const family = nameData.family
  return `${given} ${family}`
}

export const getResourceType = (resource) => {
  if (getResourceCount(resource) > 0) {
    return getBundleResourceType(resource)
  }
  return resource.resource.resourceType
}

export const getBundleResourceType = (resource) => {
  return resource.resource.entry?.[0]?.resource?.resourceType
}

export const getResourceCount = (resource) => {
  if (resource.resource?.total > 0) {
    return resource.resource?.total
  }
  return null
}

export const getResourcesByCode = (resource, code) => {
  return resource.resource.entry.filter(entry => entry.resource.category[0].coding[0].code === code)
}

// export const createResourceTypeBundle = (resources, code) => {

// }