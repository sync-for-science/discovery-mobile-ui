import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { equals } from 'ramda';
import { actionTypes } from '../action-types';
import processResource from './process-resources';
import { PLURAL_RESOURCE_TYPES } from '../../resources/resourceTypes';

const preloadedResources = {};

export const flattenedResourcesReducer = (state = preloadedResources, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_PATIENT_DATA: {
      return preloadedResources;
    }
    case actionTypes.FLATTEN_RESOURCES: {
      const newState = { ...state }; // detect mutation
      processResource(newState, action.payload, 0);
      return newState;
    }
    default:
      return state;
  }
};

const preloadedResourceIdsGroupedByType = {};

export const resourceTypesReducer = (state = preloadedResourceIdsGroupedByType, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_PATIENT_DATA: {
      return preloadedResourceIdsGroupedByType;
    }
    case actionTypes.GROUP_BY_TYPE: {
      const { payload } = action;
      return Object.entries(payload).reduce((acc, [id, resource]) => {
        const { type: resourceType, subType } = resource;
        if (!acc[resourceType]) {
          acc[resourceType] = {};
        }
        if (!acc[resourceType][subType]) {
          acc[resourceType][subType] = new Set();
        }
        if (acc[resourceType][subType].has(resource.id)) {
          console.warn(`${resourceType}--${subType} already contains ${id}`); // eslint-disable-line no-console
        } else {
          acc[resourceType][subType].add(resource.id);
        }
        return acc;
      }, {});
    }
    default:
      return state;
  }
};

const preloadResourceTypeFilters = Object.keys(PLURAL_RESOURCE_TYPES)
  .reduce((acc, resourceType) => ({
    ...acc,
    [resourceType]: true,
  }), {});

export const resourceTypeFiltersReducer = (state = preloadResourceTypeFilters, action) => {
  switch (action.type) {
    case actionTypes.CREATE_COLLECTION:
    case actionTypes.SELECT_COLLECTION:
    case actionTypes.CLEAR_PATIENT_DATA: {
      return preloadResourceTypeFilters;
    }
    case actionTypes.DELETE_COLLECTION:
    case actionTypes.CLEAR_COLLECTION: {
      if (action.payload.isSelectedCollection) {
        return preloadResourceTypeFilters;
      }
      return state;
    }
    case actionTypes.TOGGLE_RESOURCE_TYPE_FILTERS: {
      const currentSetting = state[action.payload];
      return { ...state, [action.payload]: !currentSetting };
    }

    default:
      return state;
  }
};

const preloadSelectedResourceType = null;
export const selectedResourceTypeReducer = (state = preloadSelectedResourceType, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_PATIENT_DATA: {
      return preloadSelectedResourceType;
    }
    case actionTypes.SELECT_RESOURCE_TYPE: {
      return action.payload;
    }
    default:
      return state;
  }
};

const preloadSelectedTimelineRange = {
  dateRangeStart: undefined,
  dateRangeEnd: undefined,
};
export const dateRangeFilterReducer = (state = preloadSelectedTimelineRange, action) => {
  switch (action.type) {
    case actionTypes.CREATE_COLLECTION:
    case actionTypes.SELECT_COLLECTION:
    case actionTypes.CLEAR_PATIENT_DATA: {
      return preloadSelectedTimelineRange;
    }
    case actionTypes.DELETE_COLLECTION:
    case actionTypes.CLEAR_COLLECTION: {
      if (action.payload.isSelectedCollection) {
        return preloadSelectedTimelineRange;
      }
      return state;
    }
    case actionTypes.UPDATE_DATE_RANGE_FILTER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

// this same uuid recycled across logins -- which is only development?
const defaultCollectionId = uuidv4();

const createCollection = (
  name = null,
  duplicateResourceIds = null,
  duplicateLastAddedResourceId = null,
) => {
  const timeCreated = new Date();
  const label = name || 'Untitled Collection';
  const collectionId = (name || name === '') ? uuidv4() : defaultCollectionId;
  const resourceIds = duplicateResourceIds || {};
  const lastAddedResourceId = duplicateLastAddedResourceId || null;
  return {
    [collectionId]: {
      created: timeCreated,
      lastUpdated: timeCreated,
      label,
      resourceIds,
      lastAddedResourceId,
    },
  };
};

const preloadCollections = createCollection();

export const collectionsReducer = (state = preloadCollections, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_PATIENT_DATA: {
      return createCollection();
    }
    case actionTypes.ADD_RESOURCE_TO_COLLECTION: {
      const { collectionId, resourceIds } = action.payload;
      const collection = state[collectionId];
      const updatedResourceIds = { ...collection.resourceIds };
      resourceIds.forEach((resourceId) => {
        if (!updatedResourceIds[resourceId]) {
          updatedResourceIds[resourceId] = true;
        }
      });
      const updatedLastAddedResourceId = resourceIds.length === 1 ? resourceIds[0] : null;
      const newCollection = {
        ...collection,
        resourceIds: updatedResourceIds,
        lastAddedResourceId: updatedLastAddedResourceId,
      };
      return { ...state, [collectionId]: newCollection };
    }
    case actionTypes.REMOVE_RESOURCE_FROM_COLLECTION: {
      const { collectionId, resourceIds } = action.payload;
      const collection = state[collectionId];
      const updatedResourceIds = { ...collection.resourceIds };
      let updatedLastAddedResourceId = collection.lastAddedResourceId;
      resourceIds.forEach((resourceId) => {
        if (updatedResourceIds[resourceId]) {
          delete updatedResourceIds[resourceId];
        }
        if (collection.lastAddedResourceId === resourceId) {
          updatedLastAddedResourceId = null;
        }
      });
      const newCollection = {
        ...collection,
        resourceIds: updatedResourceIds,
        lastAddedResourceId: updatedLastAddedResourceId,
      };
      return { ...state, [collectionId]: newCollection };
    }
    case actionTypes.CREATE_COLLECTION: {
      const newCollection = createCollection(action.payload);
      return { ...state, ...newCollection };
    }
    case actionTypes.DELETE_COLLECTION: {
      const newState = { ...state };
      delete newState[action.payload.collectionId];
      return newState;
    }
    case actionTypes.RENAME_COLLECTION: {
      const updatedCollection = { ...state[action.payload.collectionId] };
      updatedCollection.label = action.payload.collectionName;
      return { ...state, [action.payload.collectionId]: updatedCollection };
    }
    case actionTypes.CLEAR_COLLECTION: {
      const updatedCollection = { ...state[action.payload] };
      updatedCollection.resourceIds = {};
      updatedCollection.lastAddedResourceId = null;
      return { ...state, [action.payload]: updatedCollection };
    }
    case actionTypes.DUPLICATE_COLLECTION: {
      const dupCollection = { ...state[action.payload.collectionId] };
      const newCollection = createCollection(
        action.payload.collectionName,
        dupCollection.resourceIds,
        dupCollection.lastAddedResourceId,
      );
      return { ...state, ...newCollection };
    }
    default:
      return state;
  }
};

export const selectedCollectionReducer = (state = defaultCollectionId, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_PATIENT_DATA: {
      return defaultCollectionId;
    }
    case actionTypes.SELECT_COLLECTION: {
      return action.payload;
    }
    case actionTypes.DELETE_COLLECTION: {
      if (action.payload.nextCollectionId) {
        return action.payload.nextCollectionId;
      }
      return state;
    }
    default:
      return state;
  }
};

const pruneEmpty = ((o) => Object.entries(o).reduce((acc, [k, v]) => {
  // prune items whose values are null, undefined, or empty string:
  if (v) {
    acc[k] = v;
  }
  return acc;
}, {}));

const preloadedMarkedResources = {
  // dictionaries of resource ids with Boolean values:
  focusedSubtype: '', // only a single sub-type can be focused
  marked: {},
  focused: {},
};

export const markedResourcesReducer = (state = preloadedMarkedResources, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_PATIENT_DATA: {
      return preloadedMarkedResources;
    }
    case actionTypes.UPDATE_FOCUSED_SUBTYPE: {
      const { subType, resourceIdsMap } = action.payload;
      const deFocus = equals(state.focused, resourceIdsMap);
      return {
        focusedSubtype: subType,
        marked: {
          ...state.marked,
          ...resourceIdsMap,
        },
        focused: deFocus ? {} : {
          ...resourceIdsMap,
        },
      };
    }
    case actionTypes.UPDATE_MARKED_RESOURCES: {
      // console.info(actionTypes.UPDATE_MARKED_RESOURCES, action);
      const { subType, resourceIdsMap } = action.payload;
      const marked = Object.entries(resourceIdsMap)
        .reduce((acc, [uuid, isMarked]) => ({
          ...acc,
          [uuid]: isMarked,
        }), {});
      const previousFocus = (state.focusedSubtype !== subType) ? {} : state.focused;
      const focused = Object.entries(previousFocus)
        .reduce((acc, [uuid]) => ({
          ...acc,
          [uuid]: (!!resourceIdsMap[uuid]), // de-focus items being un-marked
        }), {});
      return {
        focusedSubtype: subType,
        focused: pruneEmpty(focused),
        marked: pruneEmpty({
          ...state.marked, // previously marked
          ...marked,
        }),
      };
    }
    case actionTypes.UPDATE_FOCUSED_RESOURCES: {
      // console.info(actionTypes.UPDATE_FOCUSED_RESOURCES, action);
      // "force" -- set regardless of marked state
      const { subType, resourceIdsMap, force } = action.payload;
      const conservedPreviousFocus = (state.focusedSubtype === subType) ? state.focused : {};
      const focused = Object.entries(resourceIdsMap)
        .reduce((acc, [uuid, isFocused]) => ({
          ...acc,
          // cannot focus unless already marked -- unless forced:
          [uuid]: (force || (state.marked[uuid]) ? isFocused : conservedPreviousFocus[uuid]),
        }), {});
      const newMarked = (force) ? focused : {};
      return {
        focusedSubtype: subType,
        marked: pruneEmpty({
          ...state.marked,
          ...newMarked,
        }),
        focused: pruneEmpty({
          ...conservedPreviousFocus,
          ...focused,
        }),
      };
    }
    default:
      return state;
  }
};
