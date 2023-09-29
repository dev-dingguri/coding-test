// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const sortedArrayToBST = (nums: number[]) => {
  const divide = (l: number, r: number) => {
    const center = Math.trunc((l + r) / 2);
    const node = new TreeNode(nums[center], null, null);
    if (l <= center - 1) {
      node.left = divide(l, center - 1);
    }
    if (center + 1 <= r) {
      node.right = divide(center + 1, r);
    }
    return node;
  };
  return divide(0, nums.length - 1);
};
