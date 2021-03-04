import { createSelector } from '@reduxjs/toolkit';
import { pick, values } from 'ramda';
import {
  compareAsc, format, parse, intervalToDuration,
} from 'date-fns';

import RESOURCE_TYPES from '../../resources/resourceTypes';

const resourcesSelector = (state) => state.resources;

const resourceIdsGroupedByTypeSelector = (state) => state.resourceIdsGroupedByType;

const selectedResourceTypeSelector = (state) => state.selectedResourceType;

export const dateRangeFilterFiltersSelector = (state) => state.dateRangeFilter;

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
    .sort(([t1], [t2]) => ((RESOURCE_TYPES[t1].toLowerCase() < RESOURCE_TYPES[t2].toLowerCase()) ? -1 : 1)) // eslint-disable-line max-len
    .reduce((acc, [resourceType, subTypes]) => {
      const totalCount = values(subTypes).reduce((count, idSet) => count + idSet.size, 0);
      return acc.concat({
        resourceType,
        totalCount,
        subTypes,
      });
    }, []),
);

export const flattenedSubTypeResourcesSelector = createSelector(
  [supportedResourcesSelector, resourceIdsGroupedByTypeSelector],
  (supportedResources, resourceIdsGroupedByType) => {
    const resourceSubTypes = {};
    supportedResources.forEach((resourceTypeObject) => {
      const { resourceType, subTypes } = resourceTypeObject;
      const subTypesArray = Object.keys(subTypes);
      subTypesArray.forEach((subType) => {
        resourceSubTypes[subType] = resourceIdsGroupedByType[resourceType][subType];
      });
    });
    return resourceSubTypes;
  },
);

export const selectedSubTypeResourcesSelector = createSelector(
  [resourceIdsGroupedByTypeSelector, selectedResourceTypeSelector],
  (resourceIdsGroupedByType, selectedResourceType) => (
    resourceIdsGroupedByType[selectedResourceType]
  ),
);

const pickTimelineFields = (resource) => pick(['id', 'timelineDate'], resource);
const sortByDate = ({ timelineDate: t1 }, { timelineDate: t2 }) => compareAsc(t1, t2);

const timelineItemSelector = createSelector(
  [resourcesSelector],
  (resources) => values(resources)
    .filter(({ type }) => RESOURCE_TYPES[type])
    .filter((r) => r.timelineDate) // must have timelineDate
    .map(pickTimelineFields)
    .sort(sortByDate),
);

export const timelinePropsSelector = createSelector(
  [timelineItemSelector],
  (timelineItems) => ({
    minimumDate: timelineItems[0]?.timelineDate,
    maximumDate: timelineItems[timelineItems.length - 1]?.timelineDate,
  }),
);

export const patientAgeAtResourcesSelector = createSelector(
  [patientSelector, timelineItemSelector],
  (patient, timelineItems) => {
    if (!patient) {
      return {};
    }
    const birthDate = parse(patient?.birthDate, 'yyyy-MM-dd', new Date());
    return timelineItems.reduce((acc, { id, timelineDate }) => {
      const resourceDate = format(new Date(timelineDate), 'yyyy-MM-dd');
      const ageAtResourceDate = intervalToDuration({
        start: birthDate,
        end: parse(resourceDate, 'yyyy-MM-dd', new Date()),
      });

      acc[id] = ageAtResourceDate;

      return acc;
    });
  },
);
