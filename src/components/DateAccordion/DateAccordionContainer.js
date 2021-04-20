import React from 'react';
import { View } from 'react-native';
import { bool, shape } from 'prop-types';

import DateAccordion from './DateAccordion';

const DateAccordionContainer = ({ data, isDescending, fromDetailsPanel }) => {
  const descendingSort = (t1, t2) => (new Date(t1) > new Date(t2) ? -1 : 1);
  const ascendingSort = (t1, t2) => (new Date(t1) < new Date(t2) ? -1 : 1);
  const sortByLabelDate = ([t1], [t2]) => (isDescending
    ? descendingSort(t1, t2) : ascendingSort(t1, t2));
  const sortByResourceDate = ([, t1], [, t2]) => (isDescending
    ? descendingSort(t1, t2) : ascendingSort(t1, t2));

  return (
    <View>
      { Object.entries(data)
        .sort(sortByLabelDate)
        .map(([date, resourceIds]) => {
          const sortedResourceIds = Object.entries(resourceIds)
            .sort(sortByResourceDate)
            .reduce((acc, [id]) => { acc.push(id); return acc; }, []);
          return (
            <DateAccordion
              key={date}
              label={date}
              resourceIds={sortedResourceIds}
              fromDetailsPanel={fromDetailsPanel}
            />
          );
        })}
    </View>
  );
};

DateAccordionContainer.propTypes = {
  data: shape({}).isRequired,
  isDescending: bool.isRequired,
  fromDetailsPanel: bool.isRequired,
};

export default DateAccordionContainer;
