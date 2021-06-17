import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { node, string } from 'prop-types';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';
import LogoBasic from '../../../icons/LogoBasic';

const OBSectionCoverTemplate = ({ title, children }) => (
  <View style={styles.root}>
    <Text style={styles.titleText}>{title}</Text>
    <View style={styles.logoContainer}>
      <LogoBasic height={hp('8%')} width={hp('8%')} />
    </View>
    {children}
  </View>
);

OBSectionCoverTemplate.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
};

export default OBSectionCoverTemplate;

const { rd5 } = ResponsiveDimensions;
const {
  h2,
} = TextStyles;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: rd5,
  },
  logoContainer: {
    marginBottom: rd5,
  },
  titleText: {
    ...h2,
    marginBottom: rd5,
    textAlign: 'center',
  },
});
