import React from 'react';
import { number } from 'prop-types';
import { Text as SvgText } from 'react-native-svg';
import { addDays, formatDistanceStrict } from 'date-fns';

import * as config from './config';

const formatDays = (numDays) => {
  const d = new Date();
  return formatDistanceStrict(d, addDays(d, numDays), { unit: 'day' });
};

const GroupingLegend = ({
  availableWidth,
  intervalLength,
}) => {
  if (intervalLength) {
    const intervalLengthLabel = formatDays(Math.round(intervalLength));
    return (
      <SvgText
        x={availableWidth}
        y={-16}
        fill={config.LABEL_COLOR}
        stroke="none"
        fontSize={config.LABEL_FONT_SIZE}
        textAnchor="end"
      >
        {`grouped by ${intervalLengthLabel}`}
      </SvgText>
    );
  }
  return null;
};

GroupingLegend.propTypes = {
  availableWidth: number.isRequired,
  intervalLength: number.isRequired,
};

export default GroupingLegend;
