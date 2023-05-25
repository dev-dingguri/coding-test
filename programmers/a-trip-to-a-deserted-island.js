// https://school.programmers.co.kr/learn/courses/30/lessons/154540

const accumulate = (maps, y, x) => {
  if (maps[y] === undefined || maps[y][x] === undefined) {
    return 0;
  }
  if (maps[y][x] === 'X' || maps[y][x] === '0') {
    return 0;
  }
  const current = maps[y][x] - '0';
  maps[y] = maps[y].substring(0, x) + '0' + maps[y].substring(x + 1);
  return (
    current +
    accumulate(maps, y + 1, x) +
    accumulate(maps, y - 1, x) +
    accumulate(maps, y, x - 1) +
    accumulate(maps, y, x + 1)
  );
};

const solution = (maps) => {
  const answer = [];
  for (let y = 0; y < maps.length; ++y) {
    for (let x = 0; x < maps[y].length; ++x) {
      if (maps[y][x] !== 'X' && maps[y][x] > '0') {
        const total = accumulate(maps, y, x);
        if (total > 0) {
          answer.push(total);
        }
      }
    }
  }
  return answer.length > 0
    ? answer.sort((a, b) => {
        return a - b;
      })
    : [-1];
};
