/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 记录已经处理好的数组下标位置，慢指针
  let slow = 0;
  // 快指针记录当前位置
  let fast = 0;
  // [0, 1, 0, 3, 12];
  // [1, 1, 0, 3, 12]
  // [1, 3, 0, 3, 12]
  // [1, 3, 12, 3, 12];
  // [1, 3, 12, 0, 0]
  // 排序后，进行补0操作
  // while (fast < nums.length) {
  //   if (nums[fast] !== 0) {
  //     nums[slow] = nums[fast];
  //     slow++;
  //   }
  //   fast++;
  // }
  // while (slow < nums.length) {
  //   nums[slow] = 0;
  //   slow++;
  // }

  // [0, 1, 0, 3, 12];
  // [1, 0, 0, 3, 12]
  // [1, 3, 0, 0, 12]
  // [1, 3, 12, 0, 0];
  // 排序的同时把0往后移动，就不需要额外补0了
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      const temp = nums[slow];
      nums[slow] = nums[fast];
      nums[fast] = temp;
      slow++;
    }
    fast++;
  }
};
// @lc code=end
