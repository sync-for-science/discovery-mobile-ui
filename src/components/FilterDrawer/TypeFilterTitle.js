import React from 'react';
import { shape } from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import Colors from '../../constants/Colors';
import { activeCollectionSelector } from '../../redux/selectors';

const getTitle = (activeCollection) => {
  if (activeCollection.showCollectionOnly && activeCollection.showMarkedOnly) {
    return 'Highlighted Record Types in Collection';
  }
  if (activeCollection.showCollectionOnly) {
    return 'Record Types in Collection';
  }
  if (activeCollection.showMarkedOnly) {
    return 'Highlighted Record Types';
  }
  return 'Record Types';
};

const TypeFilterTitle = ({ activeCollection }) => (
  <Text style={styles.title}>{getTitle(activeCollection)}</Text>
);

TypeFilterTitle.propTypes = {
  activeCollection: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  activeCollection: activeCollectionSelector(state),
});

export default connect(mapStateToProps, null)(TypeFilterTitle);

const styles = StyleSheet.create({
  title: {
    backgroundColor: Colors.primary,
    color: 'white',
    marginBottom: 8,
    padding: 8,
    fontSize: 20,
    textAlign: 'center',
  },
});
