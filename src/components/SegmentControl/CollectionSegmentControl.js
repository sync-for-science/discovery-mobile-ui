import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
import BaseSegmentControl from '../Generic/BaseSegmentControl';

import BaseText from '../Generic/BaseText';
import { toggleShowCollectionOnly } from '../../redux/action-creators';
import { activeCollectionShowCollectionOnlySelector, hasAnyCollectionRecordInScope } from '../../redux/selectors';

const allRecordsDescription = 'Displays all records.';
const collectionRecordsDescription = 'Only displays records saved to the collection.';

const CollectionSegmentControl = ({
  enabled,
  showCollectionOnly,
  toggleShowCollectionOnlyAction,
}) => {
  const segControlIndex = showCollectionOnly ? 1 : 0;
  const description = segControlIndex === 0 ? allRecordsDescription : collectionRecordsDescription;
  const handleChange = (selectedSegmentIndex) => {
    toggleShowCollectionOnlyAction(selectedSegmentIndex !== 0);
  };

  return (
    <View style={styles.root}>
      <BaseSegmentControl
        enabled={enabled}
        values={['All Records', 'Collection Records']}
        selectedIndex={segControlIndex}
        onChange={handleChange}
      />
      <BaseText style={styles.descriptionText}>{description}</BaseText>
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
    marginBottom: 30,
  },
  descriptionText: {
    marginTop: 10,
    width: '100%',
    textAlign: 'center',
  },
});
