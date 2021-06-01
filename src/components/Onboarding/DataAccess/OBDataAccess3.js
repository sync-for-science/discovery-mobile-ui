import React from 'react';
import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';

import Colors from '../../../constants/Colors';
import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

// wireframe page 21
const OBDataAccess3 = () => (
  <OBSectionBodyTemplate title="Data Access" subTitle="Connect to Provider">
    <View style={styles.flashContainer}>
      <Text style={[styles.body, styles.flashText]}>
        You can pull medical Records from only one Provider for which
        you have a patient portal account.
      </Text>
    </View>
    <Text style={styles.body}>
      Upon selecting a Provider, you will be redirected to your patient portal
      where you will login to approve sharing with Discovery.
    </Text>
    <TextInput style={styles.textInput} placeholder="Select Provider" />
  </OBSectionBodyTemplate>
);

export default OBDataAccess3;

const { body3 } = TextStyles;
const {
  rd2, rd3, rd4, rd5,
} = ResponsiveDimensions;

const styles = StyleSheet.create({
  body: {
    ...body3,
    textAlign: 'center',
    marginBottom: rd5,
  },
  textInput: {
    width: '100%',
    padding: rd2,
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    borderRadius: rd2,
    marginBottom: rd5,
  },
  flashContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: rd4,
    marginBottom: rd5,
    padding: rd3,
  },
  flashText: {
    marginBottom: 0,
  },
});
