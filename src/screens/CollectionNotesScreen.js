import React from 'react';
import { connect } from 'react-redux';
import {
  SafeAreaView, StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { SimpleLineIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { shape } from 'prop-types';

import { activeCollectionSelector } from '../redux/selectors';
import Colors from '../constants/Colors';

const CollectionNotesScreen = ({ collection }) => (
  <SafeAreaView style={styles.root}>
    <Header style={styles.header}>
      <Left />
      <View>
        <Title>{collection?.label}</Title>
      </View>
      <Right>
        <TouchableOpacity>
          <SimpleLineIcons name="note" size={20} color={Colors.headerIcon} />
        </TouchableOpacity>
      </Right>
    </Header>
    <View style={styles.content}>
      <Text>CollectionNotesScreen</Text>
    </View>
  </SafeAreaView>
);

CollectionNotesScreen.propTypes = {
  collection: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  collection: activeCollectionSelector(state),
});

export default connect(mapStateToProps, null)(CollectionNotesScreen);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
