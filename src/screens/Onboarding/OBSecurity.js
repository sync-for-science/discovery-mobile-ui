import React from 'react';
import {
  StyleSheet, Text, View, Image, Button,
} from 'react-native';

import TextStyles from '../../constants/TextStyles';
import discoveryBasic from '../../../assets/images/discovery-basic-logo.png';

// wireframe page 5
const OBSecurity = () => {
  const {
    h2, alignCenter, mb5,
  } = TextStyles;
  return (
    <View style={styles.root}>
      <Text style={[h2, alignCenter, mb5]}>Security</Text>
      <Image
        style={[styles.logo, mb5]}
        source={discoveryBasic}
        resizeMode="contain"
      />
      <Text style={[styles.body, alignCenter, mb5]}>
        Discovery pulls your medical records from your
        providers in a secure encrypted  manner.
      </Text>
      <Text style={[styles.body, alignCenter, mb5]}>
        Your records are kept encrypted on the phone and
        are only visible while using the Discovery App.
      </Text>
      <Text style={[styles.body, alignCenter, mb5]}>
        They are never copied or shared with any other
        application or service.
      </Text>
      <Button title="Read more about safety" />
    </View>
  );
};

export default OBSecurity;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    height: 60,
  },
  body: {
    fontSize: 18,
  },
});
