import React from 'react';
import { shape } from 'prop-types';
import {
  StyleSheet, Text, View, Button, SafeAreaView, Platform, StatusBar,
} from 'react-native';

const CatalogScreen = ({ navigation }) => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.screen}>
      <Text>Catalog Screen</Text>
      <Button
        title="Back To Login"
        onPress={() => navigation.navigate('PreAuth')}
      />
    </View>
  </SafeAreaView>
);

CatalogScreen.propTypes = {
  navigation: shape({}).isRequired,
};

export default CatalogScreen;

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
