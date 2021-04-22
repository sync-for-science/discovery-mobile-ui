import React from 'react';
import {
  StyleSheet, View
} from 'react-native';
import { connect } from 'react-redux';
import { shape } from 'prop-types';
import { selectedRecordsGroupedByTypeSelector } from '../../redux/selectors';

import SubTypeAccordion from './SubTypeAccordion';

const SubTypeAccordionsContainer = ({ selectedRecordsGroupedByType }) => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        { selectedRecordsGroupedByType
          .map((typeObject) => {
            return (
              <View key={typeObject.label}>
                {typeObject.subTypes.map(({subType, recordIds}) => (
                  <SubTypeAccordion
                    key={subType}
                    subType={subType}
                    resourceIds={recordIds}
                    subTypeCount={recordIds.length}
                  />
                ))}
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

SubTypeAccordionsContainer.propTypes = {
  accordionsContainerData: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  selectedRecordsGroupedByType: selectedRecordsGroupedByTypeSelector(state)
});

export default connect(mapStateToProps, null)(SubTypeAccordionsContainer);

const styles = StyleSheet.create({
  root: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
  },
});
