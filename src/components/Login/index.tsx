import React from 'react';
import { useRecoilValue } from 'recoil';

import EndpointPicker from './EndpointPicker';
import { endpointBundleState } from '../../recoil';

const Login = () => {
  const endpointBundle = useRecoilValue(endpointBundleState);
  if (!endpointBundle) {
    return null;
  }

  return (
    <EndpointPicker
      endpoints={endpointBundle.entry}
    />
  );
};

Login.propTypes = {
};

Login.defaultProps = {
};

export default Login;
