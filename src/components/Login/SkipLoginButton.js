import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Button } from 'react-native';

import mockBundle from '../../../assets/mock_data/bundle-blake-eichmann.json';
import { authenticationState } from '../../recoil';

export const MOCK_BUNDLE = mockBundle;

export const MOCK_AUTH = {
  baseUrl: '/', // some value is needed to successfully instantiate fhir-kit-client, to resolve contained resources
  tokenResponse: {
    accessToken: '',
    additionalParameters: {
      patient: '86512c6f-caf6-41f4-9503-e4270b37b94f', // 'Mr. Blake Eichmann'
    },
  },
};

const showSkipLogin = process.env.NODE_ENV === 'development';

const SkipLoginButton = () => {
  const setAuthentication = useSetRecoilState(authenticationState);

  if (showSkipLogin) {
    return (
      <Button
        title="Skip Login"
        onPress={() => setAuthentication(MOCK_AUTH)}
      />
    );
  }
  return null;
};

export default SkipLoginButton;
