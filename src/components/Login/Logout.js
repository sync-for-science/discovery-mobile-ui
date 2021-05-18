import { cloneElement } from 'react';
import { element, func } from 'prop-types';
import { connect } from 'react-redux';
import { useResetRecoilState } from 'recoil';

import { clearAuth } from '../../features/auth/authSlice';
import { actionTypes } from '../../redux/action-types';
import { authenticationState } from '../../recoil';

const Logout = ({
  children, clearAuthAction, clearPatientDataAction,
}) => {
  const resetAuthentication = useResetRecoilState(authenticationState);

  const handleLogout = () => {
    clearAuthAction();
    clearPatientDataAction();
    resetAuthentication();
  };

  return cloneElement(children, { onPress: handleLogout });
};

Logout.propTypes = {
  children: element.isRequired,
  clearAuthAction: func.isRequired,
  clearPatientDataAction: func.isRequired,
};

const mapDispatchToProps = {
  clearAuthAction: clearAuth,
  clearPatientDataAction: () => ({
    type: actionTypes.CLEAR_PATIENT_DATA,
  }),
};

export default connect(null, mapDispatchToProps)(Logout);
