import { actionTypes } from '../action-types';

export const toggleResourceTypeFilter = (resourceType) => ({
  type: actionTypes.TOGGLE_RESOURCE_TYPE_FILTERS,
  payload: resourceType,
});

export const selectResourceType = (resourceType) => ({
  type: actionTypes.SELECT_RESOURCE_TYPE,
  payload: resourceType,
});

export const addResourceToCollection = (collectionId, resourceIds) => {
  const payloadIds = Array.isArray(resourceIds) ? resourceIds : [resourceIds];
  return ({
    type: actionTypes.ADD_RESOURCE_TO_COLLECTION,
    payload: { collectionId, resourceIds: payloadIds },
  });
};

export const removeResourceFromCollection = (collectionId, resourceIds) => {
  const payloadIds = Array.isArray(resourceIds) ? resourceIds : [resourceIds];
  return ({
    type: actionTypes.REMOVE_RESOURCE_FROM_COLLECTION,
    payload: { collectionId, resourceIds: payloadIds },
  });
};

export const createCollection = (collectionName) => ({
  type: actionTypes.CREATE_COLLECTION,
  payload: collectionName,
});

export const selectCollection = (collectionId) => ({
  type: actionTypes.SELECT_COLLECTION,
  payload: collectionId,
});

export const deleteCollection = (collectionId, nextCollectionId) => ({
  type: actionTypes.DELETE_COLLECTION,
  payload: { collectionId, nextCollectionId },
});

export const renameCollection = (collectionId, collectionName) => ({
  type: actionTypes.RENAME_COLLECTION,
  payload: { collectionId, collectionName },
});

export const clearCollection = (collectionId) => ({
  type: actionTypes.CLEAR_COLLECTION,
  payload: collectionId,
});
