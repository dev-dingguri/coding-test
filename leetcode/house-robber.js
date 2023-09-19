// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  for (let i = 2; i < nums.length; ++i) {
    nums[i] += Math.max(nums[i - 2], nums[i - 3] ?? 0);
  }
  return Math.max(nums[nums.length - 1], nums[nums.length - 2] ?? 0);
};
