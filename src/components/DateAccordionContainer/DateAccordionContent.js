import React from 'react';
import { bool, shape } from 'prop-types';
import { StyleSheet, View } from 'react-native';

import SubTypeAccordionsContainer from '../SubTypeAccordionsContainer/';

const DateAccordionContent = ({ item, fromDetailsPanel }) => (
  <View style={styles.content}>
    <SubTypeAccordionsContainer
      data={item.content}
      fromDetailsPanel={fromDetailsPanel}
    />
  </View>
);

DateAccordionContent.propTypes = {
  item: shape({}).isRequired,
  fromDetailsPanel: bool.isRequired,
};

export default DateAccordionContent;

const styles = StyleSheet.create({
  content: {
    marginLeft: 30,
  },
});
