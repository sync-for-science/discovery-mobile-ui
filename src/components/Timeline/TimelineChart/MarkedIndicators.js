import React from 'react';
import {
  arrayOf, bool, number, shape, string,
} from 'prop-types';
import { Rect } from 'react-native-svg';

import Colors from '../../../constants/Colors';
import * as config from './config';

const getCartoucheHeight = (cardinality) => {
  if (cardinality === 0) {
    return 0;
  }
  if (cardinality === 1) {
    return config.MARKED_RADIUS * 2; // circle
  }
  if (cardinality < 10) {
    return config.MARKED_RADIUS * 3;
  }
  if (cardinality < 20) {
    return config.MARKED_RADIUS * 4;
  }
  return config.MARKED_RADIUS * 5;
};

const MarkedCartouche = ({ hasFocused, markedHeight, y }) => (
  <Rect
    rx={config.MARKED_RADIUS}
    x={config.MARKED_RADIUS * -1}
    y={y}
    width={config.MARKED_RADIUS * 2}
    height={markedHeight}
    fill={hasFocused ? Colors.hasFocused : Colors.hasMarked}
  />
);

MarkedCartouche.propTypes = {
  hasFocused: bool.isRequired,
  markedHeight: number.isRequired,
  y: number.isRequired,
};

const MarkedIndicators = ({
  markedItems,
}) => {
  let nextY = config.BAR_HEIGHT + 18;
  return markedItems.map(({ subType, marked, focused }) => {
    const markedHeight = getCartoucheHeight(marked.length);
    const thisY = nextY;
    nextY += (markedHeight + 1);
    return (
      <MarkedCartouche
        key={subType}
        hasFocused={!!focused.length}
        markedHeight={markedHeight}
        y={thisY}
      />
    );
  });
};

MarkedIndicators.propTypes = {
  markedItems: arrayOf(shape({
    subType: string.isRequired,
    marked: arrayOf(string).isRequired,
  }).isRequired).isRequired,
};

export default MarkedIndicators;
