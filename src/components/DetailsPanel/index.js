import React from 'react';
import {
  StyleSheet, View, SafeAreaView, TouchableOpacity, ScrollView,
} from 'react-native';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { FontAwesome, Entypo } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { arrayOf, shape } from 'prop-types';
import { connect } from 'react-redux';

import Colors from '../../constants/Colors';
import SortingHeader from './SortingHeader';
import { sortFields } from '../../constants/sorting';
import DateAccordionsContainer from '../DateAccordionContainer/DateAccordionsContainer';
import { activeCollectionSelector, savedRecordsGroupedByTypeSelector, activeCollectionResourceIdsSelector } from '../../redux/selectors';
import SubTypeAccordionsContainer from '../SubTypeAccordionsContainer';
import TimeSavedAccordionsContainer from '../TimeSavedAccordionsContainer';
import BaseText from '../Generic/BaseText';

const DetailsPanel = ({
  navigation, collection, savedRecordsGroupedByType, savedRecords,
}) => {
  const { detailsPanelSortingState: sortingState } = collection;
  const { RECORD_TYPE, RECORD_DATE, TIME_SAVED } = sortFields;
  const hasSavedRecords = Object.entries(savedRecords).length > 0;
  const hasMultipleSavedRecords = Object.entries(savedRecords).length > 1;

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
        <Left>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-thin-left" size={20} color={Colors.headerIcon} />
          </TouchableOpacity>
        </Left>
        <View>
          <Title style={styles.headerText}>{collection?.label}</Title>
        </View>
        <Right>
          <TouchableOpacity onPress={handlePressNoteIcon}>
            <FontAwesome name="sticky-note-o" size={20} color={Colors.headerIcon} />
          </TouchableOpacity>
        </Right>
      </Header>
      {!hasSavedRecords && (
        <View style={styles.zeroStateContainer}>
          <BaseText style={styles.zeroStateText}>No Records In Collection</BaseText>
        </View>
      )}
      {hasSavedRecords && (
        <>
          <SortingHeader
            sortingState={sortingState}
            hasMultipleSavedRecords={hasMultipleSavedRecords}
          />
          <ScrollView>
            {displayAccordion()}
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

DetailsPanel.propTypes = {
  navigation: shape({}).isRequired,
  collection: shape({}).isRequired,
  savedRecordsGroupedByType: arrayOf(shape({}).isRequired).isRequired,
  savedRecords: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  collection: activeCollectionSelector(state),
  savedRecordsGroupedByType: savedRecordsGroupedByTypeSelector(state),
  savedRecords: activeCollectionResourceIdsSelector(state),
});

export default connect(mapStateToProps, null)(DetailsPanel);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.headerBackground,
    alignItems: 'center',
    elevation: 0,
    height: 50,
  },
  headerText: {
    fontSize: 18,
  },
  zeroStateContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zeroStateText: {
    fontStyle: 'italic',
  },
});
