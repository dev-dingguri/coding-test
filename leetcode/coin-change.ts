// https://leetcode.com/problems/coin-change/

const coinChange = (coins: number[], amount: number): number => {
  const memo = new Array(amount + 1);
  coins.sort((a, b) => a - b);
  memo[0] = 0;
  for (let i = 1; i <= amount; ++i) {
    memo[i] = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < coins.length; ++j) {
      if (i - coins[j] < 0) {
        break;
      }
      memo[i] = Math.min(memo[i], memo[i - coins[j]] + 1);
    }
  }
  return memo[amount] !== Number.MAX_SAFE_INTEGER ? memo[amount] : -1;
};
