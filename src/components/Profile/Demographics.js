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
import TextStyles from '../../constants/TextStyles';

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

  return (
    <View style={styles.root}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>
          Demographics
        </Text>
      </View>
      <SectionList
        sections={demographics}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.subHeading}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.data}>{item}</Text>
          </View>
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

const { h6, body1 } = TextStyles;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
  },
  headingContainer: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: Colors.primaryLight,
  },
  headingText: {
    color: 'black',
    ...h6,
    fontWeight: '400',
  },
  subHeading: {
    paddingHorizontal: 32,
    paddingTop: 10,
    color: Colors.darkgrey2,
    ...body1,
  },
  row: {
    paddingHorizontal: 32,
    backgroundColor: 'white',
  },
  data: {
    color: 'black',
    ...body1,
  },
});
