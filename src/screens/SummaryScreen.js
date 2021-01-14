import React from 'react';
import { shape } from 'prop-types';
import {
  StyleSheet, Text, View, Button, SafeAreaView, Platform, StatusBar,
} from 'react-native';

const SummaryScreen = ({ navigation }) => (
  <SafeAreaView style={styles.safeAreaView}>
    <View style={styles.screen}>
      <Text>Summary Screen</Text>
      <Button
        title="Back To Login"
        onPress={() => navigation.navigate('PreAuth')}
      />
    </View>
  </SafeAreaView>
);

SummaryScreen.propTypes = {
  navigation: shape({}).isRequired,
};

export default SummaryScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
