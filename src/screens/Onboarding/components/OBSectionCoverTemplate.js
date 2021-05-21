import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { node, string } from 'prop-types';

import TextStyles from '../../../constants/TextStyles';
import discoveryBasic from '../../../../assets/images/discovery-basic-logo.png';

const OBSectionCoverTemplate = ({ title, children }) => {
  const {
    h2, alignCenter, mb5,
  } = TextStyles;
  return (
    <View style={styles.root}>
      <Text style={[h2, alignCenter, mb5]}>{title}</Text>
      <Image
        style={[styles.logo, mb5]}
        source={discoveryBasic}
        resizeMode="contain"
      />
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
  logo: {
    height: 60,
  },
});
