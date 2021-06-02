import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { node, string } from 'prop-types';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TextStyles from '../../../constants/TextStyles';
import LogoBasic from '../../../icons/LogoBasic';

const OBSectionCoverTemplate = ({ title, children }) => {
  const {
    h2, alignCenter, mb5,
  } = TextStyles;
  return (
    <View style={styles.root}>
      <Text style={[h2, alignCenter, mb5]}>{title}</Text>
      <View style={styles.logoContainer}>
        <LogoBasic height={hp('8%')} width={hp('8%')} />
      </View>
      {children}
    </View>
  );
};

OBSectionCoverTemplate.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
};

export default OBSectionCoverTemplate;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
});
