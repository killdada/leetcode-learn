/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  let slow = 0,
    fast = 1;
  while (fast < nums.length) {
    // 慢指针当左右不相等时才 + 1，并且把当前fast对应的值赋值给slow
    if (nums[fast] != nums[slow]) {
      // 不等 + 1
      slow++;
      // 把fast的值移动到前面
      nums[slow] = nums[fast];
    }
    // 快指针始终+1
    fast = fast + 1;
  }
  // 比如 [1,2] slow只加了一次，特别注意还需要加上末尾的1
  return slow + 1;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end
