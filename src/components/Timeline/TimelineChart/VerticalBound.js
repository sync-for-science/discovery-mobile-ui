import React from 'react';
import { number } from 'prop-types';
import { Line, Text as SvgText } from 'react-native-svg';

import * as config from './config';

const VerticalBound = ({
  availableWidth, countForMaxBarHeight,
}) => {
  if (!countForMaxBarHeight) {
    return null;
  }
  const verticalBoundLabel = `${countForMaxBarHeight}`;
  return (
    <>
      <Line
        x1={0}
        y1={-2}
        x2={availableWidth}
        y2={-2}
        stroke={config.BOUNDARY_LINE_COLOR}
        strokeDasharray="2 2"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <SvgText
        fill={config.LABEL_COLOR}
        stroke="none"
        fontSize={config.LABEL_FONT_SIZE}
        x={-4}
        y={0}
        textAnchor="end"
      >
        {verticalBoundLabel}
      </SvgText>
    </>
  );
};

VerticalBound.propTypes = {
  availableWidth: number.isRequired,
  countForMaxBarHeight: number.isRequired,
};

export default VerticalBound;
