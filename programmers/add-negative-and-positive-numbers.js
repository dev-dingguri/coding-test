// https://school.programmers.co.kr/learn/courses/30/lessons/76501

const solution = (absolutes, signs) => {
  return absolutes.reduce((sum, val, i) => sum + val * (signs[i] ? 1 : -1), 0);
};
