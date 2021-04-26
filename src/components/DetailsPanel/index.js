import React, { useState } from 'react';
import {
  StyleSheet, View, Text, SafeAreaView,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { SimpleLineIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { shape } from 'prop-types';
import produce from 'immer';
import {connect} from 'react-redux'

import Colors from '../../constants/Colors';
import SortingHeader from './SortingHeader';
import { SORT_ASC, SORT_DESC, sortFields } from '../../constants/sorting';
import DateAccordionsContainer from '../DateAccordion/DateAccordionsContainer';
import SubTypeAccordionsContainer from '../SubTypeAccordion/SubTypeAccordionsContainer';
import {collectionRecordsGroupedByTypeSelector} from '../../redux/selectors'


const { RECORD_TYPE, RECORD_DATE, TIME_SAVED } = sortFields;

const defaultSortingState = {
  activeSortField: 'record-type',
  sortDirections: {
    [RECORD_TYPE]: SORT_DESC,
    [RECORD_DATE]: SORT_DESC,
    [TIME_SAVED]: SORT_DESC,
  },
};

const DetailsPanel = ({ navigation, collection, collectionRecords }) => {
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

  const displayAccordion = () => {
    switch (sortingState.activeSortField) {
      case RECORD_TYPE:
        return (
          <SubTypeAccordionsContainer
            data={collectionRecords}
            isDescending={sortingState.sortDirections[RECORD_TYPE] === SORT_DESC}
            fromDetailsPanel
          />
        );
      case RECORD_DATE:
        return (
            <DateAccordionsContainer 
              isDescending={sortingState.sortDirections[RECORD_DATE] === SORT_DESC}
            />
          )
      case TIME_SAVED:
        return <Text>TimeSaved</Text>;
      default:
        console.warn('No activeSortField in DetailsPanel'); // eslint-disable-line no-console
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.root}>
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
      <ScrollView>
        {displayAccordion()}
      </ScrollView>
    </SafeAreaView>
  );
};

DetailsPanel.propTypes = {
  navigation: shape({}).isRequired,
  collection: shape({}).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  collectionRecords: collectionRecordsGroupedByTypeSelector(state, ownProps),
});

export default connect(mapStateToProps, null)(DetailsPanel);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 0,
  },
});
