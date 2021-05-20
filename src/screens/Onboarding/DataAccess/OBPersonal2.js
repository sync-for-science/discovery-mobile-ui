import React from 'react';
import {
  StyleSheet, Text, View, Image, TextInput,
} from 'react-native';

import TextStyles from '../../../constants/TextStyles';
import discoveryBasic from '../../../../assets/images/discovery-basic-logo.png';
import Colors from '../../../constants/Colors';

// wireframe page 7
const OBPersonal1 = () => {
  const {
    h2, h4, alignCenter, mb2, mb5,
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
        Personal Information
      </Text>
      <View style={styles.formContainer}>
        <Text style={mb2}>Name</Text>
        <TextInput style={styles.textInput} />
        <Text style={mb2}>Family Name</Text>
        <TextInput style={styles.textInput} />
        <Text style={mb2}>Date of Birth</Text>
        <TextInput style={styles.textInput} />
      </View>
    </View>
  );
};

export default OBPersonal1;

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
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    borderRadius: 8,
    marginBottom: 20,
  },
});
