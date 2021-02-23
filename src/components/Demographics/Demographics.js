import React from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View, SectionList, SafeAreaView,
} from 'react-native';

import Colors from '../../constants/Colors';
import { clearPatient } from '../../features/patient/patientDataSlice';

const Demographics = ({
  navigation, patient, clearAuthAction, clearPatientAction,
}) => {
  const DATA = [
    {
      title: 'Birth date',
      data: ['Oct 24, 2000'],
    },
    {
      title: 'Age',
      data: ['20yr'],
    },
    {
      title: 'Gender',
      data: ['Female'],
    },
    {
      title: 'Address',
      data: ['432 Gaylord Station Suite 4\nLos Angeles, California 90001\nUS'],
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.demographicsRow} >
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.demographicsContainer}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title.toUpperCase()}</Text>
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
  demographicsContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  demographicsRow: {
    width: '90%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
});
