import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import Colors from '../../../constants/Colors';
import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

// wireframe page 23
const OBDataAccess4 = () => (
  <OBSectionBodyTemplate title="Data Access" subTitle="Success!" showSuccess>
    <View style={styles.flashContainer}>
      <Text style={[styles.body, styles.flashText]}>
        You have successfully connected to your Provider and Discovery
        will be able to pull your data.
      </Text>
    </View>
    <Text style={styles.body}>
      If you wish to change the Provider, you can always
      do that from your Profile page.
    </Text>
  </OBSectionBodyTemplate>
);

export default OBDataAccess4;

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
