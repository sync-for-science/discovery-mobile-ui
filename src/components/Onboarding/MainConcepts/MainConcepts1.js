import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import DataHierarchy from '../../../../assets/images/screenshots/screenshot-data-hierarchy.svg';
import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

// wireframe page 6
const OBMainConcepts1 = () => (
  <OBSectionBodyTemplate title="Main Concepts" subTitle="Records">
    <Text style={styles.body}>
      Providers deliver your medical information in individual Records.
    </Text>
    <Text style={styles.body}>
      Each medical Record belongs to a category (Vital Signs, Conditions,
      etc.) and has a type (Vital Signs: Blood Pressure, Body Weight, etc.).
    </Text>
    <Text style={styles.body}>
      Records have a specific finding with date, values, active status, etc.
    </Text>
    <DataHierarchy height={hp('32%')} width={hp('100%')} />
  </OBSectionBodyTemplate>
);

export default OBMainConcepts1;

const { body3 } = TextStyles;
const { rd5 } = ResponsiveDimensions;
const styles = StyleSheet.create({
  body: {
    ...body3,
    textAlign: 'center',
    marginBottom: rd5,
  },
});
