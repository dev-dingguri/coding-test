// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let answer = 0;
  let max = 0;
  let min = 10000;
  for (let i = prices.length - 1; i >= 0; --i) {
    if (prices[i] > max) {
      max = prices[i];
      min = max;
    } else if (prices[i] < min) {
      min = prices[i];
      answer = Math.max(answer, max - min);
    }
  }
  return answer;
};
