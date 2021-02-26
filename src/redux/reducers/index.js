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
              console.warn(`Unsupported code type for ${id}: `, code); // eslint-disable-line no-console
              break;
            }
          }
        }
        if (!subType) {
          if (!acc[resourceType]) {
            acc[resourceType] = new Set();
          }
          if (acc[resourceType].has(resource.id)) {
            console.warn(`${resourceType} already contains ${id}`); // eslint-disable-line no-console
          } else {
            acc[resourceType].add(resource.id);
          }
        } else {
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
        }
        return acc;
      }, {});
    }
    default:
      return state;
  }
};
