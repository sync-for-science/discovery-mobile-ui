import React from 'react';
import { number } from 'prop-types';
import { Text as SvgText } from 'react-native-svg';

import Variance from './Variance';
import * as config from './config';

const VarianceLegend = ({
  maxCount, maxCount1SD, maxCount2SD, recordCount2SDplus,
}) => {
  if (maxCount > maxCount1SD) {
    const between1and2SDlabel = `between ${maxCount1SD} and ${maxCount2SD}`;
    let above2SD = null;

    if (recordCount2SDplus) {
      const above2label = `above ${maxCount2SD}`;
      above2SD = (
        <>
          <Variance
            x={120}
            y={-16}
            zScore={2}
          />
          <SvgText
            x={126}
            y={-16}
            fill={config.LABEL_COLOR}
            stroke="none"
            fontSize={config.LABEL_FONT_SIZE}
            textAnchor="start"
          >
            {above2label}
          </SvgText>
        </>
      );
    }

    return (
      <>
        <Variance
          x={0}
          y={-16}
          zScore={1}
        />
        <SvgText
          x={6}
          y={-16}
          fill={config.LABEL_COLOR}
          stroke="none"
          fontSize={config.LABEL_FONT_SIZE}
          textAnchor="start"
        >
          {between1and2SDlabel}
        </SvgText>
        {above2SD}
      </>
    );
  }
  return null;
};

VarianceLegend.propTypes = {
  maxCount: number.isRequired,
  maxCount1SD: number.isRequired,
  maxCount2SD: number.isRequired,
  recordCount2SDplus: number.isRequired,
};

export default VarianceLegend;
