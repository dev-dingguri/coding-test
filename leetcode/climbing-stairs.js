// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  const memo = [0, 1, 1];
  for (let i = 3; i <= n + 1; ++i) {
    memo[Math.trunc(i % 3)] =
      memo[Math.trunc((i - 1) % 3)] + memo[Math.trunc((i - 2) % 3)];
  }
  return memo[Math.trunc((n + 1) % 3)];
};
