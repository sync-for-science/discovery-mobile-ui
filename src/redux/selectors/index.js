import { createSelector } from '@reduxjs/toolkit';
import { pick, values } from 'ramda';
import {
  compareAsc, format, parse, intervalToDuration, isWithinInterval, startOfDay, endOfDay,
} from 'date-fns';

import { createIntervalMap, generateNextIntervalFunc } from './timeline-intervals';

import { PLURAL_RESOURCE_TYPES } from '../../resources/resourceTypes';

const resourcesSelector = (state) => state.resources;

const resourceIdsGroupedByTypeSelector = (state) => state.resourceIdsGroupedByType;

const selectedResourceTypeSelector = (state) => state.selectedResourceType;

export const dateRangeFilterFiltersSelector = (state) => state.dateRangeFilter;

const resourceTypeFiltersSelector = (state) => state.resourceTypeFilters;

const collectionsSelector = (state) => state.collections;

const selectedCollectionSelector = (state) => state.selectedCollection;

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
    .filter(([resourceType]) => !!PLURAL_RESOURCE_TYPES[resourceType])
    // sort by label:
    .sort(([t1], [t2]) => ((PLURAL_RESOURCE_TYPES[t1].toLowerCase() < PLURAL_RESOURCE_TYPES[t2].toLowerCase()) ? -1 : 1)) // eslint-disable-line max-len
    .reduce((acc, [resourceType, subTypes]) => {
      const totalCount = values(subTypes).reduce((count, idSet) => count + idSet.size, 0);
      return acc.concat({
        resourceType,
        totalCount,
        subTypes,
      });
    }, []),
);

const timelineResourcesSelector = createSelector(
  [resourcesSelector],
  (resources) => values(resources)
    .filter(({ type }) => PLURAL_RESOURCE_TYPES[type])
    .filter((r) => r.timelineDate), // must have timelineDate
);

const pickTimelineFields = (resource) => pick(['id', 'timelineDate', 'type'], resource);

const sortByDate = ({ timelineDate: t1 }, { timelineDate: t2 }) => compareAsc(t1, t2);

export const sortedTimelineItemsSelector = createSelector(
  [timelineResourcesSelector],
  (resources) => resources
    .map(pickTimelineFields)
    .sort(sortByDate),
);

export const timelinePropsSelector = createSelector(
  [sortedTimelineItemsSelector],
  (items) => {
    const r1 = items[0]; // might be same as r2
    const r2 = items[items.length - 1];
    return ({
      minimumDate: r1 && startOfDay(r1.timelineDate),
      maximumDate: r2 && endOfDay(r2.timelineDate),
    });
  },
);

// either user-selected values (undefined, by default), or: min / max dates of resources
const timelineRangeSelector = createSelector(
  [dateRangeFilterFiltersSelector, timelinePropsSelector],
  (dateRangeFilterFilters, timelineProps) => {
    const { minimumDate, maximumDate } = timelineProps;
    const { dateRangeStart = minimumDate, dateRangeEnd = maximumDate } = dateRangeFilterFilters;
    return {
      dateRangeStart,
      dateRangeEnd,
    };
  },
);

const timelineItemsInRangeSelector = createSelector(
  [sortedTimelineItemsSelector, timelineRangeSelector, resourceTypeFiltersSelector],
  (sortedTimelineItems, { dateRangeStart, dateRangeEnd }, resourceTypeFilters) => {
    if (!dateRangeStart || !dateRangeEnd) {
      return [];
    }
    return sortedTimelineItems
      .filter(({ type }) => resourceTypeFilters[type])
      .filter(({ timelineDate }) => isWithinInterval(
        timelineDate,
        {
          start: dateRangeStart,
          end: dateRangeEnd,
        },
      ));
  },
);

const INTERVAL_COUNT = 100;

export const timelineIntervalsSelector = createSelector(
  [timelineItemsInRangeSelector, timelineRangeSelector],
  (timelineItemsInRange, timelineRange) => {
    let intervals = [];
    let maxCount1SD = 0; // up to mean + 1 SD
    let maxCount2SD = 0; // up to mean + 2 SD
    let maxCount = 0; // beyond mean + 2 SD
    const { dateRangeStart: minDate, dateRangeEnd: maxDate } = timelineRange;
    // alternatively:
    // const minDate = timelineItemsInRange[0]?.timelineDate;
    // const maxDate = timelineItemsInRange[timelineItemsInRange.length - 1]?.timelineDate;

    if (minDate && maxDate && timelineItemsInRange.length) {
      const intervalMap = createIntervalMap(minDate, maxDate, INTERVAL_COUNT);
      const getNextIntervalForDate = generateNextIntervalFunc(intervalMap, INTERVAL_COUNT);

      timelineItemsInRange.forEach(({ id, timelineDate }) => {
        const currentInterval = getNextIntervalForDate(timelineDate);
        if (currentInterval) {
          currentInterval.items.push(id); // < mutates intervalMap
          if (currentInterval.items.length > maxCount) {
            maxCount = currentInterval.items.length;
          }
        } else {
          console.warn('no interval for date: ', timelineDate); // eslint-disable-line no-console
        }
      });
      intervals = intervalMap;
    }

    const intervalsWithItems = intervals.filter(({ items }) => items.length); // has items

    if (intervalsWithItems.length) {
      const itemCounts = intervalsWithItems.map(({ items }) => items.length);
      const totalItemCount = itemCounts.reduce((acc, count) => acc + count, 0);
      const meanCountPerInterval = totalItemCount / itemCounts.length;
      const sumOfSquaredDifferences = itemCounts
        .reduce((acc, count) => acc + ((count - meanCountPerInterval) ** 2), 0);

      const populationSD = (sumOfSquaredDifferences / itemCounts.length) ** 0.5;

      // inject z score:
      intervalsWithItems.forEach((interval) => {
        // eslint-disable-next-line no-param-reassign
        interval.zScore = (interval.items.length - meanCountPerInterval) / populationSD;
        // ^ mutates intervalMap
        if (interval.zScore <= 1 && interval.items.length > maxCount1SD) {
          maxCount1SD = interval.items.length;
        } else if (interval.zScore <= 2 && interval.items.length > maxCount2SD) {
          maxCount2SD = interval.items.length;
        }
      });
    }

    return {
      startDate: minDate,
      endDate: maxDate,
      intervals,
      maxCount1SD,
      maxCount2SD,
      maxCount,
    };
  },
);

export const patientAgeAtResourcesSelector = createSelector(
  [patientSelector, sortedTimelineItemsSelector],
  (patient, timelineItems) => {
    if (!patient) {
      return {};
    }
    const birthDate = parse(patient?.birthDate, 'yyyy-MM-dd', new Date());
    const patientAgeAtResources = {};
    timelineItems.forEach(({ id, timelineDate }) => {
      const resourceDate = format(new Date(timelineDate), 'yyyy-MM-dd');
      const ageAtResourceDate = intervalToDuration({
        start: birthDate,
        end: parse(resourceDate, 'yyyy-MM-dd', new Date()),
      });
      if (!patientAgeAtResources[id]) {
        patientAgeAtResources[id] = ageAtResourceDate;
      }
    });
    return patientAgeAtResources;
  },
);

export const orderedResourceTypeFiltersSelector = createSelector(
  [resourceTypeFiltersSelector],
  (resourceTypeFilters) => Object.keys(resourceTypeFilters).sort()
    .reduce((acc, resourceType) => {
      acc[resourceType] = resourceTypeFilters[resourceType];
      return acc;
    }, {}),
);

export const lastAddedResourceIdSelector = createSelector(
  [collectionsSelector, selectedCollectionSelector],
  (collections, selectedCollectionId) => collections[selectedCollectionId].lastAddedResourceId,
);

export const collectionResourceIdsSelector = createSelector(
  [collectionsSelector, selectedCollectionSelector],
  (collections, selectedCollectionId) => collections[selectedCollectionId].resourceIds,
);

const selectedCollectionResourceIdsSelector = createSelector(
  [collectionsSelector, selectedCollectionSelector],
  (collections, selectedCollection) => collections[selectedCollection]?.resourceIds,
);

const isResourceInDateRange = (resource, dateRangeStart, dateRangeEnd) => {
  const { timelineDate } = resource;
  if (!timelineDate) {
    console.info('record does not have an timelineDate, resourceId: ', resource.id); // eslint-disable-line no-console
    return false;
  }
  if (!dateRangeStart || !dateRangeEnd) { return true; }
  return (
    isWithinInterval(
      timelineDate, { start: startOfDay(dateRangeStart), end: endOfDay(dateRangeEnd) },
    )
  );
};

const filteredResourceTypesSelector = createSelector(
  [
    resourceTypeFiltersSelector,
    resourceIdsGroupedByTypeSelector,
    selectedResourceTypeSelector,
    selectedCollectionResourceIdsSelector,
    dateRangeFilterFiltersSelector,
    resourcesSelector,
    timelinePropsSelector,
  ],
  (
    resourceTypeFilter,
    resourceIdsGroupedByType,
    selectedResourceType,
    selectedCollectionResourceIdsObjects,
    dateRangeFilterFilters,
    resources,
    timelineProps,
  ) => {
    if (!selectedCollectionResourceIdsObjects) {
      return {};
    }
    const { minimumDate, maximumDate } = timelineProps;
    const { dateRangeStart, dateRangeEnd } = dateRangeFilterFilters;
    const activeDateStart = dateRangeStart || minimumDate;
    const activeDateEnd = dateRangeEnd || maximumDate;
    const selectedCollectionResourceIds = Object.keys(selectedCollectionResourceIdsObjects);
    return Object.keys(resourceTypeFilter).reduce((acc, resourceType) => {
      if (resourceTypeFilter[resourceType]) {
        acc[resourceType] = {};
        acc[resourceType].selected = false;
        if (selectedResourceType === resourceType) {
          acc[resourceType].selected = true;
        }
        Object.entries(resourceIdsGroupedByType[resourceType]).forEach(([subType, resourceIds]) => {
          if (!acc[resourceType].subTypes) {
            acc[resourceType].subTypes = {};
          }
          if (!acc[resourceType].subTypes[subType]) {
            acc[resourceType].subTypes[subType] = {};
          }
          const subTypeResourceIds = Array.from(resourceIds);
          acc[resourceType].subTypes[subType].resourceIds = subTypeResourceIds;
          acc[resourceType].subTypes[subType].count = subTypeResourceIds.length;
          const dateFilteredResourceIds = subTypeResourceIds
            .filter((subTypeResourceId) => isResourceInDateRange(
              resources[subTypeResourceId], activeDateStart, activeDateEnd,
            ));
          acc[resourceType].subTypes[subType].dateFilteredResourceIds = dateFilteredResourceIds;
          acc[resourceType].subTypes[subType].dateFilteredCount = dateFilteredResourceIds.length;
          const collectionDateFilteredResourceIds = dateFilteredResourceIds
            .filter((dateFilteredResourceId) => selectedCollectionResourceIds
              .includes(dateFilteredResourceId));
          acc[resourceType].subTypes[subType]
            .collectionDateFilteredResourceIds = collectionDateFilteredResourceIds;
          acc[resourceType].subTypes[subType]
            .collectionDateFilteredCount = collectionDateFilteredResourceIds.length;
        });
      }

      return acc;
    }, {});
  },
);

export const selectedFlattenedSubTypesSelector = createSelector(
  [filteredResourceTypesSelector, selectedResourceTypeSelector],
  (filteredResourceTypes, selectedResourceType) => {
    if (!selectedResourceType || !filteredResourceTypes[selectedResourceType]) {
      return {};
    }
    return filteredResourceTypes[selectedResourceType].subTypes;
  },
);

export const collectionFlattenedSubTypesSelector = createSelector(
  [filteredResourceTypesSelector],
  (filteredResourceTypes) => {
    const collectionFlattenedSubTypes = {};
    Object.entries(filteredResourceTypes).forEach(([, resourceTypeValues]) => {
      const { subTypes } = resourceTypeValues;
      Object.entries(subTypes).forEach(([subType, subTypeValues]) => {
        if (subTypeValues.collectionDateFilteredCount > 0) {
          if (!collectionFlattenedSubTypes[subType]) {
            collectionFlattenedSubTypes[subType] = {};
          }
          collectionFlattenedSubTypes[subType] = subTypeValues;
        }
      });
    });
    return collectionFlattenedSubTypes;
  },
);
