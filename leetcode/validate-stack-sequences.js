// https://leetcode.com/problems/validate-stack-sequences/

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = (pushed, popped) => {
  const stack = [];
  while (popped.length) {
    const pop = popped.shift();
    while (stack.length === 0 || stack[stack.length - 1] !== pop) {
      if (pushed.length === 0) {
        return false;
      }
      const push = pushed.shift();
      stack.push(push);
    }
    stack.pop();
  }
  return stack.length === 0;
};
