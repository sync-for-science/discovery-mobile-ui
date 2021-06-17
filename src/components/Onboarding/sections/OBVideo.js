import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';
import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

const OBVideo = () => (
  <OBSectionCoverTemplate title="Video Tutorial">
    <Text style={styles.body}>
      See Discovery demonstrated in the following video
    </Text>
    <View style={styles.videoContainer}>
      <YoutubePlayer
        height={250}
        videoId="Px3564G-vw4"
      />
    </View>
  </OBSectionCoverTemplate>
);

export default OBVideo;

const { body4 } = TextStyles;
const { rd5 } = ResponsiveDimensions;

const styles = StyleSheet.create({
  body: {
    ...body4,
    textAlign: 'center',
    marginBottom: rd5,
  },
  videoContainer: {
    width: '100%',
  },
});
