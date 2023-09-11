// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  const map = clothes.reduce(
    (map, cloth) => map.set(cloth[1], map.get(cloth[1]) + 1 || 1),
    new Map()
  );
  return [...map.values()].reduce((pre, cur) => (pre *= cur + 1), 1) - 1;
}
