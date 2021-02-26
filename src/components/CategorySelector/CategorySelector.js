import React from 'react';
import {
  StyleSheet, Text, ScrollView,
} from 'react-native';
import { Button } from 'native-base';
import { arrayOf, func, string } from 'prop-types';

import Colors from '../../constants/Colors';
import RESOURCE_TYPES from '../../resources/resourceTypes';

const CatalogScreen = ({ categories, selectedCategory, setSelectedCategory }) => {
  const CategoryButton = ({ category }) => {
    const categoryDisplay = RESOURCE_TYPES[category];
    const buttonStyle = category === selectedCategory ? styles.buttonSelected : styles.button;
    const buttonTextStyle = category === selectedCategory ? styles.buttonSelectedText : null;
    return (
      <Button style={buttonStyle} onPress={() => setSelectedCategory(category)}>
        <Text style={buttonTextStyle}>{categoryDisplay}</Text>
      </Button>
    );
  };

  CategoryButton.propTypes = {
    category: string.isRequired,
  };

  return (
    <ScrollView style={styles.root} horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category) => {
        if (category !== 'Patient') {
          return <CategoryButton key={category} category={category} />;
        }
        return null;
      })}
    </ScrollView>
  );
};

CatalogScreen.propTypes = {
  categories: arrayOf(string.isRequired).isRequired,
  selectedCategory: string,
  setSelectedCategory: func.isRequired,
};

CatalogScreen.defaultProps = {
  selectedCategory: null,
};

export default CatalogScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.mediumgrey,
    borderColor: 'gray',
    marginTop: 20,
    flexDirection: 'row',
    padding: 10,
  },
  button: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  buttonSelected: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    backgroundColor: Colors.primary,
    borderRadius: 30,
  },
  buttonSelectedText: {
    color: 'white',
  },
});
