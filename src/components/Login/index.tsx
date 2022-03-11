import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';

import LoginButton from './LoginButton';
import EndpointPicker from './EndpointPicker';
import { selectedEndpointIdState, baseUrlState, endpointBundleState } from '../../recoil';

const Login = () => {
  const endpointBundle = useRecoilValue(endpointBundleState);
  const [endpointId, setEndpointId] = useRecoilState(selectedEndpointIdState);
  const baseUrl = useRecoilValue(baseUrlState);

  if (!endpointBundle) {
    return null;
  }

  return (
    <>
      <EndpointPicker
        prompt="Select a hospital system portal: "
        endpoints={endpointBundle.entry}
        selectedValue={endpointId as string}
        onChange={setEndpointId}
      />
      {baseUrl && <LoginButton baseUrl={baseUrl} />}
    </>
  );
};

Login.propTypes = {
};

Login.defaultProps = {
};

export default Login;
