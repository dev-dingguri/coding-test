// https://leetcode.com/problems/sort-array-by-parity

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let sortArrayByParity = (nums) => {
  let i = 0, j = nums.length - 1;
  while(i < j) {
    while(i < j && nums[i] % 2 == 0) ++i;
    while(i < j && nums[j] % 2 == 1) --j;
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return nums;
};
