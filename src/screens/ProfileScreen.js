import React from 'react';
import {
  StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Colors from '../constants/Colors';
import UserInfo from '../components/Profile/UserInfo';
import Demographics from '../components/Profile/Demographics';
import Data from '../components/Profile/Data';
import Logout from '../components/Login/Logout';

const ProfileScreen = () => (
  <SafeAreaView style={styles.root}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <UserInfo />
    <ScrollView style={styles.scrollContainer}>
      <Demographics />
      <Data />
    </ScrollView>
    <Logout />
  </SafeAreaView>
);

export default ProfileScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
  },
});
