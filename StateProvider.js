import React from 'react';
import { node } from 'prop-types';
import { useRecoilValue } from 'recoil';
import { Provider } from 'react-redux';

import createStore from './src/redux';

import { authenticationState } from './src/recoil';

let store;

export default function StateProvider({ children }) {
  const authentication = useRecoilValue(authenticationState);

  if (!store) {
    store = createStore(authentication);
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
