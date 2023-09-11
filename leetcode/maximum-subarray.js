// https://leetcode.com/problems/maximum-subarray/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let max = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; --i) {
    if (nums[i + 1] > 0) {
      nums[i] = nums[i] + nums[i + 1];
    }
    max = Math.max(nums[i], max);
  }
  return max;
};
