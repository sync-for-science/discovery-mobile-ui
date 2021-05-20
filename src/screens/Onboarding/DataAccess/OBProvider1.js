import React from 'react';
import {
  StyleSheet, Text, View, Image, TextInput,
} from 'react-native';

import TextStyles from '../../../constants/TextStyles';
import discoveryBasic from '../../../../assets/images/discovery-basic-logo.png';
import Colors from '../../../constants/Colors';

// wireframe page 8
const OBProvider1 = () => {
  const {
    h2, h4, alignCenter, mb5,
  } = TextStyles;
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Image
          style={[styles.logo, mb5]}
          source={discoveryBasic}
          resizeMode="contain"
        />
        <Text style={[h2, alignCenter, mb5]}>Data Access</Text>
      </View>
      <Text style={[h4, alignCenter, mb5]}>
        Provider
      </Text>
      <View style={styles.flashContainer}>
        <Text style={[alignCenter, styles.body]}>
          In this first version of Discovery, you can only pull
          records from one provider.
        </Text>
      </View>
      <Text style={[alignCenter, mb5, styles.body]}>
        You will need a patient portal account for the provider
        you select in the drop-down list.
      </Text>
      <Text style={[alignCenter, mb5, styles.body]}>
        You will be then redirected to your Patient Portal where
        you login to approve sharing with Discovery.
      </Text>
      <TextInput style={styles.textInput} placeholder="Select Provider" />
    </View>
  );
};

export default OBProvider1;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    height: 60,
    width: 60,
    marginRight: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  body: {
    fontSize: 18,
    lineHeight: 24,
  },
  formContainer: {
    width: '100%',
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
});
