/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  // 结果从数组长度开始，可以不用考虑边界，即 [1,3,5,6] 7 的情况
  let result = nums.length;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (target <= nums[mid]) {
      // 模板在左侧，结果下标，一直往左侧移动
      result = mid;
      right = mid - 1;
    } else if (target > nums[mid]) {
      left = mid + 1;
    }
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = searchInsert;
// @after-stub-for-debug-end
