import React from 'react';
import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';

import Colors from '../../../constants/Colors';
import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

// wireframe page 20
const OBDataAccess2 = () => (
  <OBSectionBodyTemplate title="Data Access" subTitle="Personal Information">
    <View style={styles.formContainer}>
      <Text style={styles.inputLabel}>Name</Text>
      <TextInput style={styles.textInput} />
      <Text style={styles.inputLabel}>Family Name</Text>
      <TextInput style={styles.textInput} />
      <Text style={styles.inputLabel}>Date of Birth</Text>
      <TextInput style={styles.textInput} />
    </View>
  </OBSectionBodyTemplate>
);

export default OBDataAccess2;

const { rd2, rd5 } = ResponsiveDimensions;

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
  },
  textInput: {
    padding: rd2,
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    borderRadius: rd2,
    marginBottom: rd5,
  },
  inputLabel: {
    marginBottom: rd2,
  },
});
