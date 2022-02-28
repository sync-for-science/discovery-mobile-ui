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

  const handleOnboardingState = (isCompleted: boolean) => {
    Storage.setOnboardingState(isCompleted);
    setIsOnboardingComplete(isCompleted);
  };

  const renderMainView = () => {
    if (!isOnboardingComplete) {
      return (<OnboardingNavigator handleOnboardingState={handleOnboardingState} />);
    }
    if (!authentication.tokenResponse) {
      return (<UnauthorizedNavigator handleOnboardingState={handleOnboardingState} />);
    }
    return <AuthorizedNavigator />;
  };

  return (
    <NavigationContainer>
      {renderMainView()}
    </NavigationContainer>
  );
};

RootNavigator.propTypes = {
};

RootNavigator.defaultProps = {
};

export default RootNavigator;
