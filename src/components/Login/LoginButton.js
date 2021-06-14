import React, { useEffect } from 'react';
import { string } from 'prop-types';
import { useSetRecoilState } from 'recoil';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser'; // eslint-disable-line import/no-extraneous-dependencies
import Constants from 'expo-constants'; // eslint-disable-line import/no-extraneous-dependencies

import { authenticationState } from '../../recoil';
import Colors from '../../constants/Colors';

WebBrowser.maybeCompleteAuthSession();

// Reference:
//   https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/metadata
//   https://open.epic.com/MyApps/Endpoints
//   https://fhir.epic.com/Documentation?docId=testpatients
const SCOPES = [
  'launch/patient',
  'openid',
  'fhirUser',
  'profile',
  'patient/*.read',
  'user/*.read',
  'online_access',
];

const redirectUri = AuthSession.makeRedirectUri({
  useProxy: true,
  path: '@sync-for-science/discovery-mobile-ui',
});

const LoginButton = ({
  // setLoading,
  baseUrl,
  authorizeUrl,
  tokenUrl,
}) => {
  const discovery = {
    authorizationEndpoint: authorizeUrl,
    tokenEndpoint: tokenUrl,
    // revocationEndpoint: `${serverUrl}/revoke`,
  };
  const setAuthentication = useSetRecoilState(authenticationState);

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      responseType: AuthSession.ResponseType.Code, // Code | IdToken | Token
      clientId: Constants.manifest.extra.CLIENT_ID,
      usePKCE: true,
      scopes: SCOPES,
      redirectUri,
      extraParams: {
        aud: baseUrl,
      },
    },
    discovery,
  );

  useEffect(() => {
    if (response?.type === 'success') {
      // const authorizationCode = response.params.code;
      const tokenRequest = AuthSession.exchangeCodeAsync(
        {
          clientId: request.clientId,
          clientSecret: request.clientSecret,
          redirectUri: request.redirectUri,
          scopes: request.scopes,
          code: response.params.code,
          extraParams: {
            code_verifier: request.codeVerifier,
          },
        },
        {
          tokenEndpoint: discovery.tokenEndpoint,
        },
      );

      tokenRequest.then((tokenResponse) => {
        // setLoading(false); // unmounts immediately after setAuthentication
        setAuthentication({
          baseUrl,
          authResult: tokenResponse,
        });
      });
      tokenRequest.catch((error) => {
        Alert.alert('Token Request Error', String(error), ['ok']);
        // setLoading(false);
      });
    }
  }, [response, discovery, request]);

  const handleLogin = async () => {
    // setLoading(true);
    try {
      await promptAsync({ useProxy: true });
    } catch (error) {
      console.error('Token request error:', error); // eslint-disable-line no-console
      Alert.alert('Login Error', 'Must login to use Discovery', ['ok']);
      // setLoading(false);
    }
  };

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
  // setLoading: func.isRequired,
  baseUrl: string.isRequired,
  authorizeUrl: string.isRequired,
  tokenUrl: string.isRequired,
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
