import React, {useState} from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import SegmentedControl from '@react-native-segmented-control/segmented-control';

import Colors from '../../constants/Colors'

export const CatalogModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [segControlIndex, setsSegControlIndex] = useState(0)
  return (
    <View style={styles.root}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <Text style={styles.modalText}>Record Filters</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text>Close</Text>
                </TouchableOpacity>
              </View>
            <View style={{width: '100%', marginTop: 20}}>
              <SegmentedControl
                values={['All Records', 'Collection Records']}
                selectedIndex={segControlIndex}
                onChange={(event) => {
                  setsSegControlIndex(event.nativeEvent.selectedSegmentIndex);
                }}
                fontStyle={{fontSize: 16, color: 'black'}}
                activeFontStyle={{fontSize: 16}}
                tintColor="lightblue"
              />
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Entypo name="dots-three-vertical" size={24} color={Colors.darkgrey} />
      </TouchableOpacity>        
    </View>
  )
}

export default CatalogModal

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    shadowColor: 'black',
    // shadowOffset: {
    //   width: 0,
    //   height: -100,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 300,
  },
  modalView: {
    height: '50%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
