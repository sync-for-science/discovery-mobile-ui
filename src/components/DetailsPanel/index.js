import React, { useState } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { SimpleLineIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { shape } from 'prop-types';

import Colors from '../../constants/Colors';
import SortingHeader from './SortingHeader';
import { SORT_ASC, SORT_DESC } from '../../constants/sorting';

const DetailsPanel = ({ navigation, collection }) => {
  const defaultSortingState = {
    'record-type': {
      isPicked: true,
      isDescending: true,
    },
    'record-date': {
      isPicked: false,
      isDescending: true,
    },
    'time-saved': {
      isPicked: false,
      isDescending: true,
    },
  };
  const [sortingState, setSortingState] = useState(defaultSortingState);
  const handlePressNoteIcon = () => {
    navigation.navigate('CollectionNotes');
  };
  return (
    <ScrollView>
      <Header style={styles.header}>
        <Left />
        <View>
          <Title>{collection?.label}</Title>
        </View>
        <Right>
          <TouchableOpacity onPress={handlePressNoteIcon}>
            <SimpleLineIcons name="note" size={20} color={Colors.headerIcon} />
          </TouchableOpacity>
        </Right>
      </Header>
      <SortingHeader
        sortingState={sortingState}
        setSortingState={setSortingState}
      />
      <Text>SubTypeAccordion Coming</Text>
    </ScrollView>
  );
};

DetailsPanel.propTypes = {
  navigation: shape({}).isRequired,
  collection: shape({}).isRequired,
};

export default DetailsPanel;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 0,
  },
});
