import React from 'react';
import { shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import {
  getPatientName,
} from '../../resources/fhirReader';
import { patientSelector } from '../../redux/selectors';

const UserInfo = ({
  patientResource,
}) => {
  const name = getPatientName(patientResource);

  return (
    <View style={styles.root}>
      <Ionicons name="person-circle-outline" size={40} color="black" />
      <Text style={styles.userName}>
        {name}
      </Text>
    </View>
  );
};

UserInfo.propTypes = {
  patientResource: shape({}),
};

UserInfo.defaultProps = {
  patientResource: null,
};

const mapStateToProps = (state) => ({
  patientResource: patientSelector(state),
});

export default connect(mapStateToProps, null)(UserInfo);

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    textAlign: 'center',
    padding: 15,
    paddingTop: 20,
  },
});
