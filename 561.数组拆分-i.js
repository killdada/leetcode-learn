/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let max = 0;
  // 遍历， 相邻的二个放一起计算最小值， i = i + 2, i < nums.length - 1
  for (let i = 0; i < nums.length - 1; i += 2) {
    max += Math.min(nums[i], nums[i + 1]);
  }
  return max;
};
// @lc code=end
