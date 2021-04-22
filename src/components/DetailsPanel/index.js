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
import produce from 'immer';

import Colors from '../../constants/Colors';
import SortingHeader from './SortingHeader';
import { SORT_ASC, SORT_DESC, sortFields } from '../../constants/sorting';
import TypeGroupContainer from '../TypeGroupContainer'

const { RECORD_TYPE, RECORD_DATE, TIME_SAVED } = sortFields;

const defaultSortingState = {
  activeSortField: 'record-type',
  sortDirections: {
    [RECORD_TYPE]: SORT_DESC,
    [RECORD_DATE]: SORT_DESC,
    [TIME_SAVED]: SORT_DESC,
  },
};


const DetailsPanel = ({ navigation, collection }) => {
  const [sortingState, setSortingState] = useState(defaultSortingState);
  const handlePressNoteIcon = () => {
    navigation.navigate('CollectionNotes');
  };
  const handleSortChange = (sortField) => {
    setSortingState((state) => produce(state, (draft) => {
      if (state.activeSortField === sortField) {
        const prevDir = state.sortDirections[sortField];
        // eslint-disable-next-line no-param-reassign
        draft.sortDirections[sortField] = (prevDir === SORT_ASC) ? SORT_DESC : SORT_ASC;
      }
      draft.activeSortField = sortField; // eslint-disable-line no-param-reassign
    }));
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
        onChange={handleSortChange}
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
