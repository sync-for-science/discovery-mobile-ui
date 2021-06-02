import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import OBBullet from '../components/OBBullet';
import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

// wireframe page 10
const OBKeyFeatures1 = () => (
  <OBSectionBodyTemplate title="Key Features" subTitle="Collections">
    <Text style={styles.header}>
      Build a Collection
    </Text>
    <OBBullet number={1} text="Create a new Collection and give it a suitable name." />
    <OBBullet
      number={2}
      text="Define the time window you consider and filter the Record Categories and Providers you want."
    />
    <OBBullet
      number={3}
      text="Build a Collection by adding or removing Records with the help of a Timeline visualization."
    />
  </OBSectionBodyTemplate>
);

export default OBKeyFeatures1;

const { body4 } = TextStyles;
const { rd5 } = ResponsiveDimensions;

const styles = StyleSheet.create({
  header: {
    ...body4,
    textAlign: 'center',
    marginBottom: rd5,
  },
});
