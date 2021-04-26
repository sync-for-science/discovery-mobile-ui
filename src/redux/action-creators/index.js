import { actionTypes } from '../action-types';

export const toggleResourceTypeFilter = (resourceType) => (dispatch, getState) => {
  const { activeCollectionId } = getState();
  return dispatch({
    type: actionTypes.TOGGLE_RESOURCE_TYPE_FILTERS,
    payload: {
      collectionId: activeCollectionId,
      resourceType,
    },
  });
};

export const selectResourceType = (resourceType) => (dispatch, getState) => {
  const { activeCollectionId } = getState();
  return dispatch({
    type: actionTypes.SELECT_RESOURCE_TYPE,
    payload: {
      collectionId: activeCollectionId,
      resourceType,
    },
  });
};

export const updateDateRange = (fieldKey, date) => (dispatch, getState) => {
  const { activeCollectionId } = getState();
  return dispatch({
    type: actionTypes.UPDATE_DATE_RANGE_FILTER,
    payload: {
      collectionId: activeCollectionId,
      [fieldKey]: date,
    },
  });
};

export const shiftDateRange = ({ moveY }) => (dispatch, getState) => {
  // console.info('shiftDateRange, moveY: ', moveY);
  const { activeCollectionId } = getState();
  return dispatch({
    type: actionTypes.SHIFT_DATE_RANGE_FILTER,
    payload: {
      collectionId: activeCollectionId,
      moveY,
    },
  });
};

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

export const deleteCollection = (collectionId) => ({
  type: actionTypes.DELETE_COLLECTION,
  payload: { collectionId },
});

export const renameCollection = (collectionId, collectionName) => ({
  type: actionTypes.RENAME_COLLECTION,
  payload: { collectionId, collectionName },
});

export const clearCollection = (collectionId) => ({
  type: actionTypes.CLEAR_COLLECTION,
  payload: collectionId,
});

export const duplicateCollection = (collectionId, collectionName) => ({
  type: actionTypes.DUPLICATE_COLLECTION,
  payload: { collectionId, collectionName },
});

export const clearMarkedResources = (collectionId) => ({
  type: actionTypes.CLEAR_MARKED_RESOURCES,
  payload: collectionId,
});

export const toggleShowCollectionOnly = (showCollectionOnly) => (dispatch, getState) => {
  const { activeCollectionId } = getState();
  return dispatch({
    type: actionTypes.TOGGLE_SHOW_COLLECTION_ONLY,
    payload: {
      collectionId: activeCollectionId,
      showCollectionOnly,
    },
  });
};

export const toggleShowMarkedOnly = (showMarkedOnly) => (dispatch, getState) => {
  const { activeCollectionId } = getState();
  return dispatch({
    type: actionTypes.TOGGLE_SHOW_MARKED_ONLY,
    payload: {
      collectionId: activeCollectionId,
      showMarkedOnly,
    },
  });
};

export const toggleSortingState = (sortField) => (dispatch, getState) => {
  const { activeCollectionId } = getState();
  return dispatch({
    type: actionTypes.TOGGLE_SORTING_STATE,
    payload: {
      collectionId: activeCollectionId,
      sortField,
    },
  });
};

export const createRecordNote = (resourceId, text) => (dispatch, getState) => {
  const { activeCollectionId } = getState();
  return dispatch({
    type: actionTypes.CREATE_RECORD_NOTE,
    payload: {
      collectionId: activeCollectionId,
      resourceId,
      text,
    },
  });
};

export const deleteRecordNote = (resourceId, noteId) => (dispatch, getState) => {
  const { activeCollectionId } = getState();
  return dispatch({
    type: actionTypes.DELETE_RECORD_NOTE,
    payload: {
      collectionId: activeCollectionId,
      resourceId,
      noteId,
    },
  });
};

export const editRecordNote = (resourceId, text, noteId) => (dispatch, getState) => {
  const { activeCollectionId } = getState();
  return dispatch({
    type: actionTypes.EDIT_RECORD_NOTE,
    payload: {
      collectionId: activeCollectionId,
      resourceId,
      text,
      noteId,
    },
  });
};

export const createCollectionNote = (text) => (dispatch, getState) => {
  const { activeCollectionId } = getState();
  return dispatch({
    type: actionTypes.CREATE_COLLECTION_NOTE,
    payload: {
      collectionId: activeCollectionId,
      text,
    },
  });
};

export const deleteCollectionNote = (noteId) => (dispatch, getState) => {
  const { activeCollectionId } = getState();
  return dispatch({
    type: actionTypes.DELETE_COLLECTION_NOTE,
    payload: {
      collectionId: activeCollectionId,
      noteId,
    },
  });
};

export const editCollectionNote = (noteId, text) => (dispatch, getState) => {
  const { activeCollectionId } = getState();
  return dispatch({
    type: actionTypes.EDIT_COLLECTION_NOTE,
    payload: {
      collectionId: activeCollectionId,
      noteId,
      text,
    },
  });
};
