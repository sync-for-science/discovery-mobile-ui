import React from 'react';
import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';

import Colors from '../../../constants/Colors';
import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';

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

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    borderRadius: 8,
    marginBottom: 20,
  },
  flashContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 16,
    marginBottom: 20,
    padding: 10,
  },
  flashText: {
    marginBottom: 0,
  },
});
