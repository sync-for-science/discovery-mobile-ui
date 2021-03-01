import { createSelector } from '@reduxjs/toolkit';
import RESOURCE_TYPES from '../../resources/resourceTypes';

const resourcesSelector = (state) => state.resources;

const resourceIdsGroupedByTypeSelector = (state) => state.resourceIdsGroupedByType;

const resourceTypeFiltersSelector = (state) => state.resourceTypeFilters;

export const patientSelector = createSelector(
  [resourcesSelector, resourceIdsGroupedByTypeSelector],
  (resources, resourceIdsGroupedByType) => {
    const patient = resourceIdsGroupedByType?.Patient;
    if (!patient) {
      return null;
    }
    const patientId = Array.from(patient?.Other)[0];
    return resources[patientId];
  },
);

export const supportedResourcesSelector = createSelector(
  [resourceIdsGroupedByTypeSelector],
  (resourceIdsGroupedByType) => Object.entries(resourceIdsGroupedByType)
  // do not include Patient, Observation, or unknown/unsupported:
    .filter(([resourceType]) => !!RESOURCE_TYPES[resourceType])
    // sort by label:
    .sort(([t1], [t2]) => ((RESOURCE_TYPES[t1] < RESOURCE_TYPES[t2]) ? -1 : 1))
    .reduce((acc, [resourceType, resourceIds]) => ({
      ...acc,
      [resourceType]: resourceIds,
    }), {}),
);

export const supportedResourceTypeFiltersSelector = createSelector(
  [resourceTypeFiltersSelector],
  (resourceTypeFilters) => Object.entries(resourceTypeFilters)
  // do not include Patient, Observation, or unknown/unsupported:
    .filter(([resourceType]) => !!RESOURCE_TYPES[resourceType])
    // sort by label:
    .sort(([t1], [t2]) => ((RESOURCE_TYPES[t1] < RESOURCE_TYPES[t2]) ? -1 : 1))
    .reduce((acc, [resourceType, resourceIds]) => ({
      ...acc,
      [resourceType]: resourceIds,
    }), {}),
);

export const selectedResourceTypeSelector = createSelector(
  [resourceTypeFiltersSelector],
  (resourceTypeFilters) => {
    const selectedResourceType = Object.entries(resourceTypeFilters)
      .filter(([, value]) => value.selected === true)?.[0]?.[0];
    return selectedResourceType;
  },
);
