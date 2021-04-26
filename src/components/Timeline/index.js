import React, { useState } from 'react';
import { func } from 'prop-types';
import {
  StyleSheet, View, TouchableOpacity, PanResponder,
} from 'react-native';
import { Left, Right } from 'native-base';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'react-redux';

import DateRangePicker from './DateRangePicker';
import TimelineChart from './TimelineChart';
import Colors from '../../constants/Colors';
import {
  activeCollectionDateRangeFilterSelector,
  timelineIntervalsSelector,
} from '../../redux/selectors';
import { shiftDateRange } from '../../redux/action-creators';

const Timeline = ({ handleOpenDrawer, shiftDateRangeFilter }) => {
  const [showTimeline, setShowTimeline] = useState(true);

  const panResponder = React.useRef(
    PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        // console.info('onPanResponderMove, evt: ', evt);
        // console.info('onPanResponderMove, gestureState: ', gestureState);
        shiftDateRangeFilter({
          moveY: gestureState.moveY,
        });
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) =>
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        true,

    }),
  ).current;

  return (
    <View
      style={[
        // StyleSheet.absoluteFill,
        styles.root,
      ]}
      {...panResponder.panHandlers}
    >
      <View style={styles.dateRangeContainer}>
        <Left>
          <TouchableOpacity
            style={styles.drawerIcon}
            onPress={handleOpenDrawer}
          >
            <MaterialCommunityIcons
              name="filter-outline"
              size={24}
              color={Colors.headerIcon}
            />
          </TouchableOpacity>
        </Left>
        <DateRangePicker />
        <Right>
          <TouchableOpacity
            style={styles.expandIcon}
            onPress={() => setShowTimeline(!showTimeline)}
          >
            <Ionicons
              name={showTimeline ? 'chevron-up' : 'chevron-down'}
              size={24}
              color={Colors.expandTimeline}
            />
          </TouchableOpacity>
        </Right>
      </View>
      {showTimeline && <TimelineChart />}
    </View>
  );
};

Timeline.propTypes = {
  handleOpenDrawer: func,
  shiftDateRangeFilter: func.isRequired,
};

Timeline.defaultProps = {
  handleOpenDrawer: null,
};

const mapStateToProps = (state) => ({
  timelineIntervals: timelineIntervalsSelector(state),
  dateRangeFilter: activeCollectionDateRangeFilterSelector(state),
});

const mapDispatchToProps = {
  shiftDateRangeFilter: shiftDateRange,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Timeline));

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'column',
    borderColor: 'gray',
  },
  dateRangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  drawerIcon: {
    paddingLeft: 8,
  },
  expandIcon: {
    paddingRight: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
