/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let left = 0;
  let right = 0;
  let max = 0;
  while (right < nums.length) {
    if (nums[right] === 1) {
      // 满足，把窗口放大
      right++;
    } else {
      // 开始不等于1，不满足，right往右移动，并且left=right同意一起跑线，进行新一轮的连续1的计算
      // 计算此次，滑动窗口的长度,和历史的长度取最大值
      max = Math.max(right - left, max);
      right++;
      left = right;
    }
  }
  // 特别注意，max计算都是0的时候赋值的，存在情况，末尾的一整个窗口都是1，此时也需要对比取最大值，不然可能会丢失
  return Math.max(right - left, max);
};
// @lc code=end
