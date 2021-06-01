import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from '../../../constants/Colors';
import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';
import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

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

const { body3 } = TextStyles;
const { rd5 } = ResponsiveDimensions;

const styles = StyleSheet.create({
  body: {
    ...body3,
    textAlign: 'center',
    marginBottom: rd5,
  },
  image: {
    width: '100%',
    height: hp('25%'),
    backgroundColor: Colors.lightgrey2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
