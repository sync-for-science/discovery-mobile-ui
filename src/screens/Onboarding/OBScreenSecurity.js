import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

import OBHeader from './OBHeader';
import OBNavigation from './OBNavigation';

// wireframe page 4
const OBScreenSecurity = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.root}>
        <OBHeader screenNumber={2}/>
        <OBNavigation />
      </View>
    </SafeAreaView>
  );
};

export default OBScreenSecurity;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white'
  },
  root: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
});
