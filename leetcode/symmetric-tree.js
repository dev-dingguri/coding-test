// https://leetcode.com/problems/symmetric-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
{
  // recursive
  /**
   * @param {TreeNode} left
   * @param {TreeNode} rhs
   * @return {boolean}
   */
  const recursiveSymmetryChecker = (left, right) => {
    if (left === null || right === null) {
      return left === null && right === null;
    }
    return (
      left.val === right.val &&
      recursiveSymmetryChecker(left.left, right.right) &&
      recursiveSymmetryChecker(left.right, right.left)
    );
  };

  /**
   * @param {TreeNode} root
   * @return {boolean}
   */
  const isSymmetric = (root) => {
    return recursiveSymmetryChecker(root.left, root.right);
  };
}

{
  // non-recursive
  /**
   * @param {TreeNode} root
   * @return {boolean}
   */
  const isSymmetric = (root) => {
    const leftQueue = [root.left];
    const rightQueue = [root.right];
    while (leftQueue.length && rightQueue.length) {
      const left = leftQueue.shift();
      const right = rightQueue.shift();
      if (left !== null && right !== null) {
        if (left.val !== right.val) {
          return false;
        }
        leftQueue.push(left.left, left.right);
        rightQueue.push(right.right, right.left);
      } else if (left !== null || right !== null) {
        return false;
      }
    }
    return leftQueue.length === 0 && rightQueue.length === 0;
  };
}
