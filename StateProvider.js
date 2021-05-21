import React, { useEffect } from 'react';
import { node } from 'prop-types';
import { useRecoilValue } from 'recoil';
import { Provider } from 'react-redux';

import createStore from './src/redux';

import { authenticationState } from './src/recoil';
import { actionTypes } from './src/redux/action-types';

let store;

export default function StateProvider({ children }) {
  const authentication = useRecoilValue(authenticationState);

  useEffect(() => {
    if (!store) {
      store = createStore(authentication);
    }
    store.dispatch({
      type: actionTypes.SET_AUTH,
      payload: authentication, // identity comparison with MOCK_AUTH
    });
    return () => {
    };
  }, [authentication]);

  if (!store) {
    return null;
  }

  return (
    <Provider store={store}>
      { children }
    </Provider>
  );
}

StateProvider.propTypes = {
  children: node.isRequired,
};
