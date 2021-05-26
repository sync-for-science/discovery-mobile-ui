import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useRecoilValue, useRecoilState } from 'recoil';

import Storage from '../storage';
import UnauthorizedNavigator from './UnauthorizedNavigator';
import AuthorizedNavigator from './AuthorizedNavigator';
import { authenticationState, onboardingState } from '../recoil';

const RootNavigator = () => {
  const authentication = useRecoilValue(authenticationState);
  const [isOnboardingComplete, setIsOnboardingComplete] = useRecoilState(onboardingState);

  useEffect(() => {
    const getOnboardingState = async () => {
      setIsOnboardingComplete(await Storage.getOnboardingState());
    };
    getOnboardingState();
  }, []);

  const handleOnboardingToggle = (isCompleted) => {
    Storage.setOnboardingState(isCompleted);
    setIsOnboardingComplete(isCompleted);
  };

  return (
    <NavigationContainer>
      {!authentication?.authResult ? (
        <UnauthorizedNavigator
          isOnboardingComplete={isOnboardingComplete}
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
