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
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

const OBSectionBodyTemplate = ({
  title, subTitle, subTitle2, showSuccess, children,
}) => (
  <View style={styles.root}>
    <View style={styles.titleContainer}>
      <View style={styles.logoContainer}>
        <LogoBasic height={hp('5%')} width={hp('5%')} />
      </View>
      <Text style={styles.titleText}>{title}</Text>
    </View>
    <View style={styles.subTitlesContainer}>
      <View style={styles.subTitleContainer}>
        {showSuccess && (
        <AntDesign
          name="checkcircle"
          style={styles.successIcon}
          size={24}
          color={Colors.logoBlue}
        />
        )}
        <Text style={styles.subTitleText}>
          {subTitle}
        </Text>
      </View>
      {subTitle2 && (
        <View style={styles.subTitle2Container}>
          <Text style={styles.subTitle2Text}>
            {subTitle2}
          </Text>
        </View>
      )}
    </View>
    {children}
  </View>
);

OBSectionBodyTemplate.propTypes = {
  title: string.isRequired,
  subTitle: string.isRequired,
  subTitle2: string,
  children: node.isRequired,
  showSuccess: bool,
};

OBSectionBodyTemplate.defaultProps = {
  showSuccess: false,
  subTitle2: null,
};

export default OBSectionBodyTemplate;

const {
  h3, h4, body4,
} = TextStyles;
const {
  rd1, rd2, rd3, rd4, rd5,
} = ResponsiveDimensions;

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
    marginVertical: rd3,
    justifyContent: 'flex-start',
    width: '100%',
  },
  titleText: {
    ...h3,
    textAlign: 'center',
  },
  subTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  successIcon: {
    marginRight: rd2,
  },
  subTitleText: {
    ...h4,
    textAlign: 'center',
  },
  subTitle2Container: {
    marginTop: rd1,
  },
  subTitle2Text: {
    ...body4,
    textAlign: 'center',
  },
  subTitlesContainer: {
    marginBottom: rd5,
    alignItems: 'center',
  },
});
