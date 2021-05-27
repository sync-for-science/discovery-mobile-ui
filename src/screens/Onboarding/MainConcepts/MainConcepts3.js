import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import Colors from '../../../constants/Colors';

// wireframe page 8
const OBMainConcepts3 = () => (
  <OBSectionBodyTemplate title="Main Concepts" subTitle="Notes">
    <Text style={styles.body}>
      You can add Notes to an entire Collection or individual Records.
    </Text>
    <Text style={styles.body}>
      Add Notes to capture insights about a Collection or enrich what
      is already captured in your individual Records, log personal information
      or journal daily concerns, and add explanations, clarifications or reminders.
    </Text>
    <View style={styles.image}>
      <Text>Image</Text>
    </View>
  </OBSectionBodyTemplate>
);

export default OBMainConcepts3;

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.lightgrey2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
