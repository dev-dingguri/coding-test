// https://leetcode.com/problems/gas-station

class Solution {
   public:
    int canCompleteCircuit(vector<int> &gas, vector<int> &cost) {
        int s = gas.size();
        int e = 0;
        int tank = 0;
        for (int i = 0; i < gas.size(); ++i) {
            if (tank + gas[e] - cost[e] >= 0) {
                tank += gas[e] - cost[e];
                ++e;
            } else {
                --s;
                tank += gas[s] - cost[s];
            }
        }
        return tank >= 0 ? s % gas.size() : -1;
    }
};