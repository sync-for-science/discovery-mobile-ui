import React from 'react';
import { instanceOf, number } from 'prop-types';
import { Line, Text as SvgText } from 'react-native-svg';
import { format } from 'date-fns';

import * as config from './config';

const formatLabel = (date) => {
  if (date) {
    return format(date, 'yyyy/MM');
  }
  return '';
};

const generateIntervals = (minDate, maxDate) => {
  const dateArray = [];
  if (minDate && maxDate) {
    const interval = (maxDate - minDate) / (config.X_AXIS_INTERVAL_COUNT);
    for (let i = 0; i <= config.X_AXIS_INTERVAL_COUNT; i += 1) {
      dateArray.push(minDate.getTime() + (i * interval));
    }
  }
  return dateArray;
};

const Label = ({ x, date }) => (
  <SvgText
    fill={config.LABEL_COLOR}
    stroke="none"
    fontSize={config.LABEL_FONT_SIZE}
    fontWeight="normal"
    x={x}
    y={config.BAR_HEIGHT + 12}
    textAnchor="middle"
  >
    {formatLabel(date)}
  </SvgText>
);

Label.propTypes = {
  date: instanceOf(Date).isRequired,
  x: number.isRequired,
};

const XAxis = ({ availableWidth, minDate, maxDate }) => (
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
      generateIntervals(minDate, maxDate).map((date, i) => (
        <Label
          date={date}
          x={(i) * (availableWidth / config.X_AXIS_INTERVAL_COUNT)}
        />
      ))
    }
  </>
);

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
