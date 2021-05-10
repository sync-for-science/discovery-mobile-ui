import React from 'react';
import { number, string } from 'prop-types';
import { Line } from 'react-native-svg';

import * as config from './config';

const Bar = ({
  x, height, width, color,
}) => (
  <Line
    x1={x}
    y1={config.BAR_HEIGHT}
    x2={x}
    y2={config.BAR_HEIGHT - height}
    stroke={color}
    strokeWidth={width}
    vectorEffect="non-scaling-stroke"
    shapeRendering="crispEdges"
  />
);

Bar.propTypes = {
  x: number.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  color: string.isRequired,
};

export default Bar;
