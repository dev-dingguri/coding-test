// https://leetcode.com/problems/simplify-path/

/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
  const folders = [];
  path.split('/').forEach((element) => {
    if (element === '' || element === '.') {
      return;
    }
    if (element === '..') {
      folders.pop();
    } else {
      folders.push(element);
    }
  });
  return '/' + folders.join('/');
};
