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

const BAR_COLOR = '#666';
const CHART_MARGIN = 8;
const CHART_HEIGHT = 100;
const BAR_HEIGHT = 80;
const LABEL_COLOR = '#333';

const Bar = ({
  x, height, width,
}) => (
  <Line
    x1={x}
    y1={BAR_HEIGHT}
    x2={x}
    y2={BAR_HEIGHT - height}
    stroke={BAR_COLOR}
    strokeWidth={width}
    vectorEffect="non-scaling-stroke"
    shapeRendering="crispEdges"
  />
);

Bar.propTypes = {
  x: number.isRequired,
  width: number.isRequired,
  height: number.isRequired,
};

const TimelineBars = ({ availableWidth, maxCount, intervals }) => {
  const tickUnits = BAR_HEIGHT / maxCount;

  return intervals
    .filter(({ items }) => !!items.length)
    .map(({
      key, position, items,
    }) => (
      <Bar
        key={key}
        x={position * availableWidth}
        width={3}
        height={Math.max(items.length * tickUnits, 4)}
      />
    ));
};

TimelineBars.propTypes = {
  availableWidth: number.isRequired,
  maxCount: number.isRequired,
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

const TimelineBrowser = ({ timelineIntervals }) => {
  const {
    maxCount, intervals, startDate, endDate,
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
            maxCount={maxCount}
            intervals={intervals}
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
