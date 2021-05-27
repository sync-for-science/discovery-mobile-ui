import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import Colors from '../../../constants/Colors';
import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';

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

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
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
