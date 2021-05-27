import React from 'react';
import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';

import Colors from '../../../constants/Colors';
import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';

// wireframe page 8
const OBProvider1 = () => (
  <OBSectionBodyTemplate title="Data Access" subTitle="Provider">
    <View style={styles.flashContainer}>
      <Text style={[styles.body, styles.flashText]}>
        In this first version of Discovery, you can only pull
        records from one provider.
      </Text>
    </View>
    <Text style={styles.body}>
      You will need a patient portal account for the provider
      you select in the drop-down list.
    </Text>
    <Text style={styles.body}>
      You will be then redirected to your Patient Portal where
      you login to approve sharing with Discovery.
    </Text>
    <TextInput style={styles.textInput} placeholder="Select Provider" />
  </OBSectionBodyTemplate>
);

export default OBProvider1;

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
