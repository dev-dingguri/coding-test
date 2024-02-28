// https://leetcode.com/problems/divide-two-integers/

const divide = (dividend: number, divisor: number) => {
  return Math.max(
    Math.min(Math.trunc(dividend / divisor), 2147483647),
    -2147483648
  );
};
