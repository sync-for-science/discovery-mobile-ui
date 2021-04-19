import React from 'react';
import {
  StyleSheet, View, SafeAreaView, StatusBar, TouchableOpacity, Alert, BackHandler,
} from 'react-native';
import { connect } from 'react-redux';
import { shape, func } from 'prop-types';
import {
  Header, Right, Body, Title, Left,
} from 'native-base';
import { FontAwesome, Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import { useFocusEffect } from '@react-navigation/native';

import { clearAuth } from '../features/auth/authSlice';
import Colors from '../constants/Colors';
import { createCollection } from '../redux/action-creators';
import CollectionRow from '../components/CollectionRow/CollectionRow';
import { actionTypes } from '../redux/action-types';

const CollectionsListScreen = ({
  navigation,
  collections,
  createCollectionAction,
  clearAuthAction,
  clearPatientDataAction,
}) => {
  const handleNewCollectionPress = () => {
    Alert.prompt('New Collection', 'Enter name for this new collection.', (text) => createCollectionAction(text));
  };

  const clearData = () => {
    clearAuthAction();
    clearPatientDataAction();
  };

  const handleLogout = () => {
    clearData();
  };

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', clearData);

      return () => BackHandler.removeEventListener('hardwareBackPress', clearData);
    }, []),
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <Header style={styles.header}>
        <Left style={styles.logoutContainer}>
          <TouchableOpacity onPress={handleLogout}>
            <FontAwesome name="sign-out" size={24} color={Colors.darkgrey} style={styles.logoutIcon} />
          </TouchableOpacity>
        </Left>
        <Body>
          <Title style={styles.headerText}>Collections</Title>
        </Body>
        <Right>
          <TouchableOpacity onPress={handleNewCollectionPress}>
            <Ionicons name="add" size={24} color={Colors.darkgrey} />
          </TouchableOpacity>
        </Right>
      </Header>
      <View style={styles.collectionRowContainer}>
        {Object.entries(collections).map(([id, { label }]) => (
          <CollectionRow
            key={id}
            collectionId={id}
            label={label}
            navigation={navigation}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

CollectionsListScreen.propTypes = {
  navigation: shape({}).isRequired,
  collections: shape({}).isRequired,
  createCollectionAction: func.isRequired,
  clearAuthAction: func.isRequired,
  clearPatientDataAction: func.isRequired,
};

const mapStateToProps = (state) => ({
  collections: state.collections,
});

const mapDispatchToProps = {
  createCollectionAction: createCollection,
  clearAuthAction: clearAuth,
  clearPatientDataAction: () => ({
    type: actionTypes.CLEAR_PATIENT_DATA,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsListScreen);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  collectionRowContainer: {
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'white',
  },
  headerText: {
    color: 'black',
  },
  logoutContainer: {
    marginLeft: 5,
  },
  logoutIcon: {
    transform: [{ scaleX: -1 }],
  },
});
