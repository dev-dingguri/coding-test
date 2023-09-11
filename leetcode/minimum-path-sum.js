// https://leetcode.com/problems/minimum-path-sum/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  for (let y = 0; y < m; ++y) {
    for (let x = 0; x < n; ++x) {
      if (y === 0) {
        grid[y][x] += grid[y][x - 1] ?? 0;
      } else if (x === 0) {
        grid[y][x] += grid[y - 1][x];
      } else {
        grid[y][x] += Math.min(grid[y][x - 1], grid[y - 1][x]);
      }
    }
  }
  return grid[m - 1][n - 1];
};
