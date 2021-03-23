import React from 'react';
import {
  StyleSheet, View, SafeAreaView, StatusBar, TouchableOpacity, Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { shape, func } from 'prop-types';
import {
  Header, Right, Body, Title, Left,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import Colors from '../constants/Colors';
import { createCollection } from '../redux/action-creators';
import CollectionRow from '../components/CollectionRow/CollectionRow';

const CollectionsIndexScreen = ({ navigation, collections, createCollectionAction }) => {
  const handleNewCollectionPress = () => {
    Alert.prompt('New Collection', 'Enter name for this new collection.', (text) => createCollectionAction(text));
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <Header style={styles.header}>
        <Left />
        <Body>
          <Title>Collections</Title>
        </Body>
        <Right>
          <TouchableOpacity onPress={handleNewCollectionPress}>
            <MaterialIcons name="add-box" size={30} color={Colors.primary} />
          </TouchableOpacity>
        </Right>
      </Header>
      <View style={styles.collectionRowContainer}>
        {Object.entries(collections).map(([id, { label }]) => (
          <CollectionRow
            key={id}
            collectionId={id}
            label={label}
            handlePress={() => navigation.navigate('CollectionDetails', { collectionId: id })}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

CollectionsIndexScreen.propTypes = {
  navigation: shape({}).isRequired,
  collections: shape({}).isRequired,
  createCollectionAction: func.isRequired,
};

const mapStateToProps = (state) => ({
  collections: state.collections,
});

const mapDispatchToProps = {
  createCollectionAction: createCollection,
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsIndexScreen);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  collectionRowContainer: {
    alignItems: 'center',
  },
  header: {
    backgroundColor: Colors.screenBackground,
  },
});
