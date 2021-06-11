import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { shape } from 'prop-types';

import CollectionsIndex from '../components/Collections/index';

const CollectionsListScreen = ({
  navigation,
  collections,
}) => {
  console.info('navigation: ', navigation);
  return (
    <CollectionsIndex
      navigation={navigation}
      collections={collections}
    />
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

});
