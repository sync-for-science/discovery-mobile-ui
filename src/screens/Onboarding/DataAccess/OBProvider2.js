import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import TextStyles from '../../../constants/TextStyles';
import Colors from '../../../constants/Colors';
import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';

// wireframe page 10
const OBProvider2 = () => {
  const {
    alignCenter, mb5,
  } = TextStyles;
  return (
    <OBSectionBodyTemplate title="Data Access" subTitle="Success" showSuccess>
      <View style={styles.flashContainer}>
        <Text style={[alignCenter, styles.body]}>
          You have successfully connected to your Provider and Discovery
          will be able to pull your data.
        </Text>
      </View>
      <Text style={[alignCenter, mb5, styles.body]}>
        If you wish to change the Provider you are accessing data from,
        you can always do that from your Profile in the app.
      </Text>
    </OBSectionBodyTemplate>
  );
};

export default OBProvider2;

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 24,
  },
  flashContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 16,
    marginBottom: 20,
    padding: 10,
  },
});
