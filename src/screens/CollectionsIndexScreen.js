import React from 'react';
import {
  StyleSheet, View, SafeAreaView, StatusBar, Button, Text
} from 'react-native';
import { connect } from 'react-redux';
import { func, shape, string } from 'prop-types';
import { Header, Right, Button as NBButton, Body, Title, Left } from 'native-base'
import { Ionicons,  } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies


import Colors from '../constants/Colors';
import BaseText from '../components/Generic/BaseText';
import NewCollectionModal from '../components/CollectionModal/NewCollectionModal';

const CollectionRow = ({ label, handlePress }) => (
  <View style={styles.collectionRow}>
    <Button title={label} onPress={handlePress} />
  </View>
);

CollectionRow.propTypes = {
  label: string.isRequired,
  handlePress: func.isRequired,
};

const CollectionsIndexScreen = ({ navigation, collections }) => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <Header style={styles.header}>
      <Left />
      <Body>
        <Title>Collections</Title>
      </Body>
      <Right>
        <NBButton transparent>
          <Ionicons name="md-add-circle" size={30} color={Colors.primary}/>
        </NBButton>
      </Right>
    </Header>
    <View style={styles.screen}>
      {Object.entries(collections).map(([id, { label }]) => (
        <CollectionRow
          key={id}
          label={label}
          handlePress={() => navigation.navigate('CollectionDetails', { collectionId: id })}
        />
      ))}
    </View>
    <NewCollectionModal />
  </SafeAreaView>
);

CollectionsIndexScreen.propTypes = {
  navigation: shape({}).isRequired,
  collections: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  collections: state.collections,
});

export default connect(mapStateToProps, null)(CollectionsIndexScreen);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  screen: {
    alignItems: 'center',
  },
  collectionRow: {
    alignItems: 'flex-start',
    width: '90%',
  },
  header: {
    backgroundColor: Colors.screenBackground
  }
});
