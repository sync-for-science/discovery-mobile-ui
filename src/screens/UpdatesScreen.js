import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { shape } from 'prop-types';
import {
  Header, Title,
} from 'native-base';

import CollectionRow from '../components/CollectionRow/CollectionRow';
import { prebuiltCollectionsSelector, collectionsCounterSelector } from '../redux/selectors';
import HeaderCountIcon from '../components/Icons/HeaderCountIcon';
import Colors from '../constants/Colors';

const UpdatesScreen = ({ navigation, collections, collectionsCounter }) => (
  <SafeAreaView style={styles.safeAreaView}>
    <Header style={styles.header}>
      <View style={styles.headerTitleContainer}>
        {collectionsCounter.preBuilt > 0 && <HeaderCountIcon count={collectionsCounter.preBuilt} />}
        <Title style={styles.headerText}>Updates</Title>
      </View>
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

UpdatesScreen.propTypes = {
  navigation: shape({}).isRequired,
  collections: shape({}).isRequired,
  collectionsCounter: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  collections: prebuiltCollectionsSelector(state),
  collectionsCounter: collectionsCounterSelector(state),
});

export default connect(mapStateToProps, null)(UpdatesScreen);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  collectionRowContainer: {
    alignItems: 'center',
  },
  header: {
    backgroundColor: Colors.headerBackground,
    height: 50,
  },
  headerText: {
    color: 'black',
    fontSize: 18,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
