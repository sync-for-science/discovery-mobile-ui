import { actionTypes } from '../epics';
import processResource from './process-resources';
import { PLURAL_RESOURCE_TYPES } from '../../resources/resourceTypes';
import { v4 as uuidv4 } from 'uuid';

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
    case actionTypes.CLEAR_PATIENT_DATA: {
      return preloadResourceTypeFilters;
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
    case actionTypes.CREATE_RESOURCE_TYPE_SELECTION: {
      return state;
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
    case actionTypes.CLEAR_PATIENT_DATA: {
      return preloadSelectedTimelineRange;
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

const defaultCollectionId = uuidv4()
const timeCreated = new Date()
const preloadCollections = {
  [defaultCollectionId]: {
    created: timeCreated,
    lastUpdated: timeCreated,
    label: 'Untitled Collection',
    resourceIds: {},
    lastAddedResourceId: null
  }
}

export const collectionsReducer = (state = preloadCollections, action) => {
  switch (action.type) {
    case actionTypes.ADD_RESOURCE_TO_COLLECTION: {
      const {collectionId, resourceId} = action.payload
      const collection = state[collectionId]
      const updatedResourceIds = {...collection.resourceIds}
      if(!updatedResourceIds[resourceId]) {
        updatedResourceIds[resourceId] = true
      }
      const updatedLastAddedResourceId = resourceId
      const newCollection = {
        ...collection, 
        resourceIds: updatedResourceIds, 
        lastAddedResourceId: updatedLastAddedResourceId
      }
      return {...state, [collectionId]: newCollection}
    }
    case actionTypes.REMOVE_RESOURCE_FROM_COLLECTION: {
      const {collectionId, resourceIds} = action.payload
      const collection = state[collectionId]
      const updatedResourceIds = {...collection.resourceIds}
      let updatedLastAddedResourceId = collection.lastAddedResourceId
      resourceIds.forEach(resourceId => {
        if(updatedResourceIds[resourceId]) {
          delete updatedResourceIds[resourceId]
        }
        if (collection.lastAddedResourceId === resourceId) {
          updatedLastAddedResourceId = null
        }
      })
      const newCollection = {
        ...collection, 
        resourceIds: updatedResourceIds,
        lastAddedResourceId: updatedLastAddedResourceId
      }
      return {...state, [collectionId]: newCollection}
    }
    default:
      return state;
  }
}
