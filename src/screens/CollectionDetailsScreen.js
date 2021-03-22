import React from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, StatusBar,
} from 'react-native';
import { Button } from 'native-base';
import { shape } from 'prop-types';
import { connect } from 'react-redux';

import Colors from '../constants/Colors';
import BaseText from '../components/Generic/BaseText';

const CollectionsDetailsScreen = ({ route, navigation, collections }) => {
  const { params: { collectionId } } = route;
  const collection = collections[collectionId];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <View style={styles.screen}>
        <BaseText variant="screenTitle">Collection Details</BaseText>
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
  },
});
