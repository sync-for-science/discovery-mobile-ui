import React from 'react';
import { useRecoilValue } from 'recoil';

import EndpointPicker from './EndpointPicker';
import { endpointOptionsSortedState } from '../../recoil';

const Login = () => {
  const endpointOptions = useRecoilValue(endpointOptionsSortedState);

  if (!endpointOptions.length) {
    return null;
  }

  return (
    <EndpointPicker
      endpointOptions={endpointOptions}
    />
  );
};

Login.propTypes = {
};

Login.defaultProps = {
};

export default Login;
