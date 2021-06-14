import React from 'react';
import {
  arrayOf, instanceOf, shape, string,
} from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View, SectionList,
} from 'react-native';

import {
  allValidRecordsSortedByDateSelector,
  providersSelector,
  dateRangeForAllRecordsSelector,
} from '../../redux/selectors';

import { formatDate } from '../../resources/fhirReader';
import Colors from '../../constants/Colors';
import TextStyles from '../../constants/TextStyles';

const Data = ({
  dateRange,
  allRecordsSortedByDate,
  providers,
}) => {
  const { minimumDate, maximumDate } = dateRange;

  const demographics = [
    {
      title: 'Time span of available Records',
      data: [`${formatDate(minimumDate)} - ${formatDate(maximumDate)}`],
    },
    {
      title: 'Total number of records',
      data: [allRecordsSortedByDate.length],
    },
    {
      title: 'Total number of Providers',
      data: [providers.length],
    },
  ];

  // eslint-disable-next-line react/prop-types
  const Item = ({ title }) => (
    <View style={styles.row}>
      <Text style={styles.data}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.root}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>
          Data
        </Text>
      </View>
      <SectionList
        sections={demographics}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.subHeading}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <Item
            title={item}
          />
        )}
      />
    </View>
  );
};

Data.propTypes = {
  allRecordsSortedByDate: arrayOf(shape({})).isRequired,
  providers: arrayOf(shape({
    name: string.isRequired,
  })).isRequired,
  dateRange: shape({
    minimumDate: instanceOf(Date),
    maximumDate: instanceOf(Date),
  }).isRequired,
};

Data.defaultProps = {
};

const mapStateToProps = (state) => ({
  allRecordsSortedByDate: allValidRecordsSortedByDateSelector(state),
  providers: providersSelector(state),
  dateRange: dateRangeForAllRecordsSelector(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Data);

const { body1 } = TextStyles;

const styles = StyleSheet.create({
  root: {
    marginTop: 16,
    justifyContent: 'center',
  },
  headingContainer: {
    paddingHorizontal: 32,
    paddingVertical: 4,
    backgroundColor: Colors.primary,
  },
  headingText: {
    color: 'white',
    ...body1,
  },
  subHeading: {
    paddingHorizontal: 32,
    paddingTop: 10,
    color: Colors.darkgrey2,
    ...body1,
  },
  row: {
    paddingHorizontal: 32,
    backgroundColor: 'white',
  },
  data: {
    color: 'black',
    ...body1,
  },
});
