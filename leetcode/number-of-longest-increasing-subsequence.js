// https://leetcode.com/problems/number-of-longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = (nums) => {
  const counts = new Array(nums.length);
  for (let i = nums.length - 1; i >= 0; --i) {
    let length = 1;
    let count = 1;
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] < nums[j]) {
        if (counts[j].length > length - 1) {
          length = counts[j].length + 1;
          count = counts[j].count;
        } else if (counts[j].length === length - 1) {
          count += counts[j].count;
        }
      }
    }
    counts[i] = { length, count };
  }

  let max = 0;
  let countSum = 0;
  counts.forEach(({ length, count }) => {
    if (length > max) {
      max = length;
      countSum = count;
    } else if (length === max) {
      countSum += count;
    }
  });
  return countSum;
};
