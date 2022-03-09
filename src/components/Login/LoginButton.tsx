import React from 'react';
import { string } from 'prop-types';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  makeRedirectUri,
  AuthRequestConfig, ResponseType,
  IssuerOrDiscovery,
  loadAsync, AuthRequest,
  AuthRequestPromptOptions, AuthSessionResult,
  exchangeCodeAsync, TokenResponse,
  // AuthError,
} from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser'; // eslint-disable-line import/no-extraneous-dependencies
import Constants from 'expo-constants'; // eslint-disable-line import/no-extraneous-dependencies
import FhirKitClient from 'fhir-kit-client';
// useAutoDiscovery is an alternative to fhir-kit-client smartAuthMetadata:
// import { useAutoDiscovery } from 'expo-auth-session';

import Colors from '../../constants/Colors';
import LoadingIndicator from '../LoadingIndicator';
import { authPendingState, authenticationState } from '../../recoil';

WebBrowser.maybeCompleteAuthSession();

const {
  EXPO_OWNER, EXPO_SLUG, BUNDLE_IDENTIFIER, CLIENT_ID,
} = Constants.manifest?.extra || {};

// Reference:
//   https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/metadata
//   https://open.epic.com/MyApps/Endpoints
//   https://fhir.epic.com/Documentation?docId=testpatients
const SCOPES = [
  'launch',
  'openid',
  'fhirUser',
  'profile',
  'patient/*.read',
  'user/*.read',
  'online_access',
];

const redirectUri = makeRedirectUri({
  useProxy: true,
  native: `https://auth.expo.io/@${EXPO_OWNER}/${EXPO_SLUG}`,
  // native: `${BUNDLE_IDENTIFIER}://`,
  scheme: `${BUNDLE_IDENTIFIER}`,
});

type LoginButtonProps = {
  baseUrl: string
}

const LoginButton = ({ baseUrl }: LoginButtonProps) => {
  const [authPending, setAuthPending] = useRecoilState(authPendingState);

  const setAuthentication = useSetRecoilState(authenticationState);

  const handleLogin = async () => {
    try {
      setAuthPending(true);
      const state = `${Math.random()}`;
      const fhirClient = new FhirKitClient({ baseUrl });
      const smartAuthMetaData = await fhirClient.smartAuthMetadata();
      const { authorizeUrl, tokenUrl } = smartAuthMetaData;
      if (!(authorizeUrl && tokenUrl)) {
        throw new Error('Need authorizationEndpoint and tokenEndpoint.');
      }

      const authRequestConfig: AuthRequestConfig = {
        responseType: ResponseType.Code, // Code | IdToken | Token
        clientId: CLIENT_ID,
        usePKCE: true,
        state,
        scopes: SCOPES,
        redirectUri,
        extraParams: {
          aud: baseUrl,
        },
      };

      const discovery: IssuerOrDiscovery = {
        authorizationEndpoint: authorizeUrl.toString(),
        tokenEndpoint: tokenUrl.toString(),
      };

      const authRequest: AuthRequest = await loadAsync(authRequestConfig, discovery);

      if (authRequest.state !== state) {
        throw new Error('The AuthRequest state is incorrect.');
      }

      if (!authRequest.codeVerifier) {
        throw new Error('The AuthRequest codeVerifier is not present.');
      }

      const promptOptions: AuthRequestPromptOptions = {
        useProxy: true,
      };

      const codeRequest: Promise<AuthSessionResult> = authRequest.promptAsync(discovery, promptOptions); // eslint-disable-line max-len
      // for debugging: catch and re-throw codeRequest-specific errors, here
      const codeResponse = await codeRequest;

      if (codeResponse.type === 'cancel') {
        throw codeResponse;
      }

      // There's a problem with the TS definition for AuthSessionResult.params.code:
      // @ts-ignore
      const code = codeResponse?.params?.code;
      if (!code) {
        throw new Error('No code returned from code request');
      }

      const tokenRequest: Promise<TokenResponse> = exchangeCodeAsync(
        {
          clientId: authRequest.clientId,
          clientSecret: authRequest.clientSecret,
          redirectUri: authRequest.redirectUri,
          scopes: authRequest.scopes,
          code,
          extraParams: {
            // if code_verifier key exists, it cannot be void:
            code_verifier: authRequest.codeVerifier,
          },
        },
        {
          tokenEndpoint: discovery.tokenEndpoint,
        },
      );
      // for debugging: catch and re-throw tokenResponse-specific errors, here
      const tokenResponse = await tokenRequest;

      setAuthentication({
        baseUrl,
        tokenResponse: tokenResponse.getRequestConfig(),
      });

      setAuthPending(false);
    } catch (error) {
      console.error('Auth error:', error); // eslint-disable-line no-console
      // @ts-ignore
      const messageHeading = (error?.type === 'cancel') ? 'Login Cancelled' : 'Login Error';
      Alert.alert(
        messageHeading,
        'You must log in to use Discovery',
        [
          { text: 'OK', onPress: () => setAuthPending(false) },
        ],
      );
    }
  };

  if (authPending) {
    return <LoadingIndicator />;
  }

  return (
    <TouchableOpacity
      style={styles.login}
      onPress={handleLogin}
    >
      <Text style={styles.loginText}>Login</Text>
    </TouchableOpacity>
  );
};

LoginButton.propTypes = {
  baseUrl: string.isRequired,
};

LoginButton.defaultProps = {
};

export default LoginButton;

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
  },
  login: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  },
});
