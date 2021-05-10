import React from 'react';
import {
  StyleSheet, View, SafeAreaView,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { FontAwesome } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { arrayOf, shape } from 'prop-types';
import { connect } from 'react-redux';

import Colors from '../../constants/Colors';
import SortingHeader from './SortingHeader';
import { sortFields } from '../../constants/sorting';
import DateAccordionsContainer from '../DateAccordionContainer/DateAccordionsContainer';
import { activeCollectionSelector, savedRecordsGroupedByTypeSelector } from '../../redux/selectors';
import SubTypeAccordionsContainer from '../SubTypeAccordionsContainer';
import TimeSavedAccordionsContainer from '../TimeSavedAccordionsContainer';

const DetailsPanel = ({ navigation, collection, savedRecordsGroupedByType }) => {
  const { detailsPanelSortingState: sortingState } = collection;
  const { RECORD_TYPE, RECORD_DATE, TIME_SAVED } = sortFields;

  const handlePressNoteIcon = () => {
    navigation.navigate('Notes');
  };

  const displayAccordion = () => {
    switch (sortingState.activeSortField) {
      case RECORD_TYPE:
        return (
          <SubTypeAccordionsContainer
            data={savedRecordsGroupedByType}
            fromDetailsPanel
          />
        );
      case RECORD_DATE:
        return (
          <DateAccordionsContainer
            fromDetailsPanel
          />
        );
      case TIME_SAVED:
        return (
          <TimeSavedAccordionsContainer
            fromDetailsPanel
          />
        );
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
          <Title style={styles.headerText}>{collection?.label}</Title>
        </View>
        <Right>
          <TouchableOpacity onPress={handlePressNoteIcon}>
            <FontAwesome name="sticky-note-o" size={20} color={Colors.headerIcon} />
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
  savedRecordsGroupedByType: arrayOf(shape({}).isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  collection: activeCollectionSelector(state),
  savedRecordsGroupedByType: savedRecordsGroupedByTypeSelector(state),
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
  headerText: {
    fontSize: 18,
  },
});
