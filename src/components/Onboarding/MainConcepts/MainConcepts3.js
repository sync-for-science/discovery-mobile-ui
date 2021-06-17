import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';
import NotesExample from '../../../../assets/images/screenshots/screenshot-notes.svg';

const OBMainConcepts3 = () => (
  <OBSectionBodyTemplate title="Main Concepts" subTitle="Notes">
    <Text style={styles.body}>
      You can add Notes to an entire Collection or individual Records.
    </Text>
    <Text style={styles.body}>
      Add Notes to capture insights about a Collection or enrich what
      is already captured in your individual Records, log personal information
      or journal daily concerns, and add explanations, clarifications or reminders.
    </Text>
    <NotesExample height={hp('30%')} width={hp('100%')} />
  </OBSectionBodyTemplate>
);

export default OBMainConcepts3;

const { body3 } = TextStyles;
const { rd5 } = ResponsiveDimensions;
const styles = StyleSheet.create({
  body: {
    ...body3,
    textAlign: 'center',
    marginBottom: rd5,
  },
});
