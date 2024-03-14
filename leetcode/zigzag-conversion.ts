// https://leetcode.com/problems/zigzag-conversion/

const convert = (s: string, numRows: number): string => {
  const rows = new Array<string>(numRows).fill('');
  let i = 0;
  while (i < s.length) {
    for (let j = 0; j < numRows; ++j) {
      if (i >= s.length) {
        break;
      }
      rows[j] += s[i];
      ++i;
    }
    for (let j = numRows - 2; j > 0; --j) {
      if (i >= s.length) {
        break;
      }
      rows[j] += s[i];
      ++i;
    }
  }
  return rows.join('');
};
