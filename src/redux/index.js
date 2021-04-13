import { combineReducers, compose, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import authReducer from '../features/auth/authSlice';
import {
  flattenedResourcesReducer,
  resourceTypesReducer,
  collectionsReducer,
  activeCollectionIdReducer,
} from './reducers';
import epicMiddleware, { rootEpic } from './epics';

const rootReducer = combineReducers({
  auth: authReducer,
  resources: flattenedResourcesReducer,
  resourceIdsGroupedByType: resourceTypesReducer,
  collections: collectionsReducer,
  activeCollectionId: activeCollectionIdReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: compose([
    thunk,
    epicMiddleware,
    // routerMiddleware(history), // < e.g.: other middleware
  ]),
  devTools: {
    serialize: true, // See: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#serialize
  },
});

epicMiddleware.run(rootEpic);

export default store;
