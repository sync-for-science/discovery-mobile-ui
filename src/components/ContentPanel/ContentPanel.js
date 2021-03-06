import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {connect} from 'react-redux'

import { collectionFlattenedSubTypesSelector } from '../../redux/selectors';
import SubTypeAccordionsContainer from '../SubTypeAccordion/SubTypeAccordionsContainer';

const ContentPanel = ({collectionFlattenedSubTypes}) => (
  <ScrollView>
    <View>
      <Text style={styles.title}>Content Panel</Text>
    </View>
    <SubTypeAccordionsContainer fromContentPanel subTypeData={collectionFlattenedSubTypes}/>
  </ScrollView>
)

const mapStateToProps = (state) => ({
  collectionFlattenedSubTypes: collectionFlattenedSubTypesSelector(state),
})

export default connect(mapStateToProps, null)(ContentPanel);

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
});
