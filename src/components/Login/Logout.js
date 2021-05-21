import { cloneElement } from 'react';
import { element } from 'prop-types';
import { useResetRecoilState } from 'recoil';

import { authenticationState } from '../../recoil';

const Logout = ({
  children,
}) => {
  const resetAuthentication = useResetRecoilState(authenticationState);

  return cloneElement(children, { onPress: resetAuthentication });
};

Logout.propTypes = {
  children: element.isRequired,
};

export default Logout;
