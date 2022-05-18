/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let min = 0;
  let sum = 0;

  while (right < nums.length) {
    // 累加的值
    sum += nums[right];
    // 右指针一直往下
    right++;
    // 条件满足
    while (sum >= target) {
      // 计算长度的最小值
      min = min === 0 ? right - left : Math.min(min, right - left);
      // 左指针往右移动，右移动前sum减去这个移动的值
      sum -= nums[left];
      left++;
    }
  }
  return min;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = minSubArrayLen;
// @after-stub-for-debug-end
