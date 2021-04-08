import { combineReducers, compose, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// import { AsyncStorage } from 'react-native';
// import immutableTransform from 'redux-persist-transform-immutable';
import { persistReducer, persistStore } from 'redux-persist';
// autoRehydrate
// import storage from 'redux-persist/lib/storage';
// import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import { AsyncStorage } from 'react-native';
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
  activeCollectionId: activeCollectionIdReducer,
  collections: collectionsReducer,
});

export const persistReducerConfig = {
  version: '0.1',
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['activeCollectionId', 'collections'],
  // stateReconciler: hardSet,
};

const persistConfig = {
};

let persistor;
export const getPersistor = () => persistor;

const persistStoreFactory = () => {
  const store = configureStore({
    // reducer: rootReducer,
    reducer: persistReducer(persistReducerConfig, rootReducer),
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

  const callback = (result) => {
    console.info('persistStore CALLBACK: ', result);
  };

  persistor = persistStore(store, persistConfig, callback);
  // persistor.purge();
  // persistor.flush();
  // persistor.pause();
  // persistor.persist();

  return {
    store,
    persistor,
  };
};

export default persistStoreFactory;
