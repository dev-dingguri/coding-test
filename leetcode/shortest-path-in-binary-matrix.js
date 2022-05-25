// https://leetcode.com/problems/shortest-path-in-binary-matrix

/**
 * @param {number[][]} grid
 * @return {number}
 */
let shortestPathBinaryMatrix = (grid) => {
  const n = grid.length;
  if(grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
    return -1;
  }
  let visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Number.MAX_SAFE_INTEGER)
  );
  let queue = []; // y, x
  const mv = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  visited[0][0] = 1;
  queue.push([0, 0]);
  while(queue.length) {
    const [cy, cx] = queue.shift();
    mv.forEach(([my, mx]) => {
      const y = cy + my;
      const x = cx + mx;
      if(grid[y] !== undefined &&
         grid[y][x] !== undefined &&
         grid[y][x] === 0) {
        if(visited[y][x] > visited[cy][cx] + 1) {
          visited[y][x] = visited[cy][cx] + 1;
          queue.push([y, x]);
        }
      }
    });
  }
  const end = visited[n - 1][n - 1];
  return end === Number.MAX_SAFE_INTEGER ? -1 : end;
};
