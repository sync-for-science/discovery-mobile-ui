import React from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, StatusBar,
} from 'react-native';
import { Button } from 'native-base'

import Colors from '../constants/Colors';

const CollectionsIndexScreen = ({navigation}) => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <View style={styles.screen}>
      <Text>Collections Index Screen</Text>
      
      <View>
        <Button style={{paddingHorizontal: 10, marginVertical: 20}} onPress={() => navigation.navigate('CollectionDetails')}>
          <Text style={{color: 'white'}}>
            Navigate to Collection Details
          </Text>
        </Button>
      </View>
    </View>
  </SafeAreaView>
);

export default CollectionsIndexScreen;

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
