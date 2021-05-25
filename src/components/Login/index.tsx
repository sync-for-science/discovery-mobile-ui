import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { useRecoilValue, useRecoilState } from 'recoil';

import Colors from '../../constants/Colors';
import LoginButton from './LoginButton';
import EndpointPicker from './EndpointPicker';
import { selectedEndpointIdState, baseUrlState, endpointBundleState } from '../../recoil';

const Login = () => {
  const endpointBundle = useRecoilValue(endpointBundleState);
  const [endpointId, setEndpointId] = useRecoilState(selectedEndpointIdState);
  const baseUrl = useRecoilValue(baseUrlState);

  return (
    <View style={styles.body}>
      <EndpointPicker
        loading={false}
        prompt="Select a hospital system / clinic / portal: "
        endpoints={endpointBundle.entry}
        selectedValue={endpointId as string}
        onChange={setEndpointId}
      />
      {baseUrl && <LoginButton baseUrl={baseUrl} />}
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
    backgroundColor: Colors.logoBlue,
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  },
});
