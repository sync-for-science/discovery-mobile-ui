import { actionTypes } from '../epics';
import { processBundle } from '../../resources/fhirReader';

const preloadedResources = {};

export const flattenedResourcesReducer = (state = preloadedResources, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_PATIENT_DATA: {
      return preloadedResources;
    }
    case actionTypes.FLATTEN_RESOURCES: {
      const newState = { ...state }; // detect mutation
      processBundle(newState, action.payload, 0);
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
        let { resourceType } = resource;
        const { subType } = resource;
        if (resourceType === 'Observation') {
          const { code } = resource.category[0].coding[0];
          switch (code) {
            case 'laboratory':
            case 'vital-signs':
              resourceType = code;
              break;
            default: {
              console.info(`Unsupported code type for ${id}: `, code); // eslint-disable-line no-console
              break;
            }
          }
        }
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
        if (!acc[resourceType].total) {
          acc[resourceType].total = 0;
        }
        acc[resourceType].total += 1;
        return acc;
      }, {});
    }
    default:
      return state;
  }
};

const preloadResourceTypeFilters = {};
export const resourceTypeFiltersReducer = (state = preloadResourceTypeFilters, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_PATIENT_DATA: {
      return preloadedResourceIdsGroupedByType;
    }
    case actionTypes.RESOURCE_TYPE_FILTERS: {
      const resourceTypeFilters = {};
      action.payload.forEach(
        (resourceType) => {
          resourceTypeFilters[resourceType] = true;
        },
      );
      return resourceTypeFilters;
    }
    case actionTypes.TOGGLE_RESOURCE_TYPE_FILTERS: {
      const currentSetting = state[action.payload]
      return { ...state, [action.payload]: !currentSetting };
    }
    
    default:
      return state;
  }
};

const preloadSelectedResourceType = null
export const selectedResourceTypeReducer = (state = preloadSelectedResourceType, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_PATIENT_DATA: {
      return preloadSelectedResourceType;
    }
    case actionTypes.CREATE_RESOURCE_TYPE_SELECTION: {
      return state
    }
    case actionTypes.SELECT_RESOURCE_TYPE: {
      return action.payload;
    }
    default:
      return state
  }
}
