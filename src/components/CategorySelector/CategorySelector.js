import React from 'react';
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';

import { Button } from 'native-base'

import Colors from '../../constants/Colors'
import RESOURCE_TYPES from '../../resources/resourceTypes'

const CatalogScreen = ({categories, selectedCategory, setSelectedCategory}) => {
  const CategoryButton = ({category}) => {
    const categoryDisplay = RESOURCE_TYPES[category]
    const buttonStyle = category === selectedCategory ? styles.buttonSelected : styles.button
    const buttonTextStyle = category === selectedCategory ? styles.buttonSelectedText : null
    return (
      <Button style={buttonStyle} onPress={() => setSelectedCategory(category)}>
        <Text style={buttonTextStyle}>{categoryDisplay}</Text>
      </Button>
    )
  }

  const scrubbedCategories = categories.filter(category => category !== "Patient" && category !== "Observation")

  return(
    <ScrollView style={styles.root} horizontal>
      {scrubbedCategories.map(category => {
        if (category !== "Patient") {
          return <CategoryButton key={category} category={category} />
        }
      })}
    </ScrollView>
  )
}


export default CatalogScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.primaryLight,
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
    borderWidth: 2,
    backgroundColor: Colors.primary,
    borderRadius: 30,
  },
  buttonSelectedText: {
    color: 'white'
  }
});
