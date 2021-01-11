import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';

const SummaryScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text>Summary Screen</Text>
    <Button
      title="Back To Login"
      onPress={() => navigation.navigate('PreAuth')}
    />
  </View>
);

export default SummaryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
