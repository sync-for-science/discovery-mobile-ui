import { createSelector } from '@reduxjs/toolkit';
import {
  pick, values,
} from 'ramda';
import { produce } from 'immer';
import {
  startOfDay, endOfDay, differenceInDays,
  compareAsc, isWithinInterval,
} from 'date-fns';

import { createIntervalMap, generateNextIntervalFunc } from './timeline-intervals';

import { PLURAL_RESOURCE_TYPES, SINGULAR_RESOURCE_TYPES } from '../../constants/resource-types';
import { formatDate } from '../../resources/fhirReader';
import { FOCUSED } from '../../constants/marked-status';
import { SORT_DESC, sortFields } from '../../constants/sorting';

export const authSelector = (state) => state.auth.authResult;

const resourcesSelector = (state) => state.resources;

export const resourceByIdSelector = (state, ownProps) => state.resources[ownProps.resourceId];

const collectionsSelector = (state) => state.collections;

export const activeCollectionIdSelector = (state) => state.activeCollectionId;

export const activeCollectionSelector = createSelector(
  [collectionsSelector, activeCollectionIdSelector],
  (collections, activeCollectionId) => collections[activeCollectionId],
);

export const activeCollectionResourceTypeSelector = createSelector(
  [activeCollectionSelector],
  (activeCollection) => activeCollection.selectedResourceType,
);

export const activeCollectionResourceTypeFiltersSelector = createSelector(
  [activeCollectionSelector],
  (activeCollection) => activeCollection.resourceTypeFilters,
);

export const activeCollectionDateRangeFilterSelector = createSelector(
  [activeCollectionSelector],
  (activeCollection) => activeCollection.dateRangeFilter,
);

export const activeCollectionMarkedResourcesSelector = createSelector(
  [activeCollectionSelector],
  (activeCollection) => Object.entries(activeCollection.records)
    .filter(([, attributes]) => attributes?.highlight)
    .reduce((acc, [id, attributes]) => ({
      ...acc,
      marked: {
        ...acc.marked,
        [id]: attributes.highlight,
      },
    }), {
      focusedSubtype: activeCollection.focusedSubtype,
      marked: {},
    }),
);

export const activeCollectionShowCollectionOnlySelector = createSelector(
  [activeCollectionSelector],
  (activeCollection) => activeCollection.showCollectionOnly,
);

export const activeCollectionShowMarkedOnlySelector = createSelector(
  [activeCollectionSelector],
  (activeCollection) => activeCollection.showMarkedOnly,
);

export const activeCollectionResourceIdsSelector = createSelector(
  [activeCollectionSelector],
  (activeCollection) => Object.entries(activeCollection.records)
    .filter(([, record]) => record.saved === true)
    .reduce((acc, [id]) => ({ ...acc, [id]: true }), {}),
);

export const patientSelector = createSelector(
  [resourcesSelector],
  (resources) => values(resources).find((r) => r.type === 'Patient'),
);

export const serviceProviderSelector = createSelector(
  [resourceByIdSelector, resourcesSelector],
  (resource, allResources) => {
    const ref = resource?.serviceProvider?.reference;
    if (ref) {
      const matches = ref.match(/(#|\/)(.+)/);
      const resourceId = matches.pop();
      const serviceProvider = allResources[resourceId];
      if (serviceProvider) {
        return serviceProvider;
      }
      console.warn(`Expected resource for reference "${ref}"`); // eslint-disable-line no-console
    }
    return null;
  },
);

export const providersSelector = createSelector(
  [resourcesSelector],
  (resources) => values(resources).filter((r) => r.type === 'Organization'),
);

const pickTimelineFields = (resource) => pick(['id', 'timelineDate', 'type', 'subType'], resource);

const sortByDate = ({ timelineDate: t1 }, { timelineDate: t2 }) => compareAsc(t1, t2);

export const allValidRecordsSortedByDateSelector = createSelector(
  [resourcesSelector],
  (resources) => values(resources)
    .filter(({ type }) => PLURAL_RESOURCE_TYPES[type])
    .filter((r) => r.timelineDate) // must have timelineDate
    .map(pickTimelineFields)
    .sort(sortByDate),
);

export const allValidRecordsGroupedByTypeSelector = createSelector(
  [allValidRecordsSortedByDateSelector],
  (allItems) => {
    const typeMap = allItems
      .reduce((acc, item) => {
        const { type } = item;
        return produce(acc, (draft) => {
          // eslint-disable-next-line no-param-reassign
          draft[type] = draft[type] ?? [];
          draft[type].push(item);
        });
      }, {});
    return Object.entries(typeMap)
      .map(([type, items]) => ({
        type,
        label: PLURAL_RESOURCE_TYPES[type],
        items,
      }))
      .sort(({ label: l1 }, { label: l2 }) => ((l1.toLowerCase() < l2.toLowerCase()) ? -1 : 1));
  },
);

export const filteredRecordsSelector = createSelector(
  [allValidRecordsSortedByDateSelector, activeCollectionSelector],
  (items, activeCollection) => {
    const {
      resourceTypeFilters,
      showCollectionOnly,
      showMarkedOnly,
      records,
    } = activeCollection;
    return items
      .filter(({ type }) => resourceTypeFilters[type])
      .filter(({ id }) => !showCollectionOnly || (showCollectionOnly && records[id]?.saved))
      .filter(({ id }) => !showMarkedOnly || (showMarkedOnly && records[id]?.highlight));
  },
);

export const dateRangeForAllRecordsSelector = createSelector(
  [allValidRecordsSortedByDateSelector],
  (items) => {
    const r1 = items[0]; // might be same as r2
    const r2 = items[items.length - 1];
    return ({
      minimumDate: r1 && startOfDay(r1.timelineDate),
      maximumDate: r2 && endOfDay(r2.timelineDate),
    });
  },
);

export const dateRangeForFilteredRecordsSelector = createSelector(
  [filteredRecordsSelector],
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
  [activeCollectionDateRangeFilterSelector, dateRangeForFilteredRecordsSelector],
  (dateRangeFilterFilters, timelineProps) => {
    const { minimumDate, maximumDate } = timelineProps;
    const { dateRangeStart = minimumDate, dateRangeEnd = maximumDate } = dateRangeFilterFilters;
    return {
      dateRangeStart,
      dateRangeEnd,
    };
  },
);

const filteredItemsInDateRangeSelector = createSelector(
  // eslint-disable-next-line max-len
  [filteredRecordsSelector, timelineRangeSelector, activeCollectionResourceTypeFiltersSelector],
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

const sortedGroupedRecordsByType = (records, isDescending) => {
  // eslint-disable-next-line no-nested-ternary
  const sortedRecords = isDescending === undefined
    ? [...records].reverse()
    : (isDescending ? [...records].reverse() : records);

  const typeMap = sortedRecords
    .reduce((acc, record) => {
      const { type, subType } = record;
      return produce(acc, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft[type] = draft[type] ?? {};
        // eslint-disable-next-line no-param-reassign
        draft[type][subType] = draft[type][subType] ?? [];
        draft[type][subType].push(record.id);
      });
    }, {});

  return Object
    .entries(typeMap)
    .reduce((acc, [type, subTypes]) => acc.concat({
      type,
      label: SINGULAR_RESOURCE_TYPES[type],
      subTypes: Object
        .entries(subTypes)
        .map(([subType, recordIds]) => ({ subType, recordIds }))
        .sort(({ subType: s1 }, { subType: s2 }) => (
          (s1.toLowerCase() < s2.toLowerCase()) ? -1 : 1)),
    }), [])
    .sort(({ label: l1 }, { label: l2 }) => ((l1.toLowerCase() < l2.toLowerCase()) ? -1 : 1));
};

export const selectedRecordsGroupedByTypeSelector = createSelector(
  [filteredItemsInDateRangeSelector, activeCollectionResourceTypeSelector],
  (items, selectedResourceType) => {
    if (!selectedResourceType) {
      return [];
    }

    return sortedGroupedRecordsByType(items)
      .filter((group) => group.type === selectedResourceType);
  },
);

const savedItemsSelector = createSelector(
  [resourcesSelector, activeCollectionResourceIdsSelector],
  (resources, saved) => values(resources)
    .filter(({ id }) => saved[id])
    .map(pickTimelineFields)
    .sort(sortByDate),
);

// used by SubTypeAccordion in CatalogScreen and RecordType sorting in DetailsPanel
export const savedRecordsGroupedByTypeSelector = createSelector(
  [savedItemsSelector, activeCollectionSelector],
  (savedItems, collection) => {
    const { savedRecordsSortingState: sortingState } = collection;
    const { RECORD_TYPE } = sortFields;
    const isDescending = sortingState.sortDirections[RECORD_TYPE] === SORT_DESC;
    return sortedGroupedRecordsByType(savedItems, isDescending);
  },
);

const sortedRecordsByRecordDate = (records, isDescending) => {
  const sortedRecords = isDescending ? [...records].reverse() : records;
  const typeMap = sortedRecords
    .reduce((acc, record) => {
      const { timelineDate, subType, type } = record;
      const formattedDay = formatDate(timelineDate);
      return produce(acc, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft[formattedDay] = draft[formattedDay] ?? {};
        // eslint-disable-next-line no-param-reassign
        draft[formattedDay][type] = draft[formattedDay][type] ?? {};
        // eslint-disable-next-line no-param-reassign
        draft[formattedDay][type][subType] = draft[formattedDay][type][subType] ?? [];
        // eslint-disable-next-line no-param-reassign
        draft[formattedDay][type][subType].push(record.id);
      });
    }, {});

  return Object
    .entries(typeMap)
    .reduce((acc1, [date, typeValues]) => {
      const typeData = Object
        .entries(typeValues)
        .reduce((acc2, [type, subTypeValues]) => {
          const subTypeData = Object
            .entries(subTypeValues)
            .reduce((acc3, [subType, recordIds]) => acc3.concat({
              subType,
              recordIds,
            }), []);
          return acc2.concat({
            type,
            label: SINGULAR_RESOURCE_TYPES[type],
            subTypes: subTypeData,
          });
        }, []);
      return acc1.concat({
        date,
        types: typeData,
      });
    }, []);
};

export const savedRecordsByRecordDateSelector = createSelector(
  [savedItemsSelector, (_, ownProps) => ownProps],
  (items, ownProps) => {
    const { isDescending } = ownProps;
    return sortedRecordsByRecordDate(items, isDescending);
  },
);

export const orderedResourceTypeFiltersSelector = createSelector(
  [activeCollectionResourceTypeFiltersSelector],
  (activeCollectionTypeFilters) => Object.entries(activeCollectionTypeFilters)
    .map(([type, typeIsEnabled]) => ({
      type,
      typeIsEnabled,
      label: PLURAL_RESOURCE_TYPES[type],
    }))
    .sort(({ label: l1 }, { label: l2 }) => ((l1.toLowerCase() < l2.toLowerCase()) ? -1 : 1)),
);

export const collectionsCountSelector = createSelector(
  [collectionsSelector],
  (collections) => (Object.entries(collections).length),
);

// eslint-disable-next-line max-len
const sortMarkedItemsBySubType = ([s1], [s2]) => ((s1.toLowerCase() < s2.toLowerCase()) ? -1 : 1);

const MAX_INTERVAL_COUNT = 25;

export const timelineIntervalsSelector = createSelector(
  [
    filteredItemsInDateRangeSelector, timelineRangeSelector, activeCollectionSelector, resourcesSelector], // eslint-disable-line max-len
  (filteredItemsInDateRange, timelineRange, activeCollection, resources) => {
    const { records } = activeCollection;

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
    // const minDate = filteredItemsInDateRange[0]?.timelineDate;
    // const maxDate = filteredItemsInDateRange[filteredItemsInDateRange.length - 1]?.timelineDate;

    if (minDate && maxDate && filteredItemsInDateRange.length) {
      const numDays = Math.max(differenceInDays(maxDate, minDate), 1);
      const intervalCount = Math.min(numDays, MAX_INTERVAL_COUNT); // cannot be 0

      const intervalMap = createIntervalMap(minDate, maxDate, intervalCount);
      const getNextIntervalForDate = generateNextIntervalFunc(intervalMap, intervalCount);

      filteredItemsInDateRange.forEach(({ id, timelineDate }) => {
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
          .filter((id) => records[id]?.highlight) // either MARKED or FOCUSED
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
            focused: items.filter((id) => records[id]?.highlight === FOCUSED),
          }));

        // eslint-disable-next-line no-param-reassign
        interval.collectionItems = interval.items.filter((id) => records[id]?.saved);
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
      recordCount: filteredItemsInDateRange.length,
      recordCount1SD,
      recordCount2SD,
      recordCount2SDplus,
    };
  },
);
