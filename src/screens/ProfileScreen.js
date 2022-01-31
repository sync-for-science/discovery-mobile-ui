import React from 'react';
import {
  StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Text, View,
} from 'react-native';
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
    <View style={styles.scrollContainer}>
      <Demographics />
      <Data />
    </View>
    <View style={styles.logoutContainer}>
      <Logout>
        <TouchableOpacity style={styles.logout}>
          <Text style={styles.logoutText}>
            Logout
          </Text>
        </TouchableOpacity>
      </Logout>
    </View>
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
  logout: {
    backgroundColor: Colors.logoBlue,
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 20,
  },
  logoutContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
});
