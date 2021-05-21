import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';

// wireframe page 13
const OBYourData = () => (
  <OBSectionBodyTemplate title="Data Organization" subTitle="Your Data">
    <Text style={styles.body}>
      You can group your medical records much as you group photos in your photo albums.
    </Text>
    <Text style={styles.body}>
      Anything you do in this app will be stored in a Collection (analogous to album).
      What this means is that for any questions or issues you may have you will be able
      to identify relevant Records (analogous to photos) and save them under a Collection
      with a convenient name.
    </Text>
    <Text style={styles.body}>
      You will be then able to quickly access any Collection you want, at any time,
      and get to those relevant Records instantaneously.
    </Text>
  </OBSectionBodyTemplate>
);

export default OBYourData;

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});
