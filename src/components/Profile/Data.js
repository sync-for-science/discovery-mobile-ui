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
      <View style={styles.heading}>
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

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  heading: {
    padding: 5,
    backgroundColor: Colors.secondary,
  },
  headingText: {
    color: 'white',
    fontSize: 16,
    padding: 5,
  },
  subHeading: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: 'white',
    fontSize: 14,
    color: 'black',
  },
  row: {
    padding: 10,
    backgroundColor: 'white',
  },
  data: {
    color: Colors.darkgrey,
  },
});
