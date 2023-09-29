// https://leetcode.com/problems/longest-consecutive-sequence/

const longestConsecutive = (nums: number[]) => {
  const map = nums.reduce(
    (map, num) => map.set(num, 0),
    new Map<number, number>()
  );
  let result = 0;
  map.forEach((_, num) => {
    let i = 0;
    while (map.get(num + i) === 0) {
      map.set(num + i, 1);
      ++i;
    }
    map.set(num, i + (map.get(num + i) ?? 0));
    result = Math.max(result, map.get(num) ?? 0);
  });
  return result;
};
