import React, { useState } from 'react';
import {
  StyleSheet, View, SafeAreaView, StatusBar, Button,
} from 'react-native';
import { connect } from 'react-redux';
import { func, shape, string } from 'prop-types';
import {
  Header, Right, Button as NBButton, Body, Title, Left,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import Colors from '../constants/Colors';
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

const CollectionsIndexScreen = ({ navigation, collections }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <Header style={styles.header}>
        <Left />
        <Body>
          <Title>Collections</Title>
        </Body>
        <Right>
          <NBButton transparent onPress={() => setModalVisible(true)}>
            <MaterialIcons name="add-box" size={30} color={Colors.primary} />
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
      <NewCollectionModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </SafeAreaView>
  );
};

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
    backgroundColor: Colors.screenBackground,
  },
});
