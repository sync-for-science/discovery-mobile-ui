import React from 'react';
import {
  StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';

import Timeline from '../components/Timeline';
import { shape, string } from 'prop-types';
import ResourceTypeSelector from '../components/ResourceTypeSelector/ResourceTypeSelector';
import SubTypeAccordionsContainer from '../components/SubTypeAccordion/SubTypeAccordionsContainer';
import Colors from '../constants/Colors';
import FilterDrawer from '../components/FilterDrawer/FilterDrawer';
import ContentPanel from '../components/ContentPanel/ContentPanel';
import { selectedFlattenedSubTypesSelector } from '../redux/selectors';

const CatalogScreen = ({ selectedResourceType, selectedFlattenedSubTypes }) => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <Swiper
      loop={false}
      showsPagination={false}
      index={0}
    >
      <FilterDrawer>
        <ScrollView>
          <Timeline />
          <ResourceTypeSelector />
          { selectedResourceType && (
            <SubTypeAccordionsContainer subTypeData={selectedFlattenedSubTypes} />
          )}
        </ScrollView>
      </FilterDrawer>
      <ContentPanel />
    </Swiper>
  </SafeAreaView>
);

CatalogScreen.propTypes = {
  selectedResourceType: string,
  selectedFlattenedSubTypes: shape({}).isRequired,
};

CatalogScreen.defaultProps = {
  selectedResourceType: null,
};

const mapStateToProps = (state) => ({
  selectedResourceType: state.selectedResourceType,
  selectedFlattenedSubTypes: selectedFlattenedSubTypesSelector(state),
});

export default connect(mapStateToProps, null)(CatalogScreen);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
