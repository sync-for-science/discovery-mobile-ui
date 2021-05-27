import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import Colors from '../../../constants/Colors';
import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';

// wireframe page 16
const OBVideo = () => (
  <OBSectionCoverTemplate title="Video Tutorial">
    <Text style={styles.body}>
      See Discovery demonstrated in the following video
    </Text>
    <View style={styles.image}>
      <Text>Video</Text>
    </View>
  </OBSectionCoverTemplate>
);

export default OBVideo;

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
