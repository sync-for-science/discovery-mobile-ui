import React from 'react';
import {
  StyleSheet, View, SafeAreaView, StatusBar, Button
} from 'react-native';
import { connect } from 'react-redux'
import { shape } from 'prop-types';

import Colors from '../constants/Colors';
import BaseText from '../components/Generic/BaseText'

const CollectionRow = ({id, label, navigation}) => (
  <View style={styles.collectionRow} >
    <Button title={label} onPress={() => navigation.navigate('CollectionDetails', {collectionId: id})}/>
  </View>
)


const CollectionsIndexScreen = ({ navigation, collections }) => {
  return (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <View style={styles.screen}>
      <BaseText variant="title">Collections</BaseText>
      {Object.entries(collections).map(([id, {label}]) => (
        <CollectionRow key={id} id={id} label={label} navigation={navigation} />
      ))}
    </View>
  </SafeAreaView>
)};

CollectionsIndexScreen.propTypes = {
  navigation: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  collections: state.collections
})

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
});
