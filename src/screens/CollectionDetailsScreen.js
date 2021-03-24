import React from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity
} from 'react-native';
import { shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  Header, Right, Body, Title, Left
} from 'native-base';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import Colors from '../constants/Colors';
import CollectionDetailActionIcon from '../components/Icons/CollectionDetailActionIcon'

const CollectionsDetailsScreen = ({ route, navigation, collections, selectedCollectionId }) => {
  const { params: { collectionId } } = route;
  const collection = collections[collectionId];
  const selected = collectionId === selectedCollectionId;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <Header style={styles.header}>
        <Left >
          <TouchableOpacity onPress={() => navigation.navigate('CollectionsIndex')}>
            <Ionicons name="chevron-back" size={30} color={Colors.primary} />
          </TouchableOpacity>
        </Left>
        <View style={styles.headerTitle}>
          <Title>{collection.label}</Title>
        </View>
        <Right>
          <CollectionDetailActionIcon selected={selected} collectionId={collectionId} />
        </Right>
      </Header>
      <View style={styles.screen}>
        <View style={styles.collectionContainer}>
          <Text>{JSON.stringify(collection, null, 2)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

CollectionsDetailsScreen.propTypes = {
  navigation: shape({}).isRequired,
  collections: shape({}).isRequired,
  route: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  collections: state.collections,
  selectedCollectionId: state.selectedCollection,
});

export default connect(mapStateToProps, null)(CollectionsDetailsScreen);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  collectionContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 50,
    width: '80%'
  },
  header: {
    backgroundColor: Colors.screenBackground,
    alignItems: 'center'
  },
  headerTitle: {
    width: '70%'
  }
});
