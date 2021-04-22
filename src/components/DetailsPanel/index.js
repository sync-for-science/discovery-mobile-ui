import React, { useState } from 'react';
import {
  StyleSheet, View, SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { SimpleLineIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { shape } from 'prop-types';

import { timeSavedSortedCollectionResourceIdsSelector, recordDateSortedCollectionResourceIdsSelector } from '../../redux/selectors';
import Colors from '../../constants/Colors';
import DateAccordionContainer from '../DateAccordion/DateAccordionContainer';
import SortingHeader from './SortingHeader';
import TypeGroupContainer from '../TypeGroupContainer';

const DetailsPanel = ({
  navigation, collection, recordDateResourceIds, timeSavedResourceIds,
}) => {
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

  let displayAccordions;

  if (sortingState['record-type'].isPicked) {
    displayAccordions = (
      <TypeGroupContainer
        isDescending={sortingState['record-type'].isDescending}
        fromDetailsPanel
      />
    );
  } else if (sortingState['record-date'].isPicked) {
    displayAccordions = (
      <DateAccordionContainer
        isDescending={sortingState['record-date'].isDescending}
        data={recordDateResourceIds}
        fromDetailsPanel
      />
    );
  } else {
    displayAccordions = (
      <DateAccordionContainer
        isDescending={sortingState['time-saved'].isDescending}
        data={timeSavedResourceIds}
        fromDetailsPanel
      />
    );
  }

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
      <SortingHeader sortingState={sortingState} setSortingState={setSortingState} />
      <ScrollView>
        {displayAccordions}
      </ScrollView>
    </SafeAreaView>
  );
};

DetailsPanel.propTypes = {
  navigation: shape({}).isRequired,
  collection: shape({}).isRequired,
  timeSavedResourceIds: shape({}).isRequired,
  recordDateResourceIds: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  timeSavedResourceIds: timeSavedSortedCollectionResourceIdsSelector(state),
  recordDateResourceIds: recordDateSortedCollectionResourceIdsSelector(state),
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
