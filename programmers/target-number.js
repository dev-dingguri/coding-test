// https://school.programmers.co.kr/learn/courses/30/lessons/43165

const dfs = (numbers, target, idx, calcResult) => {
  if (idx === numbers.length) {
    return calcResult === target ? 1 : 0;
  }
  return (
    dfs(numbers, target, idx + 1, calcResult + numbers[idx]) +
    dfs(numbers, target, idx + 1, calcResult - numbers[idx])
  );
};

const solution = (numbers, target) => {
  return dfs(numbers, target, 0, 0);
};
