import React, { FunctionComponent } from 'react';
import { shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View, SectionList,
} from 'react-native';
import { Patient } from 'fhir/r4'; // eslint-disable-line import/no-extraneous-dependencies

import { patientSelector } from '../../redux/selectors';

import {
  formatPatientBirthDate,
  formatPatientAge,
  formatPatientGender,
  formatPatientAddress,
} from '../../resources/fhirReader';
import Colors from '../../constants/Colors';
import TextStyles from '../../constants/TextStyles';

type SectionHeaderProps = {
  section: {
    title: string
  }
};

const SectionHeader = ({ section: { title } }: SectionHeaderProps) => (
  <Text style={styles.subHeading}>{title}</Text>
);

type SectionItemProps = {
  item: string
};

const SectionItem = ({ item }: SectionItemProps) => (
  <View style={styles.row}>
    <Text style={styles.data}>{item}</Text>
  </View>
);

type DemographicsProps = {
  patientResource: Patient | null
};

const Demographics: FunctionComponent<DemographicsProps> = ({ patientResource }) => {
  const demographics = [
    {
      title: 'Date of birth',
      data: [formatPatientBirthDate(patientResource)],
    },
    {
      title: 'Age',
      data: [formatPatientAge(patientResource)],
    },
    {
      title: 'Gender',
      data: [formatPatientGender(patientResource)],
    },
    {
      title: 'Address',
      data: [formatPatientAddress(patientResource)],
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
        renderSectionHeader={SectionHeader}
        renderItem={SectionItem}
      />
    </View>
  );
};

Demographics.propTypes = {
  // @ts-ignore
  patientResource: shape({}),
};

Demographics.defaultProps = {
  patientResource: null,
};

const mapStateToProps = (state: any) => ({
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
