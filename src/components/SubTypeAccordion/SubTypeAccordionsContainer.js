import React from 'react';
import {
  StyleSheet, View
} from 'react-native';
import { shape, arrayOf, bool } from 'prop-types';

import SubTypeAccordion from './SubTypeAccordion';
import BaseText from '../Generic/BaseText'

const SubTypeAccordionsContainer = ({ data, fromDetailsPanel }) => {
  return (
    <View>
      { data.map(({type, label, subTypes}, index) => {
          const firstGroupStyle = index === 0 ? styles.firstGroupContainer : {};
          return (
            <View key={type} style={[styles.groupContainer, firstGroupStyle]}>
             {fromDetailsPanel && 
                <View style={styles.typeTextContainer}>
                  <BaseText variant="title" style={styles.typeText}>
                    {label}
                  </BaseText>
                </View>
              }
              <View style={styles.root}>
                <View style={styles.container}>
                  {subTypes.map(({ subType, recordIds }) => (
                    <SubTypeAccordion
                      key={subType}
                      subType={subType}
                      resourceIds={recordIds}
                      subTypeCount={recordIds.length}
                      fromDetailsPanel={fromDetailsPanel}
                    />
                  ))}
                </View>
              </View>
            </View>
          );
        })
      }
    </View>
  )
};

SubTypeAccordionsContainer.propTypes = {
  data: arrayOf(shape({})).isRequired,
  fromDetailsPanel: bool,
};

SubTypeAccordionsContainer.defaultProps = {
  fromDetailsPanel: false,
};

export default SubTypeAccordionsContainer;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
  },
  groupContainer: {
    marginTop: 20,
  },
  firstGroupContainer: {
    marginTop: 0,
  },
  typeTextContainer: {
    marginLeft: 5,
  },
  typeText: {
    textTransform: 'uppercase',
  },
});
