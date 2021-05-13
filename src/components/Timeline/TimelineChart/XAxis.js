import React from 'react';
import { instanceOf, number } from 'prop-types';
import { Line, Text as SvgText } from 'react-native-svg';
import { format, differenceInDays } from 'date-fns';

import * as config from './config';

const formatLabel = (date, intervalInDays) => {
  if (date) {
    if (intervalInDays < 365) {
      return format(date, 'MM/dd/yy');
    }
    return format(date, 'yyyy/MM');
  }
  return '';
};

const generateIntervals = (minDate, maxDate, hatchCount) => {
  const dateArray = [];
  if (minDate && maxDate) {
    const interval = (maxDate - minDate) / hatchCount;
    for (let i = 0; i <= hatchCount; i += 1) {
      dateArray.push(new Date(minDate.getTime() + (i * interval)));
    }
  }
  return dateArray;
};

const Label = ({ x, date, intervalInDays }) => (
  <>
    <Line
      x1={x}
      y1={config.BAR_HEIGHT + 4}
      x2={x}
      y2={config.BAR_HEIGHT - 2}
      stroke={config.BAR_COLOR}
      strokeWidth="1"
      vectorEffect="non-scaling-stroke"
    />
    <SvgText
      fill={config.LABEL_COLOR}
      stroke="none"
      fontSize={config.LABEL_FONT_SIZE}
      fontWeight="normal"
      x={x}
      y={config.BAR_HEIGHT + 16}
      textAnchor="middle"
    >
      {formatLabel(date, intervalInDays)}
    </SvgText>
  </>
);

Label.propTypes = {
  date: instanceOf(Date).isRequired,
  x: number.isRequired,
  intervalInDays: number.isRequired,
};

const XAxis = ({ availableWidth, minDate, maxDate }) => {
  const intervalInDays = Math.max(1, (maxDate && minDate) ? differenceInDays(maxDate, minDate) : 1);
  const hatchCount = Math.min(intervalInDays, config.X_AXIS_INTERVAL_COUNT);
  return (
    <>
      <Line
        x1={0}
        y1={config.BAR_HEIGHT + 2}
        x2={availableWidth}
        y2={config.BAR_HEIGHT + 2}
        stroke={config.BAR_COLOR}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      {
        generateIntervals(minDate, maxDate, hatchCount).map((date, i) => (
          <Label
            key={`${date}-${i}`} // eslint-disable-line react/no-array-index-key
            date={date}
            x={(i) * (availableWidth / hatchCount)}
            intervalInDays={intervalInDays}
          />
        ))
      }
    </>
  );
};

XAxis.propTypes = {
  availableWidth: number.isRequired,
  minDate: instanceOf(Date),
  maxDate: instanceOf(Date),
};

XAxis.defaultProps = {
  minDate: null,
  maxDate: null,
};

export default XAxis;
