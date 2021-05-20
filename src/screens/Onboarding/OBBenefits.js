import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

import TextStyles from '../../constants/TextStyles';
import discoveryBasic from '../../../assets/images/discovery-basic-logo.png';

// wireframe page 3
const OBBenefits = () => {
  const {
    h2, alignCenter, mb5,
  } = TextStyles;
  return (
    <View style={styles.root}>
      <Text style={[h2, alignCenter, mb5]}>Benefits of using Discovery</Text>
      <Image
        style={[styles.logo, mb5]}
        source={discoveryBasic}
        resizeMode="contain"
      />
      <Text style={[styles.body, alignCenter, mb5]}>
        Discovery enables you to organize your digital medical records in 
        collections - just like you organize digital photos in albums.
      </Text>
      <Text style={[styles.body, alignCenter, mb5]}>
        You create collections by adding or removing medical records 
        and you can later add or remove records, too.
      </Text>
      <Text style={[styles.body, alignCenter, mb5]}>
        You can add any number of notes to a collection to journal 
        your health concerns or for doctor visits.
      </Text>
    </View>
  );
};

export default OBBenefits;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    height: 60,
  },
  body: {
    fontSize: 18
  }
});
