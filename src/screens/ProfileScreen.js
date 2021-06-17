import React from 'react';
import {
  StyleSheet, SafeAreaView, StatusBar, Button,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Header, Body, Title,
} from 'native-base';

import Colors from '../constants/Colors';
import UserInfo from '../components/Profile/UserInfo';
import Demographics from '../components/Profile/Demographics';
import Data from '../components/Profile/Data';
import Logout from '../components/Login/Logout';

const ProfileScreen = () => (
  <SafeAreaView style={styles.root}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <Header style={styles.header}>
      <Body>
        <Title style={styles.headerText}>Profile</Title>
      </Body>
    </Header>
    <UserInfo />
    <ScrollView style={styles.scrollContainer}>
      <Demographics />
      <Data />
    </ScrollView>
    <Logout>
      <Button title="Logout" color={Colors.primary} />
    </Logout>
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
  header: {
    backgroundColor: Colors.logoBlue,
    height: 50,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
});
