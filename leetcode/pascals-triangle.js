// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const answer = [];
  for (let i = 0; i < numRows; ++i) {
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < row.length - 1; ++j) {
      row[j] = answer[i - 1][j - 1] + answer[i - 1][j];
    }
    answer.push(row);
  }
  return answer;
};
