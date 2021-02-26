import React, { useState } from 'react';
import {
  StyleSheet, SafeAreaView, StatusBar, ScrollView,
} from 'react-native';
import { connect } from 'react-redux';

import TimelineWidget from '../components/Timeline/TimelineWidget';
import CategorySelector from '../components/CategorySelector/CategorySelector';
import RecordCardsContainer from '../components/SubTypeAccordion/SubTypeAccordionsContainer';
import Colors from '../constants/Colors';
import FilterDrawer from '../components/FilterDrawer/FilterDrawer';

const CatalogScreen = ({ resourceIdsGroupedByType }) => {
  const categories = Object.keys(resourceIdsGroupedByType);
  const scrubbedCategories = categories.filter((category) => category !== 'Patient' && category !== 'Observation');
  const [selectedCategory, setSelectedCategory] = useState(scrubbedCategories[0]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <FilterDrawer>
        <ScrollView>
          <TimelineWidget />
          <CategorySelector
            categories={scrubbedCategories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          { selectedCategory && (
            <RecordCardsContainer
              selectedCategory={selectedCategory}
            />
          )}
        </ScrollView>
      </FilterDrawer>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  resourceIdsGroupedByType: state.resourceIdsGroupedByType,
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
