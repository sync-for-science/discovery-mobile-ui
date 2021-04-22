import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';
import { clone } from 'ramda';

import { actionTypes } from '../action-types';
import processResource from './process-resources';
import { PLURAL_RESOURCE_TYPES } from '../../resources/resourceTypes';
import { UNMARKED, MARKED, FOCUSED } from '../../constants/marked-status';

const preloadedResources = {};

export const flattenedResourcesReducer = (state = preloadedResources, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_PATIENT_DATA: {
      return preloadedResources;
    }
    case actionTypes.FHIR_FETCH_SUCCESS: {
      const newState = { ...state }; // detect mutation
      processResource(newState, action.payload, 0);
      return newState;
    }
    default:
      return state;
  }
};

// prune items whose values are 0, null, undefined, or empty string:
const pruneEmpty = ((o) => Object.entries(o)
  .filter(([, v]) => v)
  .reduce((acc, [id, v]) => ({ ...acc, [id]: v }), {}));

const defaultMarkedResources = {
  focusedSubtype: '', // only a single sub-type can be focused
  // "marked" -- dictionary whose keys are resource ids and values are enum:
  // 0 -- unmarked
  // 1 -- marked
  // 2 -- focused
  marked: {},
};
const createCollection = (
  name = null,
) => {
  const timeCreated = new Date();
  const label = name || 'Untitled Collection';

  return {
    id: uuidv4(),
    created: timeCreated,
    lastUpdated: timeCreated,
    label,
    selectedResourceType: null,
    resourceTypeFilters: Object.keys(PLURAL_RESOURCE_TYPES)
      .reduce((acc, resourceType) => ({
        ...acc,
        [resourceType]: true,
      }), {}),
    dateRangeFilter: {
      dateRangeStart: undefined,
      dateRangeEnd: undefined,
    },
    showCollectionOnly: false,
    showMarkedOnly: false,
    records: {},
    markedResources: defaultMarkedResources,
  };
};

const createNewCollectionRecord = () => ({
  saved: false,
  addedDate: null,
  highlight: UNMARKED,
});

const defaultCollection = createCollection();

const preloadCollections = {
  [defaultCollection.id]: defaultCollection,
};

export const collectionsReducer = (state = preloadCollections, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_PATIENT_DATA: {
      const newDefaultCollection = createCollection();
      return {
        [newDefaultCollection.id]: newDefaultCollection,
      };
    }
    case actionTypes.ADD_RESOURCE_TO_COLLECTION: {
      const { collectionId, resourceIds } = action.payload;
      return produce(state, (draft) => {
        resourceIds.forEach((id) => {
          const { records } = draft[collectionId]; // eslint-disable-line no-param-reassign
          records[id] = records[id] ?? createNewCollectionRecord();
          records[id].saved = true;
          records[id].addedDate = new Date();
        });
      });
    }
    case actionTypes.SELECT_RESOURCE_TYPE: {
      const { collectionId, resourceType } = action.payload;
      return produce(state, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft[collectionId].selectedResourceType = resourceType;
      });
    }
    case actionTypes.TOGGLE_RESOURCE_TYPE_FILTERS: {
      const { collectionId, resourceType } = action.payload;
      return produce(state, (draft) => {
        const prevValue = draft[collectionId].resourceTypeFilters[resourceType];
        // eslint-disable-next-line no-param-reassign
        draft[collectionId].resourceTypeFilters[resourceType] = !prevValue;
      });
    }
    case actionTypes.UPDATE_DATE_RANGE_FILTER: {
      const { collectionId, dateRangeStart, dateRangeEnd } = action.payload;
      return produce(state, (draft) => {
        if (dateRangeStart) {
          // eslint-disable-next-line no-param-reassign
          draft[collectionId].dateRangeFilter.dateRangeStart = dateRangeStart;
        }
        if (dateRangeEnd) {
          // eslint-disable-next-line no-param-reassign
          draft[collectionId].dateRangeFilter.dateRangeEnd = dateRangeEnd;
        }
      });
    }
    case actionTypes.REMOVE_RESOURCE_FROM_COLLECTION: {
      const { collectionId, resourceIds } = action.payload;
      return produce(state, (draft) => {
        resourceIds.forEach((id) => {
          const { records } = draft[collectionId]; // eslint-disable-line no-param-reassign
          records[id] = records[id] ?? {};
          records[id].saved = false;
          records[id].addedDate = null;
        });
      });
    }
    case actionTypes.UPDATE_MARKED_RESOURCES: {
      const { subType, resourceIdsMap, collectionId } = action.payload;
      const newCollection = { ...state[collectionId] };
      const deFocus = (!subType || subType !== newCollection.markedResources.focusedSubtype);

      const previousMarked = !deFocus
        ? newCollection.markedResources.marked
        : Object.entries(newCollection.markedResources.marked)
          .reduce((acc, [id, prevValue]) => ({
            ...acc,
            [id]: (prevValue === FOCUSED ? MARKED : prevValue),
          }), {});

      const newlyMarked = Object.entries(resourceIdsMap)
        .reduce((acc, [id, newValue]) => ({
          ...acc,
          // eslint-disable-next-line max-len
          [id]: ((newValue === FOCUSED && (previousMarked[id] === MARKED)) ? FOCUSED : newValue),
        }), {});

      newCollection.markedResources = {
        focusedSubtype: subType,
        marked: pruneEmpty({
          ...previousMarked,
          ...newlyMarked,
        }),
      };

      return { ...state, [collectionId]: newCollection };
    }
    case actionTypes.CLEAR_MARKED_RESOURCES: {
      const collectionId = action.payload;
      const updatedCollection = { ...state[collectionId] };
      updatedCollection.markedResources = defaultMarkedResources;
      return { ...state, [collectionId]: updatedCollection };
    }
    case actionTypes.CREATE_COLLECTION: {
      const newCollection = createCollection(action.payload);
      return {
        ...state,
        [newCollection.id]: newCollection,
      };
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
      const collectionId = action.payload;
      return produce(state, (draft) => {
        Object.values(draft[collectionId].records).forEach((attributes) => {
          attributes.saved = false; // eslint-disable-line no-param-reassign
          attributes.addedDate = null; // eslint-disable-line no-param-reassign
        });
      });
    }
    case actionTypes.DUPLICATE_COLLECTION: {
      const { collectionId } = action.payload;
      const originalCollection = state[collectionId];
      const newCollection = clone(originalCollection);
      newCollection.id = uuidv4();
      newCollection.label = action.payload.collectionName;
      return {
        ...state,
        [newCollection.id]: newCollection,
      };
    }
    case actionTypes.TOGGLE_SHOW_COLLECTION_ONLY: {
      const { collectionId, showCollectionOnly } = action.payload;
      return produce(state, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft[collectionId].showCollectionOnly = showCollectionOnly;
      });
    }
    case actionTypes.TOGGLE_SHOW_MARKED_ONLY: {
      const { collectionId, showMarkedOnly } = action.payload;
      return produce(state, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft[collectionId].showMarkedOnly = showMarkedOnly;
      });
    }
    default:
      return state;
  }
};

export const activeCollectionIdReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_PATIENT_DATA: {
      return null;
    }
    case actionTypes.SELECT_COLLECTION: {
      return action.payload;
    }
    case actionTypes.DELETE_COLLECTION: {
      return null;
    }
    default:
      return state;
  }
};
