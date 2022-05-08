// https://leetcode.com/problems/jump-game

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function (nums) {
  let reachable = 0;
  for (let i = 0; i <= reachable; ++i) {
    reachable = Math.max(reachable, i + nums[i]);
    if (reachable >= nums.length - 1) {
      return true;
    }
  }
  return false;
};
