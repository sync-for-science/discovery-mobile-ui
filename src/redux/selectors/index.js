import { createSelector } from '@reduxjs/toolkit';
import { pick, values } from 'ramda';
import {
  startOfDay, endOfDay, differenceInDays,
  compareAsc, format, parse, intervalToDuration, isWithinInterval,
} from 'date-fns';

import { createIntervalMap, generateNextIntervalFunc } from './timeline-intervals';

import { PLURAL_RESOURCE_TYPES } from '../../resources/resourceTypes';
import { FOCUSED } from '../../constants/marked-status';

export const authSelector = (state) => state.auth.authResult;

const resourcesSelector = (state) => state.resources;

const resourceIdsGroupedByTypeSelector = (state) => state.resourceIdsGroupedByType;

const selectedResourceTypeSelector = (state) => state.selectedResourceType;

export const dateRangeFilterFiltersSelector = (state) => state.dateRangeFilter;

const resourceTypeFiltersSelector = (state) => state.resourceTypeFilters;

const collectionsSelector = (state) => state.collections;

const selectedCollectionSelector = (state) => state.selectedCollection;

const showCollectionOnlySelector = (state) => state.showCollectionOnly;

const showMarkedOnlySelector = (state) => state.showMarkedOnly;

export const markedResourcesSelector = (state) => state.markedResources;

export const collectionSelector = createSelector(
  [collectionsSelector, selectedCollectionSelector],
  (collections, selectedCollection) => collections[selectedCollection],
);

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

export const providersSelector = createSelector(
  [resourcesSelector, resourceIdsGroupedByTypeSelector],
  (resources, resourceIdsGroupedByType) => {
    const serviceProviders = resourceIdsGroupedByType?.Organization?.Other;
    if (serviceProviders) {
      return Array.from(serviceProviders).map((id) => resources[id]);
    }
    return [];
  },
);

// eslint-disable-next-line max-len
const sortEntriesByResourceType = ([t1], [t2]) => ((PLURAL_RESOURCE_TYPES[t1].toLowerCase() < PLURAL_RESOURCE_TYPES[t2].toLowerCase()) ? -1 : 1);

export const supportedResourcesSelector = createSelector(
  [resourceIdsGroupedByTypeSelector],
  (resourceIdsGroupedByType) => Object.entries(resourceIdsGroupedByType)
    // do not include Patient, Observation, or unknown/unsupported:
    .filter(([type]) => !!PLURAL_RESOURCE_TYPES[type]) // derived "type" includes: lab/vitals
    .sort(sortEntriesByResourceType)
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

const pickTimelineFields = (resource) => pick(['id', 'timelineDate', 'type', 'subType'], resource);

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
  (collections, selectedCollectionId) => collections[selectedCollectionId]?.resourceIds,
);

const markedResourceIdsSelector = createSelector(
  [collectionsSelector, selectedCollectionSelector],
  (collections, selectedCollectionId) => collections[selectedCollectionId]?.markedResources?.marked,
);

const subTypeResourceIdsSelector = createSelector(
  [resourcesSelector],
  (resources) => Object.entries(resources).reduce((acc, [resourceId, resourceValues]) => {
    if (!acc[resourceValues.subType]) {
      acc[resourceValues.subType] = new Set();
    }
    acc[resourceValues.subType].add(resourceId);
    return acc;
  }, {}),
);

const filteredResourceTypesSelector = createSelector(
  [
    resourcesSelector,
    collectionResourceIdsSelector,
    markedResourceIdsSelector,
    timelineItemsInRangeSelector,
    subTypeResourceIdsSelector,
  ],
  (
    resources,
    collectionResourceIdsObjects,
    markedResourceIdsObjects,
    timelineItemsInRange,
    subTypeResourceIds,
  ) => {
    if (!collectionResourceIdsObjects) {
      return {};
    }
    const collectionResourceIds = Object.keys(collectionResourceIdsObjects);
    const markedResourceIds = Object.keys(markedResourceIdsObjects);
    return [...timelineItemsInRange].reverse().reduce((acc, { id, type, subType }) => {
      if (!acc[type]) {
        acc[type] = {};
      }
      if (!acc[type].subTypes) {
        acc[type].subTypes = {};
      }
      if (!acc[type].subTypes[subType]) {
        acc[type].subTypes[subType] = {};
        acc[type].subTypes[subType].resourceIds = Array.from(subTypeResourceIds[subType]);
        acc[type].subTypes[subType].count = Array.from(subTypeResourceIds[subType]).length;
        acc[type].subTypes[subType].dateFilteredResourceIds = [];
        acc[type].subTypes[subType].dateFilteredCount = 0;
        acc[type].subTypes[subType].collectionDateFilteredResourceIds = [];
        acc[type].subTypes[subType].collectionDateFilteredCount = 0;
        acc[type].subTypes[subType].collectionDateRange = {};
        acc[type].subTypes[subType].markedDateFilteredResourceIds = [];
        acc[type].subTypes[subType].markedDateFilteredCount = 0;
      }
      acc[type].subTypes[subType].dateFilteredResourceIds.push(id);
      acc[type].subTypes[subType].dateFilteredCount = (
        acc[type].subTypes[subType].dateFilteredResourceIds.length
      );

      if (collectionResourceIds.includes(id)) {
        acc[type].subTypes[subType].collectionDateFilteredResourceIds.push(id);
        acc[type].subTypes[subType].collectionDateFilteredCount = (
          acc[type].subTypes[subType].collectionDateFilteredResourceIds.length
        );
      }

      if (markedResourceIds.includes(id)) {
        acc[type].subTypes[subType].markedDateFilteredResourceIds.push(id);
        acc[type].subTypes[subType].markedDateFilteredCount = (
          acc[type].subTypes[subType].markedDateFilteredResourceIds.length
        );
      }

      return acc;
    }, {});
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

export const collectionsCountSelector = createSelector(
  [collectionsSelector],
  (collections) => (Object.entries(collections).length),
);

// eslint-disable-next-line max-len
const sortMarkedItemsBySubType = ([s1], [s2]) => ((s1.toLowerCase() < s2.toLowerCase()) ? -1 : 1);

const MAX_INTERVAL_COUNT = 25;

export const timelineIntervalsSelector = createSelector(
  [timelineItemsInRangeSelector, timelineRangeSelector, markedResourcesSelector, resourcesSelector, collectionResourceIdsSelector], // eslint-disable-line max-len
  (timelineItemsInRange, timelineRange, markedResources, resources, collectionIds) => {
    let intervals = [];
    let intervalLength = 0;
    let maxCount1SD = 0; // up to mean + 1 SD
    let maxCount2SD = 0; // up to mean + 2 SD
    let maxCount = 0; // beyond mean + 2 SD
    let recordCount1SD = 0;
    let recordCount2SD = 0;
    let recordCount2SDplus = 0;

    const { dateRangeStart: minDate, dateRangeEnd: maxDate } = timelineRange;
    // alternatively:
    // const minDate = timelineItemsInRange[0]?.timelineDate;
    // const maxDate = timelineItemsInRange[timelineItemsInRange.length - 1]?.timelineDate;

    if (minDate && maxDate && timelineItemsInRange.length) {
      const numDays = Math.max(differenceInDays(maxDate, minDate), 1);
      const intervalCount = Math.min(numDays, MAX_INTERVAL_COUNT); // cannot be 0

      const intervalMap = createIntervalMap(minDate, maxDate, intervalCount);
      const getNextIntervalForDate = generateNextIntervalFunc(intervalMap, intervalCount);

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

      intervalLength = numDays / intervalCount;
    }

    const intervalsWithItems = intervals.filter(({ items }) => items.length); // has items

    if (intervalsWithItems.length) {
      const itemCounts = intervalsWithItems.map(({ items }) => items.length);
      const totalItemCount = itemCounts.reduce((acc, count) => acc + count, 0);
      const meanCountPerInterval = totalItemCount / itemCounts.length;
      const sumOfSquaredDifferences = itemCounts
        .reduce((acc, count) => acc + ((count - meanCountPerInterval) ** 2), 0);

      const populationSD = (sumOfSquaredDifferences / itemCounts.length) ** 0.5;

      // inject z score, and markedItems -- mutates intervalMap:
      intervalsWithItems.forEach((interval) => {
        const cardinality = interval.items.length;
        // eslint-disable-next-line no-param-reassign
        interval.zScore = !populationSD ? 0 : (cardinality - meanCountPerInterval) / populationSD;
        // ^ mutates intervalMap
        if (interval.zScore <= 1 && cardinality > maxCount1SD) {
          maxCount1SD = cardinality;
          recordCount1SD += cardinality;
        } else if (interval.zScore <= 2 && cardinality > maxCount2SD) {
          maxCount2SD = cardinality;
          recordCount2SD += cardinality;
        } else if (interval.zScore > 2) {
          recordCount2SDplus += cardinality;
        }

        // temporary dictionary to group items by type:
        const markedItemsDictionaryByType = interval.items
          .filter((id) => markedResources.marked[id]) // either MARKED or FOCUSED
          .reduce((acc, id) => {
            const { subType } = resources[id];
            const idsByType = acc[subType] ?? [];
            return {
              ...acc,
              [subType]: idsByType.concat(id),
            };
          }, {});

        // eslint-disable-next-line no-param-reassign
        interval.markedItems = Object.entries(markedItemsDictionaryByType)
          .sort(sortMarkedItemsBySubType) // keep cartouches in alphabetical order by subType label
          .map(([subType, items]) => ({
            subType,
            marked: items,
            focused: items.filter((id) => markedResources.marked[id] === FOCUSED),
          }));

        // eslint-disable-next-line no-param-reassign
        interval.collectionItems = interval.items.filter((id) => collectionIds[id]);
      });
    }

    return {
      startDate: minDate,
      endDate: maxDate,
      intervalCount: intervals.length,
      intervals: intervals.filter(({ items }) => items.length),
      intervalLength,
      maxCount,
      maxCount1SD,
      maxCount2SD,
      recordCount: timelineItemsInRange.length,
      recordCount1SD,
      recordCount2SD,
      recordCount2SDplus,
    };
  },
);

// selected ResourceType && in collection
const selectedResourceTypeAndCollectionDataSelector = createSelector(
  [filteredResourceTypesSelector, selectedResourceTypeSelector],
  (filteredResourceTypes, selectedResourceType) => {
    const subTypeData = {};
    Object.entries(filteredResourceTypes[selectedResourceType]).forEach(([, subTypes]) => {
      Object.entries(subTypes).forEach(([subType, subTypeValues]) => {
        if (subTypeValues.collectionDateFilteredCount > 0) {
          if (!subTypeData[subType]) {
            subTypeData[subType] = {};
          }
          subTypeData[subType] = subTypeValues;
        }
      });
    });
    return subTypeData;
  },
);

// selected ResourceType && marked
const selectedResourceTypeAndMarkedDataSelector = createSelector(
  [filteredResourceTypesSelector, selectedResourceTypeSelector],
  (filteredResourceTypes, selectedResourceType) => {
    const subTypeData = {};
    Object.entries(filteredResourceTypes[selectedResourceType]).forEach(([, subTypes]) => {
      Object.entries(subTypes).forEach(([subType, subTypeValues]) => {
        if (subTypeValues.markedDateFilteredCount > 0) {
          if (!subTypeData[subType]) {
            subTypeData[subType] = {};
          }
          subTypeData[subType] = subTypeValues;
        }
      });
    });
    return subTypeData;
  },
);

// selected ResourceType && in collection && marked
const selectedResourceTypeAndCollectionAndMarkedDataSelector = createSelector(
  [filteredResourceTypesSelector, selectedResourceTypeSelector],
  (filteredResourceTypes, selectedResourceType) => {
    const subTypeData = {};
    Object.entries(filteredResourceTypes[selectedResourceType]).forEach(([, subTypes]) => {
      Object.entries(subTypes).forEach(([subType, subTypeValues]) => {
        const collectionIds = subTypeValues.collectionDateFilteredResourceIds;
        const markedIds = subTypeValues.markedDateFilteredResourceIds;
        if (collectionIds.some((collectionId) => markedIds.includes(collectionId))) {
          if (!subTypeData[subType]) {
            subTypeData[subType] = {};
          }
          subTypeData[subType] = subTypeValues;
        }
      });
    });
    return subTypeData;
  },
);

export const catalogSubTypeDataSelector = createSelector(
  [
    filteredResourceTypesSelector,
    selectedResourceTypeSelector,
    showCollectionOnlySelector,
    showMarkedOnlySelector,
    selectedResourceTypeAndCollectionDataSelector,
    selectedResourceTypeAndMarkedDataSelector,
    selectedResourceTypeAndCollectionAndMarkedDataSelector,
  ],
  (
    filteredResourceTypes,
    selectedResourceType,
    showCollectionOnly,
    showMarkedOnly,
    selectedResourceTypeAndCollectionData,
    selectedResourceTypeAndMarkedData,
    selectedResourceTypeAndCollectionAndMarkedData,
  ) => {
    if (!selectedResourceType || !filteredResourceTypes[selectedResourceType]) {
      return {};
    }

    if (!showCollectionOnly && !showMarkedOnly) {
      return filteredResourceTypes[selectedResourceType].subTypes;
    }

    if (showCollectionOnly && !showMarkedOnly) {
      return selectedResourceTypeAndCollectionData;
    }

    if (!showCollectionOnly && showMarkedOnly) {
      return selectedResourceTypeAndMarkedData;
    }

    if (showCollectionOnly && showMarkedOnly) {
      return selectedResourceTypeAndCollectionAndMarkedData;
    }

    console.error( // eslint-disable-line no-console
      `Unknown filter setting in catalogSubTypeDataSelector, showCollectionOnly: ${showCollectionOnly}, showMarkedOnly: ${showMarkedOnly}`,
    );
    return {};
  },
);

export const collectionDateRangeSelector = createSelector(
  [resourcesSelector, selectedCollectionSelector, collectionsSelector],
  (resources, selectedCollectionId, collections) => {
    const collectionResourceIds = Object.keys(collections[selectedCollectionId]?.resourceIds);
    if (collectionResourceIds.length === 0) {
      return {
        dateRangeStart: undefined,
        dateRangeEnd: undefined,
      };
    }
    const collectionResources = Object.entries(resources).reduce((acc, [id, resourceValues]) => {
      if (collectionResourceIds.includes(id)) {
        acc.push(resourceValues);
      }
      return acc;
    }, []);
    const sortedCollectionResources = collectionResources
      .sort((a, b) => a.timelineDate - b.timelineDate);
    return {
      dateRangeStart: startOfDay(sortedCollectionResources[0].timelineDate),
      dateRangeEnd: endOfDay(
        sortedCollectionResources[sortedCollectionResources.length - 1].timelineDate,
      ),
    };
  },
);

export const markedDateRangeSelector = createSelector(
  [resourcesSelector, selectedCollectionSelector, collectionsSelector],
  (resources, selectedCollectionId, collections) => {
    const markedResourceIds = Object.keys(
      collections[selectedCollectionId]?.markedResources?.marked,
    );
    if (markedResourceIds.length === 0) {
      return {
        dateRangeStart: undefined,
        dateRangeEnd: undefined,
      };
    }
    const markedResources = Object.entries(resources).reduce((acc, [id, resourceValues]) => {
      if (markedResourceIds.includes(id)) {
        acc.push(resourceValues);
      }
      return acc;
    }, []);
    const sortedMarkedResources = markedResources
      .sort((a, b) => a.timelineDate - b.timelineDate);
    return {
      dateRangeStart: startOfDay(sortedMarkedResources[0].timelineDate),
      dateRangeEnd: endOfDay(
        sortedMarkedResources[sortedMarkedResources.length - 1].timelineDate,
      ),
    };
  },
);

export const filterTriggerDateRangeSelector = createSelector(
  [
    resourcesSelector, 
    selectedCollectionSelector, 
    collectionsSelector, 
    showMarkedOnlySelector, 
    showCollectionOnlySelector,
    (_, ownProps) => ownProps
  ],
  (
    resources, 
    selectedCollectionId, 
    collections, 
    showMarkedOnly, 
    showCollectionOnly,
    ownProps
  ) => {
    const { collection, marked } = ownProps
    console.log('collection', collection)
    const collectionResourceIds = Object.keys(collections[selectedCollectionId]?.resourceIds);
    const markedResourceIds = Object.keys(
      collections[selectedCollectionId]?.markedResources?.marked,
    );

    if ((markedResourceIds.length === 0) || (collectionResourceIds.length === 0)) {
      return {
        dateRangeStart: undefined,
        dateRangeEnd: undefined,
      };
    }

    const collectionResources = Object.entries(resources).reduce((acc, [id, resourceValues]) => {
      if (collectionResourceIds.includes(id)) {
        acc.push(resourceValues);
      }
      return acc;
    }, []);
    
    const markedResources = Object.entries(resources).reduce((acc, [id, resourceValues]) => {
      if (markedResourceIds.includes(id)) {
        acc.push(resourceValues);
      }
      return acc;
    }, []);

    const sortedCollectionResources = collectionResources
      .sort((a, b) => a.timelineDate - b.timelineDate);
    const sortedMarkedResources = markedResources
      .sort((a, b) => a.timelineDate - b.timelineDate);
    const combinedResources = [...collectionResources, ...markedResources]
      .sort((a, b) => a.timelineDate - b.timelineDate);

    console.log('showCollectionOnly', showCollectionOnly)
    console.log('showMarkedOnly', showMarkedOnly)
    if (collection) {
      if (!showCollectionOnly && !showMarkedOnly) {
        console.log('collection && !showCollectionOnly && !showMarkedOnly')
      } else if (showCollectionOnly && !showMarkedOnly) {
        console.log('collection && showCollectionOnly && !showMarkedOnly')
      } else if (!showCollectionOnly && showMarkedOnly) {
        console.log('collection && !showCollectionOnly && showMarkedOnly')
      } else if (showCollectionOnly && showMarkedOnly) {
        console.log('collection && showCollectionOnly && showMarkedOnly')
      }
    }

    if (marked) {
      if (!showCollectionOnly && !showMarkedOnly) {
        console.log('marked && !showCollectionOnly && !showMarkedOnly')
      } else if (showCollectionOnly && !showMarkedOnly) {
        console.log('marked && showCollectionOnly && !showMarkedOnly')
      } else if (!showCollectionOnly && showMarkedOnly) {
        console.log('marked && !showCollectionOnly && showMarkedOnly')
      } else if (showCollectionOnly && showMarkedOnly) {
        console.log('marked && showCollectionOnly && showMarkedOnly')
      }
    }

    return {
      dateRangeStart: startOfDay(sortedMarkedResources[0].timelineDate),
      dateRangeEnd: endOfDay(
        sortedMarkedResources[sortedMarkedResources.length - 1].timelineDate,
      ),
    };
  },
);
