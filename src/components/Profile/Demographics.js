import React from 'react';
import { shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View, SectionList,
} from 'react-native';

import { patientSelector } from '../../redux/selectors';

import {
  getPatientGender,
  formatPatientBirthDate,
  getPatientAge,
  getPatientAddresses,
  formatAddress,
} from '../../resources/fhirReader';
import Colors from '../../constants/Colors';

const Demographics = ({
  patientResource,
}) => {
  const birthDate = formatPatientBirthDate(patientResource);
  const age = getPatientAge(patientResource);
  const gender = getPatientGender(patientResource);
  const address = formatAddress(getPatientAddresses(patientResource));

  const demographics = [
    {
      title: 'Date of birth',
      data: [birthDate],
    },
    {
      title: 'Age',
      data: [age],
    },
    {
      title: 'Gender',
      data: [gender],
    },
    {
      title: 'Address',
      data: [address],
    },
  ];

  // eslint-disable-next-line react/prop-types
  const Item = ({ title }) => (
    <View style={styles.demographicsRow}>
      <Text style={styles.demographicsData}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.demographicsContainer}>
      <View style={styles.panelHeader}>
        <Text style={styles.panelText}>
          Demographics
        </Text>
      </View>
      <SectionList
        sections={demographics}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.demographicsHeader}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <Item
            title={item}
          />
        )}
      />
    </View>
  );
};

Demographics.propTypes = {
  patientResource: shape({}),
};

Demographics.defaultProps = {
  patientResource: null,
};

const mapStateToProps = (state) => ({
  patientResource: patientSelector(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Demographics);

const styles = StyleSheet.create({
  panelHeader: {
    padding: 5,
    backgroundColor: Colors.secondary,
  },
  panelText: {
    color: 'white',
    fontSize: 16,
    padding: 5,
  },
  demographicsContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  demographicsHeader: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: 'white',
    fontSize: 14,
    color: 'black',
  },
  demographicsRow: {
    padding: 10,
    backgroundColor: 'white',
  },
  demographicsData: {
    color: Colors.darkgrey,
  },
});
