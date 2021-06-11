import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { Accordion } from 'native-base';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import {
  arrayOf, bool, string, shape, number,
} from 'prop-types';

import { savedRecordsByRecordDateSelector } from '../../redux/selectors';
import Colors from '../../constants/Colors';
import SubTypeAccordionsContainer from '../SubTypeAccordionsContainer';

const DateAccordion = ({
  date, types, fromDetailsPanel, expanded, maxRecordCount,
}) => {
  const dataArray = [{ title: date, content: types }];

  const renderHeader = (item, isExpanded) => {
    const recordCountOnDate = item.content.length;
    const barFlexWidth = (recordCountOnDate / maxRecordCount).toFixed(2) * 100;
    const emptyFlexWidth = 100 - barFlexWidth;
    const chevronIcon = isExpanded
      ? <Ionicons name="chevron-up" size={16} color={Colors.accordionChevronIcon} />
      : <Ionicons name="chevron-down" size={16} color={Colors.accordionChevronIcon} />;
    return (
      <View style={styles.header}>
        <View style={styles.leftSideHeader}>
          {chevronIcon}
          <Text style={styles.headerText}>
            {item.title}
          </Text>
        </View>
        <View style={styles.rightSideHeader}>
          <View style={[styles.barWidth, { flex: barFlexWidth }]} />
          <View style={{ flex: emptyFlexWidth }}>
            <Text>{recordCountOnDate}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Accordion
      style={styles.accordion}
      dataArray={dataArray}
      expanded={expanded}
      renderHeader={renderHeader}
      renderContent={(item) => (
        <SubTypeAccordionsContainer
          data={item.content}
          fromDetailsPanel={fromDetailsPanel}
          fromDateAccordion
        />
      )}
    />
  );
};

DateAccordion.propTypes = {
  date: string.isRequired,
  types: arrayOf(shape({}).isRequired).isRequired,
  fromDetailsPanel: bool.isRequired,
  expanded: arrayOf(number),
  maxRecordCount: number.isRequired,
};

DateAccordion.defaultProps = {
  expanded: [],
};

const DateAccordionsContainer = ({ savedRecordsByRecordDate, fromDetailsPanel }) => {
  const maxRecordCount = savedRecordsByRecordDate.reduce((acc, { types }) => (
    acc < types.length ? types.length : acc
  ), 0);
  return (
    <View>
      {
      savedRecordsByRecordDate.map(({ date, types }) => (
        <DateAccordion
          key={date}
          date={date}
          types={types}
          maxRecordCount={maxRecordCount}
          fromDetailsPanel={fromDetailsPanel}
        />
      ))
    }
    </View>
  );
};

DateAccordionsContainer.propTypes = {
  savedRecordsByRecordDate: arrayOf(shape({}).isRequired).isRequired,
  fromDetailsPanel: bool.isRequired,
};

const mapStateToProps = (state) => ({
  savedRecordsByRecordDate: savedRecordsByRecordDateSelector(state),
});

export default connect(mapStateToProps, null)(DateAccordionsContainer);

const styles = StyleSheet.create({
  accordion: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 5,
  },
  barWidth: {
    backgroundColor: Colors.collectionYellow,
    height: 6,
    marginRight: 8,
  },
  leftSideHeader: {
    flex: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSideHeader: {
    flex: 65,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
  },
});
