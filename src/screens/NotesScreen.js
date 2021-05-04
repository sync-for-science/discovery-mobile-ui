import React from 'react';
import {
  SafeAreaView, StyleSheet, View, TouchableOpacity, ScrollView,
} from 'react-native';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { SimpleLineIcons, Entypo } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { useNavigation, useRoute } from '@react-navigation/native';

import Colors from '../constants/Colors';
import ResourceCard from '../components/ResourceCard/ResourceCard';

const NotesScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const resource = route?.params?.resource;
  return (
    <SafeAreaView style={styles.root}>
      <Header style={styles.header}>
        <Left>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-thin-left" size={20} color={Colors.headerIcon} />
          </TouchableOpacity>
        </Left>
        <View>
          <Title>{resource.subType}</Title>
        </View>
        <Right>
          <TouchableOpacity>
            <SimpleLineIcons name="note" size={20} color={Colors.headerIcon} />
          </TouchableOpacity>
        </Right>
      </Header>
      <ScrollView>
        <ResourceCard index={0} resourceId={resource.id} resource={resource} fromNotesScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotesScreen;

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
});
