import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
import BaseSegmentControl from '../Generic/BaseSegmentControl';

import { toggleShowCollectionOnly } from '../../redux/action-creators';
import { activeCollectionShowCollectionOnlySelector, hasAnyCollectionRecordInScope } from '../../redux/selectors';
import Colors from '../../constants/Colors';

const CollectionSegmentControl = ({
  enabled,
  showCollectionOnly,
  toggleShowCollectionOnlyAction,
}) => {
  const segControlIndex = showCollectionOnly ? 1 : 0;
  const handleChange = (selectedSegmentIndex) => {
    toggleShowCollectionOnlyAction(selectedSegmentIndex !== 0);
  };

  return (
    <View style={styles.root}>
      <BaseSegmentControl
        enabled={enabled}
        values={['Edit Collection', 'Preview Collection']}
        selectedIndex={segControlIndex}
        onChange={handleChange}
        activeColor={Colors.collectionSegmentControl}
      />
    </View>
  );
};

CollectionSegmentControl.propTypes = {
  enabled: bool.isRequired,
  showCollectionOnly: bool.isRequired,
  toggleShowCollectionOnlyAction: func.isRequired,
};

const mapStateToProps = (state) => ({
  enabled: hasAnyCollectionRecordInScope(state),
  showCollectionOnly: activeCollectionShowCollectionOnlySelector(state),
});

const mapDispatchToProps = {
  toggleShowCollectionOnlyAction: toggleShowCollectionOnly,
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionSegmentControl);

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
