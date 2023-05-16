// https://leetcode.com/problems/solving-questions-with-brainpower/

/**
 * @param {number[][]} questions
 * @return {number}
 */
const mostPoints = (questions) => {
  const result = new Array(questions.length).fill(0);
  for (let i = questions.length - 1; i >= 0; i--) {
    const [point, power] = questions[i];
    result[i] = Math.max(
      point + (result[i + power + 1] || 0),
      result[i + 1] || 0
    );
  }
  return result[0];
};
