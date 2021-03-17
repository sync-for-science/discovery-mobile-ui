import React from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, StatusBar,
} from 'react-native';
import { Button } from 'native-base';
import { shape } from 'prop-types';

import Colors from '../constants/Colors';

const CollectionsDetailsScreen = ({ navigation }) => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <View style={styles.screen}>
      <Text>CollectionsDetails Screen</Text>
      <View>
        <Button style={{ paddingHorizontal: 10, marginVertical: 20 }} onPress={() => navigation.navigate('CollectionsIndex')}>
          <Text style={{ color: 'white' }}>
            Back to Collection Index
          </Text>
        </Button>
      </View>
    </View>
  </SafeAreaView>
);

CollectionsDetailsScreen.propTypes = {
  navigation: shape({}).isRequired,
};

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
