import React from 'react';
import {
  StyleSheet, View, Text, SafeAreaView,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { SimpleLineIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { shape } from 'prop-types';
import {connect} from 'react-redux'

import Colors from '../../constants/Colors';
import SortingHeader from './SortingHeader';
import { SORT_DESC, sortFields } from '../../constants/sorting';
import DateAccordionsContainer from '../DateAccordion/DateAccordionsContainer';
import SubTypeAccordionsContainer from '../SubTypeAccordion/SubTypeAccordionsContainer';
import {collectionRecordsGroupedByTypeSelector} from '../../redux/selectors'


const DetailsPanel = ({ navigation, collection, collectionRecords }) => {
  const { savedRecordsSortingState: sortingState } = collection
  const { RECORD_TYPE, RECORD_DATE, TIME_SAVED } = sortFields;

  const handlePressNoteIcon = () => {
    navigation.navigate('CollectionNotes');
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
