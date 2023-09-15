// https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  let found = -1;
  for (let i = 0; i < s.length; ++i) {
    found = t.indexOf(s[i], found + 1);
    if (found < 0) {
      return false;
    }
  }
  return true;
};
