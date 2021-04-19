import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import SubTypeAccordionsContainer from '../SubTypeAccordion/SubTypeAccordionsContainer';

const DetailsPanel = () => (
  <ScrollView>
    <View>
      <Text style={styles.title}>Details Panel</Text>
    </View>
    <SubTypeAccordionsContainer fromDetailsPanel />
  </ScrollView>
);

export default DetailsPanel;

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
});
