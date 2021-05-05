import React from 'react';
import {
  SafeAreaView, StyleSheet, View, TouchableOpacity, ScrollView,
} from 'react-native';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { connect } from 'react-redux';
import { SimpleLineIcons, Entypo } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { useNavigation } from '@react-navigation/native';
import { shape } from 'prop-types';
import { resourceByRoutePropsSelector } from '../redux/selectors';

import Colors from '../constants/Colors';
import ResourceCard from '../components/ResourceCard/ResourceCard';

const NotesScreen = ({ resource }) => {
  const navigation = useNavigation();
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
        <ResourceCard resourceId={resource.id} resource={resource} fromNotesScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

NotesScreen.propTypes = {
  resource: shape({}).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  resource: resourceByRoutePropsSelector(state, ownProps),
});

export default connect(mapStateToProps, null)(NotesScreen);

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
