import { combineReducers, compose, configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import {
  flattenedResourcesReducer,
  associationsReducer,
  collectionsReducer,
  activeCollectionIdReducer,
} from './reducers';
import rootEpic from './epics';
import FhirClient from './middleware/fhir-client';

const createStore = (authentication) => {
  const { baseUrl, authResult: { accessToken, idToken } } = authentication;

  const fhirClient = new FhirClient(baseUrl, accessToken, idToken);

  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      fhirClient,
    },
  });

  const { patientId } = fhirClient;

  const rootReducer = combineReducers({
    resources: flattenedResourcesReducer,
    associations: associationsReducer,
    activeCollectionId: activeCollectionIdReducer,
    collections: collectionsReducer,
  });

  const persistReducerConfig = {
    version: '0.1.0',
    key: `root-${patientId}`,
    storage: AsyncStorage,
    whitelist: ['activeCollectionId', 'collections'],
  };

  const store = configureStore({
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

  const callback = () => {
    // callback function will be called after rehydration is finished.
  };

  const persistConfig = {
    // manualPersist: true,
  };

  const persistor = persistStore(store, persistConfig, callback);

  return {
    store,
    persistor,
  };
};

export default createStore;
