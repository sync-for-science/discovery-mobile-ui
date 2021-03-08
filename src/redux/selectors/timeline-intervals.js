import { endOfDay, isWithinInterval, startOfDay } from 'date-fns';

// initialize representation of all intervals, whether they have items or not:
export const createIntervalMap = (minDate, maxDate, intervalCount) => {
  const intervalMap = [];
  const startTime = minDate.getTime();
  const totalInterval = maxDate.getTime() - startTime;
  const intervalLength = totalInterval / intervalCount;
  const intervalWidth = (1 / intervalCount);
  for (let i = 0; i < intervalCount; i += 1) {
    const intervalStart = startTime + (i * intervalLength);
    intervalMap[i] = {
      key: `interval-${i}`,
      index: i,
      items: [],
      position: (i * intervalWidth + intervalWidth / 2), // a number from 0..1
      interval: {
        start: startOfDay(new Date(intervalStart)),
        end: endOfDay(new Date(intervalStart + intervalLength)), // intervals will overlap
      },
    };
  }
  return intervalMap;
};

const createIntervalIterator = (intervalMap, intervalCount) => {
  function* intervalGenerator(start = 0, end = intervalCount, step = 1) {
    for (let i = start; i < end; i += step) {
      yield intervalMap[i];
    }
  }
  return intervalGenerator();
};

export const generateNextIntervalFunc = (intervalMap, intervalCount) => {
  const intervalIterator = createIntervalIterator(intervalMap, intervalCount);
  let currentInterval = intervalIterator.next().value;
  return (date) => {
    while (!isWithinInterval(date, currentInterval.interval)) {
      const { done, value } = intervalIterator.next();
      if (done) {
        return null;
      }
      currentInterval = value;
    }
    return currentInterval;
  };
};
