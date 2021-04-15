import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';

import BaseSegmentControl from '../Generic/BaseSegmentControl';
import BaseText from '../Generic/BaseText';
import { toggleShowMarkedOnly } from '../../redux/action-creators';

const allRecordsDescription = 'Displays all records.';
const highlightedRecordsDescription = 'Only displays highlighted records.';

const MarkedSegmentControl = ({
  hasMarkedResources,
  showMarkedOnly,
  toggleShowMarkedOnlyAction,
}) => {
  const segControlIndex = showMarkedOnly ? 1 : 0;
  const description = segControlIndex === 0 ? allRecordsDescription : highlightedRecordsDescription;
  const handleChange = (selectedSegmentIndex) => {
    toggleShowMarkedOnlyAction(selectedSegmentIndex !== 0);
  };

  return (
    <View style={styles.root}>
      <BaseSegmentControl
        values={['All Records', 'Highlighted Records']}
        selectedIndex={segControlIndex}
        onChange={handleChange}
        enabled={hasMarkedResources}
      />
      <BaseText style={styles.descriptionText}>{description}</BaseText>
    </View>
  );
};

MarkedSegmentControl.propTypes = {
  hasMarkedResources: bool.isRequired,
  showMarkedOnly: bool.isRequired,
  toggleShowMarkedOnlyAction: func.isRequired,
};

const mapDispatchToProps = {
  toggleShowMarkedOnlyAction: toggleShowMarkedOnly,
};

export default connect(null, mapDispatchToProps)(MarkedSegmentControl);

const styles = StyleSheet.create({
  root: {
    marginBottom: 30,
  },
  descriptionText: {
    marginTop: 10,
    width: '100%',
    textAlign: 'center',
  },
});
