import React from 'react';
import { number } from 'prop-types';
import { Polygon } from 'react-native-svg';

import * as config from './config';

const Variance = ({ x, y, zScore }) => {
  if (zScore < 1) {
    return null;
  }
  return (
    <Polygon
      x={x}
      y={y}
      fill={(zScore >= 2) ? config.COLOR_2SD : config.COLOR_1SD}
      points="-3 0, 0 -5, 3 0"
    />
  );
};

Variance.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
  zScore: number.isRequired,
};

export default Variance;
