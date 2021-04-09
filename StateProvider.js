import React from 'react';
import { node } from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStoreFactory from './src/redux';

const { store, persistor } = persistStoreFactory();

export default function StateProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        { children }
      </PersistGate>
    </Provider>
  );
}

StateProvider.propTypes = {
  children: node.isRequired,
};
