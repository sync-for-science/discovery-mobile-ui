import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';

import BaseText from '../../Generic/BaseText';

const CardBodyField = ({
  dependency, label, value, bold = false,
}) => {
  const valueFontStyle = bold ? 's4sValueTextBold' : 's4sValueText';

  if (dependency) {
    return (
      <Grid>
        <Row>
          <Col size={1}>
            <BaseText>
              {label}
            </BaseText>
            </Col>
          <Col size={2}>
            <BaseText variant='title'>
              {value}
            </BaseText>
          </Col>
        </Row>
      </Grid>
    );
  }

  return null;
};

export default CardBodyField

