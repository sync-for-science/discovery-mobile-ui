import { cloneElement } from 'react';
import { element, func } from 'prop-types';
import { connect } from 'react-redux';
import { useResetRecoilState } from 'recoil';

import { actionTypes } from '../../redux/action-types';
import { authenticationState } from '../../recoil';

const Logout = ({
  children, clearPatientDataAction,
}) => {
  const resetAuthentication = useResetRecoilState(authenticationState);

  const handleLogout = () => {
    clearPatientDataAction();
    resetAuthentication();
  };

  return cloneElement(children, { onPress: handleLogout });
};

Logout.propTypes = {
  children: element.isRequired,
  clearPatientDataAction: func.isRequired,
};

const mapDispatchToProps = {
  clearPatientDataAction: () => ({
    type: actionTypes.CLEAR_PATIENT_DATA,
  }),
};

export default connect(null, mapDispatchToProps)(Logout);
