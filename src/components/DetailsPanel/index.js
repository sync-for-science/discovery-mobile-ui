import React from 'react';
import {
  StyleSheet, View, ActionSheetIOS
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { Entypo } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { shape } from 'prop-types';

import Colors from '../../constants/Colors'
import SubTypeAccordionsContainer from '../SubTypeAccordion/SubTypeAccordionsContainer';

const DetailsPanel = ({collection}) => {
  const handleSortingPress = () => {
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
  return (
    <ScrollView>
      <Header style={styles.header}>
        <Left>
        </Left>
        <View>
          <Title>{collection?.label}</Title>
        </View>
        <Right>
          <TouchableOpacity onPress={handleSortingPress}>
            <Entypo name="dots-three-vertical" size={20} color={Colors.headerIcon} />
          </TouchableOpacity>
        </Right>
      </Header>
      <SubTypeAccordionsContainer fromDetailsPanel />
    </ScrollView>
  )
};

DetailsPanel.propTypes = {
  collection: shape({}).isRequired
}

export default DetailsPanel;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 0,
  },
});
