/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  // [3, 2, 2, 3]， 3
  // [2, 2, 2, 3] i = 1 j = 2
  // [2, 2, 2, 3] i = 2, j = 3
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      // 计数+1，不等于目标的数加1
      i++;
    }
  }
  // 返回最后不等于目标的长度
  return i;
};
// @lc code=end
