import React from 'react';
import { number, string } from 'prop-types';
import { Line, Text as SvgText } from 'react-native-svg';

import * as config from './config';

const XAxis = ({ availableWidth, startLabel, endLabel }) => (
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
      {startLabel}
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
      {endLabel}
    </SvgText>
  </>
);

XAxis.propTypes = {
  availableWidth: number.isRequired,
  startLabel: string.isRequired,
  endLabel: string.isRequired,
};

export default XAxis;
