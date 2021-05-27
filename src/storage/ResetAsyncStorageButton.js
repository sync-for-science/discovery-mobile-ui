import React from 'react';
import {
  StyleSheet, View, Button,
} from 'react-native';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResetAsyncStorage = () => {
  const handleClearAsyncStorage = async () => {
    await AsyncStorage.clear();
    Updates.reloadAsync();
  };

  return (
    <View style={styles.root}>
      <Button title="Reset Async Storage" onPress={handleClearAsyncStorage} />
    </View>
  );
};

export default ResetAsyncStorage;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    alignItems: 'center',
  },
});
