import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';

import OBTemplate from '../OBTemplate';
import TextStyles from '../../../constants/TextStyles';
import Colors from '../../../constants/Colors';

// wireframe page 20
const SCREEN_NUMBER = 18;
const SECTION_TITLE = 'Video Tutorial';
const NEXT_SCREEN = 'video';

const OBScreenVideo = () => {
  const {
    h2, h6, alignCenter, mb5, italic,
  } = TextStyles;
  return (
    <OBTemplate
      screenNumber={SCREEN_NUMBER}
      sectionTitle={SECTION_TITLE}
      nextScreen={NEXT_SCREEN}
      showHeaderLogo={false}
    >
      <View style={styles.default}>
        <Text style={[h6, alignCenter, mb5]}>
          Take a look at this video tutorial and get a feel
          how the app works on a use case for a fictitious patient!
        </Text>
        <View style={[styles.logoContainer, mb5]}>
          <Text style={[h2, alignCenter, italic, styles.tempLogoText]}>LOGO HERE</Text>
        </View>
        <TouchableOpacity style={styles.actionContainer}>
          <Text style={[h6, alignCenter]}>
            Video
          </Text>
        </TouchableOpacity>
      </View>
    </OBTemplate>
  );
};

export default OBScreenVideo;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    alignItems: 'center',
  },
  actionContainer: {
    backgroundColor: Colors.lightgrey2,
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  logoContainer: {
    height: 100,
    width: 100,
    backgroundColor: Colors.mediumgrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempLogoText: {
    color: Colors.lightgrey,
  },
});
