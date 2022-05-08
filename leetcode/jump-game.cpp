// https://leetcode.com/problems/jump-game

class Solution {
public:
  bool canJump(vector<int> &nums) {
    int reachable = 0;
    for (int i = 0; i <= reachable; ++i) {
      reachable = std::max(reachable, i + nums[i]);
      if (reachable >= nums.size() - 1) {
        return true;
      }
    }
    return false;
  }
};