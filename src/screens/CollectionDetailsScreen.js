import React from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, Alert
} from 'react-native';
import { shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  Header, Right, Body, Title, Left, Button
} from 'native-base';
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies


import Colors from '../constants/Colors';

const CollectionsDetailsScreen = ({ route, navigation, collections }) => {
  const { params: { collectionId } } = route;
  const collection = collections[collectionId];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <Header style={styles.header}>
        <Left>
          <TouchableOpacity onPress={() => navigation.navigate('CollectionsIndex')}>
            <Ionicons name="chevron-back" size={30} color={Colors.primary} />
          </TouchableOpacity>
        </Left>
        <Body>
          <Title>{collection.label}</Title>
        </Body>
        <Right>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name="add-box" size={30} color={Colors.primary} />
          </TouchableOpacity>
        </Right>
      </Header>
      <View style={styles.screen}>
        <View style={styles.collectionContainer}>
          <Text>{JSON.stringify(collection, null, 2)}</Text>
        </View>
        <View>
          <Button style={{ paddingHorizontal: 10, marginVertical: 20 }} onPress={() => navigation.navigate('CollectionsIndex')}>
            <Text style={{ color: 'white' }}>
              Back to Collection Index
            </Text>
          </Button>
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
    marginTop: 50
  },
  header: {
    backgroundColor: Colors.screenBackground,
  },
});
