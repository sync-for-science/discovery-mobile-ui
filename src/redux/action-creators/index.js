import { actionTypes } from '../action-types';

export const toggleResourceTypeFilter = (resourceType) => ({
  type: actionTypes.TOGGLE_RESOURCE_TYPE_FILTERS,
  payload: resourceType,
});

export const selectResourceType = (resourceType) => ({
  type: actionTypes.SELECT_RESOURCE_TYPE,
  payload: resourceType,
});

export const addResourceToCollection = (collectionId, resourceIds) => ({
  type: actionTypes.ADD_RESOURCE_TO_COLLECTION,
  payload: { collectionId, resourceIds },
});

export const removeResourceFromCollection = (collectionId, resourceIds) => ({
  type: actionTypes.REMOVE_RESOURCE_FROM_COLLECTION,
  payload: { collectionId, resourceIds },
});
