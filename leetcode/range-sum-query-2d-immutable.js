// https://leetcode.com/problems/range-sum-query-2d-immutable

/**
 * @param {number[][]} matrix
 */
let NumMatrix = function (matrix) {
  // memo[y + 1][x + 1] = sumRegion(0, 0, y, x);
  this.memo = Array.from({ length: matrix.length + 1 }, () =>
    Array.from({ length: matrix[0].length + 1 }, () => 0)
  );
  matrix.forEach((row, y) => {
    row.forEach((val, x) => {
      this.memo[y + 1][x + 1] =
        this.memo[y][x + 1] + this.memo[y + 1][x] - this.memo[y][x] + val;
    });
  });
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.memo[row2 + 1][col2 + 1] -
    this.memo[row1][col2 + 1] -
    this.memo[row2 + 1][col1] +
    this.memo[row1][col1]
  );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
