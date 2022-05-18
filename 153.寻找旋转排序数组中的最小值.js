/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    // 中间的值大于右侧的值，说明最小值在右边区域，left移动到mid+1的位置 (+1是肯定在在left右边)
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // 中间值小于右侧的值，说明最小值在左边区域，移动到mid，（mid不能-1，因为可能包括该mid位置）
      right = mid;
    }
  }
  return nums[left];
};
// @lc code=end
