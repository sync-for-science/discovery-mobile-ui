import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { number, string } from 'prop-types';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import Colors from '../../../constants/Colors';

const Bullet = ({ number, text }) => (
  <View style={styles.pointContainer}>
    <View style={styles.bulletContainer}>
      <View style={styles.bullet}>
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

Bullet.propTypes = {
  number: number.isRequired,
  text: string.isRequired,
};

// wireframe page 10
const OBKeyFeatures1 = () => (
  <OBSectionBodyTemplate title="Key Features" subTitle="Collections">
    <Text style={styles.header}>
      Build a Collection
    </Text>
    <Bullet number={1} text="Create a new Collection and give it a suitable name." />
    <Bullet
      number={2}
      text="Define the time window you consider and filter the Record Categories and Providers you want."
    />
    <Bullet
      number={3}
      text="Build a Collection by adding or removing Records with the help of a Timeline visualization."
    />
  </OBSectionBodyTemplate>
);

export default OBKeyFeatures1;

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  bullet: {
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
  pointContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  bulletContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
