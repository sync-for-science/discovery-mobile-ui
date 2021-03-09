import React from 'react';
import {
  StyleSheet, View, Dimensions,
} from 'react-native';
import {
  arrayOf, shape, string, number, instanceOf,
} from 'prop-types';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import Svg, {
  Rect, Line, G, Text as SvgText, Polygon, // Mask
} from 'react-native-svg';
import { timelineIntervalsSelector } from '../../redux/selectors';

const BAR_COLOR = '#ccc';
const COLOR_1SD = '#ccc'; // also 999 in mocks
const COLOR_2SD = '#f00'; // also fc0 in mocks
const BOUNDARY_LINE_COLOR = '#36c';
const CHART_MARGIN = 12;
const CHART_HEIGHT = 124;
const BAR_HEIGHT = 80;
const LABEL_COLOR = '#333';

const Variance = ({ x, y, zScore }) => {
  if (zScore < 1) {
    return null;
  }
  return (
    <Polygon
      x={x}
      y={y}
      fill={(zScore >= 2) ? COLOR_2SD : COLOR_1SD}
      points="-3 0, 0 -4, 3 0"
    />
  );
};

Variance.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
  zScore: number.isRequired,
};

const Bar = ({
  x, zScore, height, width,
}) => (
  <>
    <Variance
      x={x}
      y={-4}
      zScore={zScore}
    />
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
  </>
);

Bar.propTypes = {
  x: number.isRequired,
  zScore: number.isRequired,
  width: number.isRequired,
  height: number.isRequired,
};

const TimelineBars = ({
  availableWidth, maxCount1SD, intervals,
}) => {
  if (!maxCount1SD) {
    return null;
  }
  const tickUnits = BAR_HEIGHT / maxCount1SD;

  return intervals
    .filter(({ items }) => !!items.length)
    .map(({
      key, position, items, zScore,
    }) => (
      <Bar
        key={key}
        x={position * availableWidth}
        width={2}
        height={Math.max(Math.min(items.length, maxCount1SD) * tickUnits, 4)}
        zScore={zScore}
      />
    ));
};

TimelineBars.propTypes = {
  availableWidth: number.isRequired,
  maxCount1SD: number.isRequired,
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

const LegendAndBound = ({
  availableWidth, maxCount, maxCount1SD, maxCount2SD,
}) => {
  if (maxCount >= maxCount1SD) {
    const eventCountLabel = `${maxCount1SD}`;
    const zscore2label = `more than ${maxCount2SD}`;
    const zscore1label = `between ${maxCount1SD} and ${maxCount2SD}`;

    return (
      <>
        <Variance
          x={0}
          y={-24}
          zScore={2}
        />
        <SvgText
          x={6}
          y={-24}
          fill={LABEL_COLOR}
          stroke="none"
          fontSize="8"
          textAnchor="left"
        >
          {zscore2label}
        </SvgText>
        <Variance
          x={0}
          y={-14}
          zScore={1}
        />
        <SvgText
          x={6}
          y={-14}
          fill={LABEL_COLOR}
          stroke="none"
          fontSize="8"
          textAnchor="left"
        >
          {zscore1label}
        </SvgText>
        <Line
          x1={0}
          y1={-2}
          x2={availableWidth}
          y2={-2}
          stroke={BOUNDARY_LINE_COLOR}
          strokeDasharray="2 2"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <SvgText
          fill={LABEL_COLOR}
          stroke="none"
          fontSize="8"
          x={-4}
          y={0}
          textAnchor="end"
        >
          {eventCountLabel}
        </SvgText>
      </>
    );
  }
  return null;
};

LegendAndBound.propTypes = {
  availableWidth: number.isRequired,
  maxCount: number.isRequired,
  maxCount1SD: number.isRequired,
  maxCount2SD: number.isRequired,
};

const RecordAndIntervalCount = ({
  availableWidth,
  recordCount,
  intervalCount,
  intervalsWithRecordsCount,
}) => {
  const recordCountLabel = `${recordCount} total records`;
  const intervalCountLabel = intervalCount ? `${intervalCount} intervals, ${intervalsWithRecordsCount} have records` : '';

  return (
    <>
      <SvgText
        x={availableWidth / 2}
        y={-24}
        fill={LABEL_COLOR}
        stroke="none"
        fontSize="8"
        textAnchor="center"
      >
        {recordCountLabel}
      </SvgText>
      <SvgText
        x={availableWidth / 2}
        y={-14}
        fill={LABEL_COLOR}
        stroke="none"
        fontSize="8"
        textAnchor="center"
      >
        {intervalCountLabel}
      </SvgText>
    </>
  );
};

RecordAndIntervalCount.propTypes = {
  availableWidth: number.isRequired,
  intervalCount: number.isRequired,
  intervalsWithRecordsCount: number.isRequired,
  recordCount: number.isRequired,
};

const TimelineBrowser = ({ timelineIntervals }) => {
  const {
    startDate, endDate,
    maxCount1SD, maxCount2SD, maxCount,
    intervals, intervalCount, recordCount,
  } = timelineIntervals;
  const screenWidth = Dimensions.get('window').width;
  const availableWidth = screenWidth - (3 * CHART_MARGIN);
  const noResultsMessage = recordCount ? '' : 'No results found for date and type filters.';

  return (
    <View
      style={[
        // StyleSheet.absoluteFill,
        styles.root,
      ]}
    >
      <Svg
        width={`${screenWidth}`}
        height={CHART_HEIGHT}
        viewBox={`0 0 ${screenWidth} 100`}
        style={{ borderWidth: 0 }}
      >
        <G
          x={2 * CHART_MARGIN} // accommodate label for boundary line
          y={20}
        >
          <SvgText
            fill={LABEL_COLOR}
            stroke="none"
            fontSize="12"
            fontWeight="bold"
            fontStyle="italic"
            x={availableWidth / 2}
            y={BAR_HEIGHT / 2}
            textAnchor="middle"
          >
            {noResultsMessage}
          </SvgText>
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
          <LegendAndBound
            availableWidth={availableWidth}
            maxCount={maxCount}
            maxCount1SD={maxCount1SD}
            maxCount2SD={maxCount2SD}
          />
          <RecordAndIntervalCount
            availableWidth={availableWidth}
            intervalCount={intervalCount}
            intervalsWithRecordsCount={intervals.length}
            recordCount={recordCount}
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
    startDate: instanceOf(Date),
    maxDate: instanceOf(Date),
    intervalTotalCount: number.isRequired, // total count
    intervals: arrayOf(shape({})).isRequired, // that have records
    maxCount: number.isRequired,
    maxCount1SD: number.isRequired,
    maxCount2SD: number.isRequired,
    recordCount: number.isRequired,
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
