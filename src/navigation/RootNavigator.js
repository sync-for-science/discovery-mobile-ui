import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';

import UnauthorizedNavigator from './UnauthorizedNavigator';
import AuthorizedNavigator from './AuthorizedNavigator';
import OnboardingNavigator from './OnboardingNavigator';
import { authenticationState, onboardingState, storageOnboardingState } from '../recoil';
import Storage from '../storage';

const RootNavigator = () => {
  const authentication = useRecoilValue(authenticationState);
  const isOnboardingComplete = useRecoilValue(onboardingState(storageOnboardingState));
  const [, setIsOnboardingComplete] = useRecoilState(onboardingState(storageOnboardingState));

  const handleOnboardingState = (isCompleted) => {
    Storage.setOnboardingState(isCompleted);
    setIsOnboardingComplete(isCompleted);
  };

  return (
    <NavigationContainer>
      {
        // eslint-disable-next-line no-nested-ternary
        !isOnboardingComplete
          ? <OnboardingNavigator handleOnboardingState={handleOnboardingState} />
          : (
            !authentication.authResult
              ? <UnauthorizedNavigator handleOnboardingState={handleOnboardingState} />
              : <AuthorizedNavigator />
          )
      }
    </NavigationContainer>
  );
};

RootNavigator.propTypes = {
};

RootNavigator.defaultProps = {
};

export default RootNavigator;
