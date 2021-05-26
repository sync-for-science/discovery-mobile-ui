import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useRecoilValue, useRecoilState } from 'recoil';

import Storage from '../storage';
import UnauthorizedNavigator from './UnauthorizedNavigator';
import AuthorizedNavigator from './AuthorizedNavigator';
import { authenticationState, recoilOnboardingState as rOnboardingState } from '../recoil';

const RootNavigator = () => {
  const authentication = useRecoilValue(authenticationState);
  const [recoilOnboardingState, setRecoilOnboardingState] = useRecoilState(rOnboardingState);

  useEffect(() => {
    const getOnboardingState = async () => {
      setRecoilOnboardingState(await Storage.getOnboardingState());
    };
    getOnboardingState();
  }, []);

  const handleOnboardingToggle = (isCompleted) => {
    Storage.setOnboardingState(isCompleted);
    setRecoilOnboardingState(isCompleted);
  };

  return (
    <NavigationContainer>
      {!authentication?.authResult ? (
        <UnauthorizedNavigator
          recoilOnboardingState={recoilOnboardingState}
          handleOnboardingToggle={handleOnboardingToggle}
        />
      ) : <AuthorizedNavigator />}
    </NavigationContainer>
  );
};

RootNavigator.propTypes = {
};

RootNavigator.defaultProps = {
};

export default RootNavigator;
