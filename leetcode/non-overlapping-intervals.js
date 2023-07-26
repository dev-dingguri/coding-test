// https://leetcode.com/problems/non-overlapping-intervals/

// 👍best
/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = (intervals) => {
  intervals.sort(([s1, e1], [s2, e2]) => e1 - e2);
  let prevEnd = intervals[0][1];
  let count = 1;
  for (let i = 1; i < intervals.length; ++i) {
    const [s, e] = intervals[i];
    if (s >= prevEnd) {
      prevEnd = e;
      ++count;
    }
  }
  return intervals.length - count;
};

// 🤔 so so
/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = (intervals) => {
  intervals.sort(([s1, e1], [s2, e2]) => (s1 !== s2 ? s1 - s2 : e1 - e2));
  let prevEnd = intervals[0][1];
  let count = 0;
  for (let i = 1; i < intervals.length; ++i) {
    const [s, e] = intervals[i];
    if (s < prevEnd) {
      if (e < prevEnd) {
        prevEnd = e;
      }
      ++count;
    } else {
      prevEnd = e;
    }
  }
  return count;
};
