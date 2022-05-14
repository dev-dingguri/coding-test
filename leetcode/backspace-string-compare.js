// https://leetcode.com/problems/backspace-string-compare

let backspace = (s, i) => {
  let cnt = 0;
  while (i >= 0 && (s[i] === '#' || cnt > 0)) {
    cnt = s[i] === '#' ? cnt + 1 : cnt - 1;
    --i;
  }
  return i;
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let backspaceCompare = (s, t) => {
  for (let i = s.length - 1, j = t.length - 1; i >= 0 || j >= 0; --i, --j) {
    i = backspace(s, i);
    j = backspace(t, j);
    if (i >= 0 && j >= 0 && s[i] !== t[j]) {
      return false;
    }
    if (i >= 0 !== j >= 0) {
      return false;
    }
  }
  return true;
};
