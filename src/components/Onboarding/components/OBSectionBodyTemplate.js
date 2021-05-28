import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { bool, node, string } from 'prop-types';
import { AntDesign } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import Colors from '../../../constants/Colors';
import TextStyles from '../../../constants/TextStyles';
import LogoBasic from '../../../icons/LogoBasic';

const OBSectionBodyTemplate = ({
  title, subTitle, showSuccess, children,
}) => {
  const {
    h3, h5, alignCenter, mb4,
  } = TextStyles;
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <View style={styles.logoContainer}>
          <LogoBasic height={50} width={50} />
        </View>
        <Text style={[h3, alignCenter]}>{title}</Text>
      </View>
      <View style={[styles.subTitleContainer, mb4]}>
        {showSuccess && (
          <AntDesign
            name="checkcircle"
            style={styles.successIcon}
            size={24}
            color={Colors.logoBlue}
          />
        )}
        <Text style={[h5, alignCenter]}>
          {subTitle}
        </Text>
      </View>
      {children}
    </View>
  );
};

OBSectionBodyTemplate.propTypes = {
  title: string.isRequired,
  subTitle: string.isRequired,
  children: node.isRequired,
  showSuccess: bool,
};

OBSectionBodyTemplate.defaultProps = {
  showSuccess: false,
};

export default OBSectionBodyTemplate;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginRight: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    justifyContent: 'center',
  },
  subTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  successIcon: {
    marginRight: 10,
  },
});
