import React, { useState } from 'react';
import {
  StyleSheet, View, SafeAreaView, StatusBar, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { shape } from 'prop-types';
import {
  Header, Right, Body, Title, Left,
} from 'native-base';
import { FontAwesome, Entypo } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import Colors from '../constants/Colors';
import CollectionRow from '../components/CollectionRow/CollectionRow';
import CollectionsDialog, { COLLECTIONS_DIALOG_ACTIONS, CollectionsDialogText } from '../components/Dialog/CollectionsDialog';
import Logout from '../components/Login/Logout';

const CollectionsListScreen = ({
  navigation,
  collections,
}) => {
  const [collectionsDialogText, setCollectionsDialogText] = useState(null);

  const handleNewCollectionPress = () => {
    setCollectionsDialogText(CollectionsDialogText[COLLECTIONS_DIALOG_ACTIONS.CREATE]);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <Header style={styles.header}>
        <Left style={styles.logoutContainer}>
          {__DEV__ && (
            <Logout>
              <TouchableOpacity>
                <FontAwesome name="sign-out" size={24} color={Colors.headerIcon} style={styles.logoutIcon} />
              </TouchableOpacity>
            </Logout>
          )}
        </Left>
        <Body>
          <Title style={styles.headerText}>Collections</Title>
        </Body>
        <Right>
          <TouchableOpacity onPress={handleNewCollectionPress}>
            <Entypo name="squared-plus" size={24} color={Colors.headerIcon} />
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
      {collectionsDialogText && (
        <CollectionsDialog
          collectionsDialogText={collectionsDialogText}
          setCollectionsDialogText={setCollectionsDialogText}
        />
      )}
    </SafeAreaView>
  );
};

CollectionsListScreen.propTypes = {
  navigation: shape({}).isRequired,
  collections: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  collections: state.collections,
});

export default connect(mapStateToProps, null)(CollectionsListScreen);

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
    fontSize: 18,
  },
  logoutContainer: {
    marginLeft: 5,
  },
  logoutIcon: {
    transform: [{ scaleX: -1 }],
  },
});
