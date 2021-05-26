import React, {useEffect} from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import Storage from '../storage/index';

import UnauthorizedNavigator from './UnauthorizedNavigator';
import AuthorizedNavigator from './AuthorizedNavigator';
import { authenticationState, recoilOnboardingState as rOnboardingState } from '../recoil';

const RootNavigator = () => {
  const authentication = useRecoilValue(authenticationState);
  const [recoilOnboardingState, setRecoilOnboardingState] = useRecoilState(rOnboardingState);

  useEffect(() => {
    console.log('useEffect here')
    const getOnboardingState = async () => {
      console.log('useEffect getOnboardingState')
      setRecoilOnboardingState(await Storage.getOnboardingState());
    };
    console.log('useEffect after getOnboardingState')
    getOnboardingState();

    return () => {
      console.log('before cleanup')
      setRecoilOnboardingState(false);
      console.log('after cleanup')
    }
  }, []);

  const handleOnboardingToggle = (isCompleted) => {
    Storage.setOnboardingState(isCompleted);
    setRecoilOnboardingState(isCompleted);
  };
  return (
    <NavigationContainer>
      {!authentication.authResult ? <UnauthorizedNavigator
      recoilOnboardingState={recoilOnboardingState} 
      setRecoilOnboardingState={setRecoilOnboardingState} 
      handleOnboardingToggle={handleOnboardingToggle}
      /> : <AuthorizedNavigator />}
    </NavigationContainer>
  );
};

RootNavigator.propTypes = {
};

RootNavigator.defaultProps = {
};

export default RootNavigator;
