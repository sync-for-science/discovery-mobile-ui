import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { bool, node, string } from 'prop-types';
import { AntDesign } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from '../../../constants/Colors';
import TextStyles from '../../../constants/TextStyles';
import LogoBasic from '../../../icons/LogoBasic';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions'

const OBSectionBodyTemplate = ({
  title, subTitle, showSuccess, children,
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <View style={styles.logoContainer}>
          <LogoBasic height={hp('5%')} width={hp('5%')} />
        </View>
        <Text style={styles.titleText}>{title}</Text>
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

const {
  h3, h5, alignCenter, mb4,
} = TextStyles;
const { rd2, rd4, rd5 } = ResponsiveDimensions

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: rd5,
  },
  logoContainer: {
    marginRight: rd4,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rd2,
    justifyContent: 'flex-start',
    width: '100%',
  },
  titleText: {
    ...h3,
    textAlign: 'center'
  },
  subTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  successIcon: {
    marginRight: rd2,
  },
});
