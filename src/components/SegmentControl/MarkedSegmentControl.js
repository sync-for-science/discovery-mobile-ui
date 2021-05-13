import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';

import BaseSegmentControl from '../Generic/BaseSegmentControl';
import { toggleShowMarkedOnly } from '../../redux/action-creators';
import { activeCollectionShowMarkedOnlySelector, hasAnyHighlightedRecordInScope } from '../../redux/selectors';
import Colors from '../../constants/Colors';

const MarkedSegmentControl = ({
  enabled,
  showMarkedOnly,
  toggleShowMarkedOnlyAction,
}) => {
  const segControlIndex = showMarkedOnly ? 1 : 0;
  const handleChange = (selectedSegmentIndex) => {
    toggleShowMarkedOnlyAction(selectedSegmentIndex !== 0);
  };

  return (
    <View style={styles.root}>
      <BaseSegmentControl
        enabled={enabled}
        values={['Edit Highlights', 'Preview Highlights']}
        selectedIndex={segControlIndex}
        onChange={handleChange}
        activeColor={Colors.markedsegmentControl}
      />
    </View>
  );
};

MarkedSegmentControl.propTypes = {
  enabled: bool.isRequired,
  showMarkedOnly: bool.isRequired,
  toggleShowMarkedOnlyAction: func.isRequired,
};

const mapStateToProps = (state) => ({
  enabled: hasAnyHighlightedRecordInScope(state),
  showMarkedOnly: activeCollectionShowMarkedOnlySelector(state),
});

const mapDispatchToProps = {
  toggleShowMarkedOnlyAction: toggleShowMarkedOnly,
};

export default connect(mapStateToProps, mapDispatchToProps)(MarkedSegmentControl);

const styles = StyleSheet.create({
  root: {
    marginBottom: 10,
  },
  descriptionText: {
    marginTop: 10,
    width: '100%',
    textAlign: 'center',
  },
});
