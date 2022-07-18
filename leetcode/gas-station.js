// https://leetcode.com/problems/gas-station

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
  let s = gas.length;
  let e = 0;
  let tank = 0;
  for (let i = 0; i < gas.length; ++i) {
    if (tank + gas[e] - cost[e] >= 0) {
      tank += gas[e] - cost[e];
      ++e;
    } else {
      --s;
      tank += gas[s] - cost[s];
    }
  }
  return tank >= 0 ? s % gas.length : -1;
};
