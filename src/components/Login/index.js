import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import FhirKitClient from 'fhir-kit-client';
import Constants from 'expo-constants'; // eslint-disable-line import/no-extraneous-dependencies

import Colors from '../../constants/Colors';
import LoadingIndicator from '../LoadingIndicator';

// import PatientPicker, { DEFAULT_PATIENT_ID } from './PatientPicker';
import LoginButton from './LoginButton';
import OrganizationPicker from './OrganizationPicker';
// import SkipLoginButton from './SkipLoginButton';
import epicOrganizations from '../../../config/epic-portals';

// https://open.epic.com/MyApps/Endpoints
const { BASE_URL } = Constants.manifest.extra;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [baseUrl, setBaseUrl] = useState(epicOrganizations[0].baseUrl);
  const [authorizeUrl, setAuthorizeUrl] = useState(false);
  const [tokenUrl, setTokenUrl] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fhirClient = new FhirKitClient({ baseUrl });
    const authMetadataRequest = fhirClient.smartAuthMetadata();
    authMetadataRequest.then((fkcResult) => {
      setLoading(false);
      const { authorizeUrl: auth, tokenUrl: tok } = fkcResult;
      setAuthorizeUrl(auth);
      setTokenUrl(tok);
    });
    authMetadataRequest.catch((error) => {
      setLoading(false);
      console.error(String(error));
    });
  }, [baseUrl]);

  if (!authorizeUrl || !tokenUrl) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.body}>
      { loading && (<LoadingIndicator />)}
      { !loading && (
        <>
          <OrganizationPicker
            loading={loading}
            organizations={epicOrganizations}
            selectedValue={baseUrl}
            onChange={(url) => { console.info('OrganizationPicker: ', url); setBaseUrl(url); }}
          />
          <LoginButton
            setLoading={setLoading}
            baseUrl={BASE_URL}
            authorizeUrl={authorizeUrl.toString()}
            tokenUrl={tokenUrl.toString()}
          />
        </>
      )}
    </View>
  );
};

Login.propTypes = {
};

Login.defaultProps = {
};

export default Login;

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
