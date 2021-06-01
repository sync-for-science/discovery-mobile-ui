import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { number as numberType, string } from 'prop-types';

import Colors from '../../../constants/Colors';
import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

const OBBullet = ({ number, text }) => (
  <View style={styles.bulletContainer}>
    <View style={styles.bulletIconContainer}>
      <View style={styles.bulletIcon}>
        <Text style={styles.bulletText}>{number}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.body}>
        {text}
      </Text>
    </View>
  </View>
);

OBBullet.propTypes = {
  number: numberType.isRequired,
  text: string.isRequired,
};

export default OBBullet;

const { body3 } = TextStyles;
const {
  rd1, rd4, rd5, rd6,
} = ResponsiveDimensions;

const styles = StyleSheet.create({
  bulletIcon: {
    marginTop: rd1,
    height: rd6,
    width: rd6,
    backgroundColor: Colors.logoBlue,
    borderRadius: rd4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bulletText: {
    fontWeight: '700',
    fontSize: rd5,
    color: 'white',
  },
  body: {
    ...body3,
    width: wp('75%'),
    textAlign: 'left',
  },
  bulletContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rd5,
  },
  bulletIconContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
