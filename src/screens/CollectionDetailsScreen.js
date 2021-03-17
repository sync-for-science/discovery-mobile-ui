import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'

import Colors from '../constants/Colors'

const CollectionsDetailsScreen = () => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <View style={styles.screen}>
      <Text>CollectionsDetails Screen</Text>
    </View>
  </SafeAreaView>
);

export default CollectionsDetailsScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

