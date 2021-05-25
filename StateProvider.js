import React, { useEffect } from 'react';
import { node } from 'prop-types';
import { useRecoilValue } from 'recoil';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import LoadingIndicator from './src/components/LoadingIndicator';
import createStore from './src/redux';
import { authenticationState } from './src/recoil';
import { actionTypes } from './src/redux/action-types';

let store;
let persistor;

export default function StateProvider({ children }) {
  const authentication = useRecoilValue(authenticationState);

  useEffect(() => {
    const persistenceItems = createStore(authentication);
    store = persistenceItems.store;
    persistor = persistenceItems.persistor;

    store.dispatch({
      type: actionTypes.SET_AUTH,
      payload: authentication,
    });
    return () => {
      persistor.flush().then(() => {
        persistor.pause();
        store.dispatch({
          type: actionTypes.CLEAR_PATIENT_DATA,
        });
        store = null;
        persistor = null;
      });
    };
  }, [authentication]);

  if (!store) {
    return <LoadingIndicator />;
  }

  return (
    <Provider store={store}>
      <PersistGate
        loading={<LoadingIndicator />}
        persistor={persistor}
      >
        { children }
      </PersistGate>
    </Provider>
  );
}

StateProvider.propTypes = {
  children: node.isRequired,
};
