import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Image,
} from 'react-native';

import OBTemplate from '../OBTemplate';
import TextStyles from '../../../constants/TextStyles';
import Colors from '../../../constants/Colors';
import discoveryBasic from '../../../../assets/images/discovery-basic-logo.png';

// wireframe page 20
const SCREEN_NUMBER = 18;
const SECTION_TITLE = 'Video Tutorial';
const NEXT_SCREEN = 'Complete';

const OBScreenVideo = () => {
  const {
    h6, alignCenter, mb5,
  } = TextStyles;
  return (
    <OBTemplate
      screenNumber={SCREEN_NUMBER}
      sectionTitle={SECTION_TITLE}
      nextScreen={NEXT_SCREEN}
      showHeaderLogo={false}
    >
      <View style={styles.default}>
        <Image
          style={[styles.logo, mb5]}
          source={discoveryBasic}
          resizeMode="contain"
        />
        <Text style={[h6, alignCenter, mb5]}>
          Take a look at this video tutorial and get a feel
          how the app works on a use case for a fictitious patient!
        </Text>
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
  tempLogoText: {
    color: Colors.lightgrey,
  },
  logo: {
    height: 120,
  },
});
