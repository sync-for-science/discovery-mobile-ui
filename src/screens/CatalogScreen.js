import React from 'react';
import { shape } from 'prop-types';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';

const CatalogScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text>Catalog Screen</Text>
    <Button
      title="Back To Login"
      onPress={() => navigation.navigate('PreAuth')}
    />
  </View>
);

CatalogScreen.propTypes = {
  navigation: shape({}).isRequired,
};

export default CatalogScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
