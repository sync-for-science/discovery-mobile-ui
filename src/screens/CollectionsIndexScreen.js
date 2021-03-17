import React from 'react';
import {
  StyleSheet, View, SafeAreaView, StatusBar, Button,
} from 'react-native';
import { connect } from 'react-redux';
import { func, shape, string } from 'prop-types';

import Colors from '../constants/Colors';
import BaseText from '../components/Generic/BaseText';

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
    <View style={styles.screen}>
      <BaseText variant="title">Collections</BaseText>
      {Object.entries(collections).map(([id, { label }]) => (
        <CollectionRow
          key={id}
          label={label}
          handlePress={() => navigation.navigate('CollectionDetails', { collectionId: id })}
        />
      ))}
    </View>
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
});
