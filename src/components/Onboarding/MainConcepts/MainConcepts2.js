import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';
import CollectionExample from '../../../../assets/images/screenshots/screenshot-collection.svg';

// wireframe page 7
const OBMainConcepts2 = () => (
  <OBSectionBodyTemplate title="Main Concepts" subTitle="Collections">
    <Text style={styles.body}>
      Organize your medical Records as you organize photos in albums.
    </Text>
    <Text style={styles.body}>
      For any health concern identify and save relevant Records in a
      Collection with a suitable name.
    </Text>
    <Text style={styles.body}>
      Access any Collection you want, at any time.
    </Text>
    <CollectionExample height={hp('25%')} width={hp('100%')} />
  </OBSectionBodyTemplate>
);

export default OBMainConcepts2;

const { body3 } = TextStyles;
const { rd5 } = ResponsiveDimensions;

const styles = StyleSheet.create({
  body: {
    ...body3,
    textAlign: 'center',
    marginBottom: rd5,
  },
});
