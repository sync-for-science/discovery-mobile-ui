import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { node, string } from 'prop-types';

import TextStyles from '../../constants/TextStyles';
import discoveryBasic from '../../../assets/images/discovery-basic-logo.png';

const OBInfoTemplate = ({ title, subTitle, children }) => {
  const {
    h2, h4, alignCenter, mb5,
  } = TextStyles;
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Image
          style={[styles.logo, mb5]}
          source={discoveryBasic}
          resizeMode="contain"
        />
        <Text style={[h2, alignCenter, mb5]}>{title}</Text>
      </View>
      <Text style={[h4, alignCenter, mb5]}>
        {subTitle}
      </Text>
      {children}
    </View>
  );
};

OBInfoTemplate.propTypes = {
  title: string.isRequired,
  subTitle: string.isRequired,
  children: node.isRequired,
};

export default OBInfoTemplate;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    height: 60,
    width: 60,
    marginRight: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
});
