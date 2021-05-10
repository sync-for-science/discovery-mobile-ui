import React from 'react';
import {
  StyleSheet, View, Dimensions,
} from 'react-native';
import {
  arrayOf, instanceOf, shape, string, number, bool,
} from 'prop-types';
import { connect } from 'react-redux';
import Svg, {
  Rect, G, Text as SvgText,
} from 'react-native-svg';

import { timelineIntervalsSelector } from '../../../redux/selectors';
import VarianceLegend from './VarianceLegend';
import GroupingLegend from './GroupingLegend';
import VerticalBound from './VerticalBound';
import Variance from './Variance';
import Bar from './Bar';
import XAxis from './XAxis';
import MarkedIndicators from './MarkedIndicators';
import Colors from '../../../constants/Colors';
import * as config from './config';

const TimelineItems = ({
  availableWidth, countForMaxBarHeight, intervals, showVariance,
}) => {
  if (!countForMaxBarHeight) {
    return null;
  }
  const tickUnits = config.BAR_HEIGHT / countForMaxBarHeight;

  return intervals
    .filter(({ items }) => !!items.length)
    .map(({
      key, position, zScore, items, markedItems, collectionItems,
    }) => (
      <G
        key={key}
        x={position * availableWidth}
      >
        {showVariance && (
        <Variance
          x={0}
          y={-4}
          zScore={zScore}
        />
        )}
        <Bar
          x={0}
          width={config.BAR_WIDTH}
          height={Math.max(Math.min(items.length, countForMaxBarHeight) * tickUnits, 4)}
          color={config.BAR_COLOR}
        />
        {!collectionItems.length ? null : (
          <Bar
            x={0}
            width={config.BAR_WIDTH}
            height={Math.max(Math.min(collectionItems.length, countForMaxBarHeight) * tickUnits, 4)}
            color={Colors.collectionIcon}
          />
        )}
        <MarkedIndicators
          markedItems={markedItems}
        />
      </G>
    ));
};

TimelineItems.propTypes = {
  availableWidth: number.isRequired,
  countForMaxBarHeight: number.isRequired,
  intervals: arrayOf(shape({})).isRequired,
  showVariance: bool.isRequired,
};

const TimelineChart = ({ timelineIntervals }) => {
  const {
    maxCount, maxCount1SD, maxCount2SD, recordCount, recordCount2SDplus,
    intervals, intervalLength,
    minDate, maxDate,
  } = timelineIntervals;
  const screenWidth = Dimensions.get('window').width;
  const availableWidth = screenWidth - (3 * config.CHART_MARGIN);
  // TODO: a full, multi-line description of applied filters?
  const noResultsMessage = recordCount ? '' : 'No loaded records pass your filters.';
  const showVariance = maxCount > config.VARIANCE_THRESHOLD;
  const countForMaxBarHeight = showVariance ? maxCount1SD : maxCount;

  return (
    <View
      style={[
        // StyleSheet.absoluteFill,
        styles.root,
      ]}
    >
      <Svg
        width={`${screenWidth}`}
        height={config.CHART_HEIGHT}
        viewBox={`0 0 ${screenWidth} ${config.CHART_HEIGHT}`}
        style={{ borderWidth: 0 }}
      >
        <G
          x={2 * config.CHART_MARGIN} // accommodate label for boundary line
          y={32}
        >
          <SvgText
            fill={config.LABEL_COLOR}
            stroke="none"
            fontSize="12"
            fontWeight="bold"
            fontStyle="italic"
            x={availableWidth / 2}
            y={config.BAR_HEIGHT / 2}
            textAnchor="middle"
          >
            {noResultsMessage}
          </SvgText>
          <XAxis
            availableWidth={availableWidth}
            minDate={minDate}
            maxDate={maxDate}
          />
          <TimelineItems
            availableWidth={availableWidth}
            countForMaxBarHeight={countForMaxBarHeight}
            intervals={intervals}
            showVariance={showVariance}
          />
          <VerticalBound
            availableWidth={availableWidth}
            countForMaxBarHeight={countForMaxBarHeight}
          />
          {showVariance && (
          <VarianceLegend
            maxCount={maxCount}
            maxCount1SD={maxCount1SD}
            maxCount2SD={maxCount2SD}
            recordCount2SDplus={recordCount2SDplus}
          />
          )}
          <GroupingLegend
            availableWidth={availableWidth}
            intervalLength={intervalLength}
          />
          <Rect
            x="0"
            y="0"
            width={availableWidth}
            height={config.BAR_HEIGHT}
            strokeDasharray="2 2"
            // stroke="#f008" // debug position
          />
        </G>
        <Rect
          x="0"
          y="0"
          width={screenWidth}
          height={config.CHART_HEIGHT}
          strokeDasharray="2 2"
          // stroke="#00f8" // debug position
        />
      </Svg>
    </View>
  );
};

TimelineChart.propTypes = {
  timelineIntervals: shape({
    minDate: instanceOf(Date),
    maxDate: instanceOf(Date),
    intervals: arrayOf(shape({
      zScore: number.isRequired,
      items: arrayOf(string).isRequired,
      markedItems: arrayOf(shape({
        subType: string.isRequired,
        marked: arrayOf(string).isRequired,
      }).isRequired).isRequired,
      collectionItems: arrayOf(string).isRequired,
    })).isRequired, // that have records
    intervalLength: number.isRequired,
    maxCount: number.isRequired,
    maxCount1SD: number.isRequired,
    maxCount2SD: number.isRequired,
    recordCount: number.isRequired,
    recordCount1SD: number.isRequired,
    recordCount2SD: number.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  timelineIntervals: timelineIntervalsSelector(state),
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(TimelineChart));

const styles = StyleSheet.create({
  root: {
    width: '100%',
    minHeight: config.CHART_HEIGHT,
  },
  debug: {
    left: 2,
    top: 2,
    fontSize: 6,
  },
});
