import React from 'react';
import {
  StyleSheet, Text, View, Image
} from 'react-native';

import TextStyles from '../../../constants/TextStyles';
import discoveryBasic from '../../../../assets/images/discovery-basic-logo.png';
import Colors from '../../../constants/Colors';

// wireframe page 10
const OBProvider2 = () => {
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
        Success
      </Text>
      <View style={styles.warningContainer}>
        <Text style={[alignCenter, styles.body]}>
          You have successfully connected to your Provider and Discovery 
          will be able to pull your data.
        </Text>
      </View>
      <Text style={[alignCenter, mb5, styles.body]}>
        If you wish to change the Provider you are accessing data from, 
        you can always do that from your Profile in the app.
      </Text>
    </View>
  );
};

export default OBProvider2;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
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
  warningContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 16,
    marginBottom: 20,
    padding: 10
  }
});
