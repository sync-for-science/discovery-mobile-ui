import React from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';
import { bool, node, string } from 'prop-types';
import { AntDesign } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import Colors from '../../../constants/Colors';
import TextStyles from '../../../constants/TextStyles';
import LogoBasic from '../../../icons/LogoBasic'

const OBSectionBodyTemplate = ({
  title, subTitle, showSuccess, children,
}) => {
  const {
    h2, h4, alignCenter, mb5,
  } = TextStyles;
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <View style={styles.logoContainer}>
          <LogoBasic height={60} width={60}/>
        </View>
        <Text style={[h2, alignCenter]}>{title}</Text>
      </View>
      <View style={[styles.subTitleContainer, mb5]}>
        {showSuccess && (
          <AntDesign
            name="checkcircle"
            style={styles.successIcon}
            size={24}
            color={Colors.logoBlue}
          />
        )}
        <Text style={[h4, alignCenter]}>
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
    marginBottom: 20,
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
