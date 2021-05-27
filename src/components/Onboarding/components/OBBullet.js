import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { number as numberType, string } from 'prop-types';

import Colors from '../../../constants/Colors';

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

const styles = StyleSheet.create({
  bulletIcon: {
    marginTop: 4,
    height: 30,
    width: 30,
    backgroundColor: Colors.logoBlue,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bulletText: {
    fontWeight: '700',
    fontSize: 18,
    color: 'white',
  },
  body: {
    width: wp('75%'),
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'left',
  },
  bulletContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  bulletIconContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
