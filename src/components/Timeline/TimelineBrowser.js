import React from 'react';
import {
  StyleSheet, View, Dimensions,
} from 'react-native';
import {
  arrayOf, shape, string, number,
} from 'prop-types';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import Svg, {
  Rect, Line, G, Text as SvgText, // Mask
} from 'react-native-svg';
import { timelineIntervalsSelector } from '../../redux/selectors';

const BAR_COLOR = '#ccc';
const BAR_COLOR_1SD = '#999';
const BAR_COLOR_2SD = '#c33';
const CHART_MARGIN = 8;
const CHART_HEIGHT = 100;
const BAR_HEIGHT = 80;
const LABEL_COLOR = '#333';

const Bar = ({
  x, zScore, height, width,
}) => {
  let color = BAR_COLOR;
  if (zScore > 2) {
    color = BAR_COLOR_2SD;
  } else if (zScore > 1) {
    color = BAR_COLOR_1SD;
  }
  return (
    <Line
      x1={x}
      y1={BAR_HEIGHT}
      x2={x}
      y2={BAR_HEIGHT - height}
      stroke={color}
      strokeWidth={width}
      vectorEffect="non-scaling-stroke"
      shapeRendering="crispEdges"
    />
  );
};

Bar.propTypes = {
  x: number.isRequired,
  zScore: number.isRequired,
  width: number.isRequired,
  height: number.isRequired,
};

const TimelineBars = ({
  availableWidth, maxCount1SD, maxCount2SD, intervals,
}) => {
  const tickUnits = BAR_HEIGHT / maxCount1SD;

  return intervals
    .filter(({ items }) => !!items.length)
    .map(({
      key, position, items, zScore,
    }) => (
      <Bar
        key={key}
        x={position * availableWidth}
        width={3}
        height={Math.max(Math.min(items.length, maxCount1SD) * tickUnits, 4)}
        zScore={zScore}
      />
    ));
};

TimelineBars.propTypes = {
  availableWidth: number.isRequired,
  maxCount1SD: number.isRequired,
  maxCount2SD: number.isRequired,
  intervals: arrayOf(shape({})).isRequired,
};

const XAxis = ({ availableWidth, startLabel, endLabel }) => (
  <>
    <Line
      x1={0}
      y1={BAR_HEIGHT + 2}
      x2={availableWidth}
      y2={BAR_HEIGHT + 2}
      stroke={BAR_COLOR}
      // strokeWidth={scaledStrokeWidth}
      strokeWidth="1"
      vectorEffect="non-scaling-stroke"
    />
    <SvgText
      fill={LABEL_COLOR}
      stroke="none"
      fontSize="8"
      fontWeight="normal"
      x={0}
      y={BAR_HEIGHT + 10}
      textAnchor="start"
      // transform="translate(0,0) scale(1, -1)"
    >
      {startLabel}
    </SvgText>
    <SvgText
      fill={LABEL_COLOR}
      stroke="none"
      fontSize="8"
      fontWeight="normal"
      x={availableWidth}
      y={BAR_HEIGHT + 10}
      textAnchor="end"
      // transform="translate(0,0) scale(1, -1)"
    >
      {endLabel}
    </SvgText>
  </>
);

XAxis.propTypes = {
  availableWidth: number.isRequired,
  startLabel: string.isRequired,
  endLabel: string.isRequired,
};

const YAxisBound = ({
  availableWidth, maxCount, maxCount1SD, maxCount2SD,
}) => {
  if (maxCount > maxCount1SD) {
    const eventCountLabel = `${maxCount1SD} events`;
    return (
      <>
        <Line
          x1={0}
          y1={-2}
          x2={availableWidth}
          y2={-2}
          stroke={BAR_COLOR}
          strokeDasharray="0 1 2"
          // strokeWidth={scaledStrokeWidth}
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
        <SvgText
          fill={LABEL_COLOR}
          stroke="none"
          fontSize="8"
          x={0}
          y={8}
          textAnchor="start"
        >
          {eventCountLabel}
        </SvgText>
      </>
    );
  }
  return null;
};

YAxisBound.propTypes = {
  availableWidth: number.isRequired,
  maxCount: number.isRequired,
  maxCount1SD: number.isRequired,
  maxCount2SD: number.isRequired,
};

const TimelineBrowser = ({ timelineIntervals }) => {
  const {
    maxCount, maxCount1SD, maxCount2SD, intervals, startDate, endDate,
  } = timelineIntervals;
  const screenWidth = Dimensions.get('window').width;
  const availableWidth = screenWidth - (2 * CHART_MARGIN);

  return (
    <View
      style={[
        // StyleSheet.absoluteFill,
        styles.root,
      ]}
    >
      <Svg
        width={`${screenWidth}`}
        height="100"
        viewBox={`0 0 ${screenWidth} 100`}
        style={{ borderWidth: 0 }}
      >
        <G
          x={CHART_MARGIN}
          y={4}
        >
          <XAxis
            availableWidth={availableWidth}
            startLabel={(startDate && format(startDate, 'MM/dd/yyyy')) || ''}
            endLabel={(endDate && format(endDate, 'MM/dd/yyyy')) || ''}
          />
          <TimelineBars
            availableWidth={availableWidth}
            maxCount1SD={maxCount1SD}
            maxCount2SD={maxCount2SD}
            intervals={intervals}
          />
          <YAxisBound
            availableWidth={availableWidth}
            maxCount={maxCount}
            maxCount1SD={maxCount1SD}
            maxCount2SD={maxCount2SD}
          />
          <Rect
            x="0"
            y="0"
            width={availableWidth}
            height={BAR_HEIGHT + 14}
            // stroke="#f008" // debug position
          />
        </G>
      </Svg>
    </View>
  );
};

TimelineBrowser.propTypes = {
  timelineIntervals: shape({
    maxCount: number.isRequired,
    maxCount1SD: number.isRequired,
    maxCount2SD: number.isRequired,
    intervals: arrayOf(shape({})).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  timelineIntervals: timelineIntervalsSelector(state),
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(TimelineBrowser));

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: CHART_HEIGHT,
  },
  debug: {
    left: 2,
    top: 2,
    fontSize: 6,
  },
});
