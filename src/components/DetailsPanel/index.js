import React from 'react';
import {
  StyleSheet, View, ActionSheetIOS,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { Entypo, SimpleLineIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { arrayOf, shape, string } from 'prop-types';

import Colors from '../../constants/Colors';
import SubTypeAccordionsContainer from '../SubTypeAccordion/SubTypeAccordionsContainer';
import DateAccordionContainer from '../DateAccordion/DateAccordionContainer'

const DetailsPanel = ({ navigation, collection }) => {
  const [showByDate, setShowByDate] = useState(true);

const DetailsPanel = ({ navigation, collection }) => {
  const handlePressSortIcon = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Sort Records By Category', 'Sort Records By Date Saved'],
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          // Sort Records By Category;
        } else if (buttonIndex === 2) {
          // Sort Records By Date Saved;
        }
      },
    );
  };

  const handlePressNoteIcon = () => {
    navigation.navigate('CollectionNotes');
  };

  const formattedResources = showByDate
    ? (
      <DateAccordionContainer />
    ) : (
      <SubTypeAccordionsContainer fromDetailsPanel />
    );
  return (
    <ScrollView>
      <Header style={styles.header}>
        <Left />
        <View>
          <Title>{collection?.label}</Title>
        </View>
        <Right>
          <TouchableOpacity style={styles.noteIcon} onPress={handlePressNoteIcon}>
            <SimpleLineIcons name="note" size={20} color={Colors.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressSortIcon}>
            <Entypo name="dots-three-vertical" size={20} color={Colors.headerIcon} />
          </TouchableOpacity>
        </Right>
      </Header>
      <SubTypeAccordionsContainer fromDetailsPanel />
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
  noteIcon: {
    marginRight: 15,
  },
});
