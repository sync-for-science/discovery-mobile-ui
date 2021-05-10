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
    <SvgText
      fill={config.LABEL_COLOR}
      stroke="none"
      fontSize={config.LABEL_FONT_SIZE}
      fontWeight="normal"
      x={0}
      y={config.BAR_HEIGHT + 12}
      textAnchor="start"
    >
      {formatLabel(minDate)}
    </SvgText>
    <SvgText
      fill={config.LABEL_COLOR}
      stroke="none"
      fontSize={config.LABEL_FONT_SIZE}
      fontWeight="normal"
      x={availableWidth}
      y={config.BAR_HEIGHT + 12}
      textAnchor="end"
    >
      {formatLabel(maxDate)}
    </SvgText>
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
