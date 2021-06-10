import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { func, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import Colors from '../../constants/Colors';
import BaseText from '../Generic/BaseText';
import CollectionRowActionIcon from '../Icons/CollectionRowActionIcon';
import { selectCollection } from '../../redux/action-creators';

const CollectionRow = ({
  collectionId,
  label,
  navigation,
  selectCollectionAction,
}) => {
  const [showDetails, setShowDetails] = useState(false)
  const handlePress = () => {
    selectCollectionAction(collectionId);
    navigation.navigate('Catalog');
  };

  return (
    <>
      <TouchableOpacity style={styles.collectionRow} onPress={handlePress}>
        <BaseText style={styles.labelText}>{label}</BaseText>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.infoIcon} onPress={() => setShowDetails(!showDetails)}>
            <Ionicons name="information-circle-outline" size={24} color="black"/>
          </TouchableOpacity>
          <CollectionRowActionIcon collectionId={collectionId} collectionLabel={label} />
        </View>
      </TouchableOpacity>
      {showDetails && <Text>Details</Text>}
    </>
  );
};

CollectionRow.propTypes = {
  collectionId: string.isRequired,
  label: string.isRequired,
  navigation: shape({}).isRequired,
  selectCollectionAction: func.isRequired,
};

const mapDispatchToProps = {
  selectCollectionAction: selectCollection,
};

export default connect(null, mapDispatchToProps)(CollectionRow);

const styles = StyleSheet.create({
  collectionRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgrey,
    width: '90%',
  },
  labelText: {
    color: 'black',
  },
  iconContainer: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  infoIcon: {
    marginRight: 8
  }
});
