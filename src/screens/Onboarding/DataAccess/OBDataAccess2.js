import React from 'react';
import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';

import TextStyles from '../../../constants/TextStyles';
import Colors from '../../../constants/Colors';
import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';

// wireframe page 20
const OBDataAccess2 = () => {
  const {
    mb2,
  } = TextStyles;
  return (
    <OBSectionBodyTemplate title="Data Access" subTitle="Personal Information">
      <View style={styles.formContainer}>
        <Text style={mb2}>Name</Text>
        <TextInput style={styles.textInput} />
        <Text style={mb2}>Family Name</Text>
        <TextInput style={styles.textInput} />
        <Text style={mb2}>Date of Birth</Text>
        <TextInput style={styles.textInput} />
      </View>
    </OBSectionBodyTemplate>
  );
};

export default OBDataAccess2;

const styles = StyleSheet.create({
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
