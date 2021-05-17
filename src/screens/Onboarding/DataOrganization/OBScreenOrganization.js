import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import OBTemplate from '../OBTemplate';
import TextStyles from '../../../constants/TextStyles';

// wireframe page 8
const SCREEN_NUMBER = 6;
const SECTION_TITLE = 'Data Organization';
const NEXT_SCREEN = 'Structure';

const OBScreenOrganization = () => {
  const {
    h5, body1, alignCenter, mb5,
  } = TextStyles;
  return (
    <OBTemplate screenNumber={SCREEN_NUMBER} sectionTitle={SECTION_TITLE} nextScreen={NEXT_SCREEN}>
      <View style={styles.default}>
        <Text style={[h5, mb5]}>Organization of your data</Text>
        <Text style={[body1, alignCenter, mb5]}>
          You will be able to organize your medical Records in the same
          way you organize your photos in albums.
        </Text>
        <Text style={[body1, alignCenter, mb5]}>
          Anything you do in this app will be stored in a Collection (analogous
          to album). What this means is that for any questions or issues you may
          have you will be able to identify relevant Records (analogous to photos)
          and save them under a Collection with a convenient name. You will be
          then able to quickly access any Collection you want, at any time, and
          get to those relevant Records instantaneously.
        </Text>
      </View>
    </OBTemplate>
  );
};

export default OBScreenOrganization;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    alignItems: 'center',
  },
});
