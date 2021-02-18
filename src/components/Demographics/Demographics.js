import React from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View, SectionList, SafeAreaView,
} from 'react-native';

import Colors from '../../constants/Colors';
import { clearPatient } from '../../features/patient/patientSlice';

const Demographics = ({
  navigation, patient, clearAuthAction, clearPatientAction,
}) => {
  const DATA = [
    {
      title: 'Demographics',
      data: ['Birth date', 'Age', 'Gender', 'Address'],
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

Demographics.propTypes = {
  navigation: shape({}).isRequired,
  patient: shape({}),
  clearPatientAction: func.isRequired,
};

Demographics.defaultProps = {
  patient: null,
};

const mapStateToProps = (state) => ({
  patient: state.patient.patient,
});

const mapDispatchToProps = { clearPatientAction: clearPatient };

export default connect(mapStateToProps, mapDispatchToProps)(Demographics);

const styles = StyleSheet.create({
  /* css here */
});
