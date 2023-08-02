// https://leetcode.com/problems/combinations

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
  const result = [];
  const createCombinations = (start, combination) => {
    if (combination.length === k) {
      result.push([...combination]);
      return;
    }
    for (let i = start; i <= n; ++i) {
      combination.push(i);
      createCombinations(i + 1, combination);
      combination.pop();
    }
  };
  createCombinations(1, []);
  return result;
};
