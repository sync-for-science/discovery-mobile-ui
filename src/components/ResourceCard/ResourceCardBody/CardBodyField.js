import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';

import BaseText from '../../Generic/BaseText';

const CardBodyField = ({
  dependency, label, value, bold = false,
}) => {
  const variantStyle = bold ? 'title' : '';

  if (dependency) {
    return (
      <Grid style={styles.root}>
        <Row>
          <Col size={1}>
            <BaseText>
              {label}
            </BaseText>
            </Col>
          <Col size={2}>
            <BaseText variant={variantStyle}>
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

const styles = StyleSheet.create({
  root: {
    marginVertical: 5
  }
})

