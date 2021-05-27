import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';

import UnauthorizedNavigator from './UnauthorizedNavigator';
import AuthorizedNavigator from './AuthorizedNavigator';
import { authenticationState } from '../recoil';

const RootNavigator = () => {
  const authentication = useRecoilValue(authenticationState);
  return (
    <NavigationContainer>
      {!authentication?.authResult ? <UnauthorizedNavigator /> : <AuthorizedNavigator />}
    </NavigationContainer>
  );
};

RootNavigator.propTypes = {
};

RootNavigator.defaultProps = {
};

export default RootNavigator;
