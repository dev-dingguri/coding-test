// https://school.programmers.co.kr/learn/courses/30/lessons/1844

const isMovable = (maps, y, x) => {
  return (
    maps[y] !== undefined && //
    maps[y][x] !== undefined && //
    maps[y][x] === 1
  );
};

const isGoal = (maps, y, x) => {
  return y === maps.length - 1 && x === maps[0].length - 1;
};

const solution = (maps) => {
  // y, x
  const mv = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const queue = []; // y, x
  queue.push([0, 0]);
  while (queue.length != 0) {
    const [y, x] = queue.shift();
    if (isGoal(maps, y, x)) {
      return maps[y][x];
    }
    mv.forEach(([dy, dx]) => {
      const ny = y + dy;
      const nx = x + dx;
      if (isMovable(maps, ny, nx)) {
        queue.push([ny, nx]);
        maps[ny][nx] = maps[y][x] + 1;
      }
    });
    maps[y][x] = 0;
  }
  return -1;
};
