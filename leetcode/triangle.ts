// https://leetcode.com/problems/triangle/

const minimumTotal = (triangle: number[][]): number => {
  const MAX_INT = Number.MAX_SAFE_INTEGER;
  for (let y = 1; y < triangle.length; ++y) {
    for (let x = 0; x < triangle[y].length; ++x) {
      triangle[y][x] += Math.min(
        triangle[y - 1][x - 1] ?? MAX_INT,
        triangle[y - 1][x] ?? MAX_INT
      );
    }
  }
  return Math.min(...triangle[triangle.length - 1]);
};
