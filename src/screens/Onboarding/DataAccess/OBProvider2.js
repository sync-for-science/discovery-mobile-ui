import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

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
      <View style={[styles.successContainer, mb5]}>
        <AntDesign name="checkcircle" size={24} color={Colors.primary} />
        <Text style={[h4, alignCenter, styles.successText]}>
          Success
        </Text>
      </View>
      <View style={styles.flashContainer}>
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
    justifyContent: 'center',
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
  successContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  successText: {
    marginLeft: 10,
  },
});
