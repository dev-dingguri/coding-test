// https://leetcode.com/problems/jump-game-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
  let curr = 0;
  let limit = 0;
  let answer = 0;
  for (let i = 0; curr < nums.length - 1; ++i) {
    limit = Math.max(limit, nums[i] + i);
    if (i === curr) {
      ++answer;
      curr = limit;
    }
  }
  return answer;
};
