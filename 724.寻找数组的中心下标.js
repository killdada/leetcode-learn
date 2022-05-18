/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // 输入的不是数组直接返回-1
  if (Object.prototype.toString.call(nums) !== "[object Array]") return -1;
  const sum = nums.reduce((prev, cur) => prev + cur, 0);
  let reult = -1;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    // 如果总和 - 当前的值，等于二个累加值，说明左右相等，是中心下标，如果不等。那么把值累加进去
    if ((sum - nums[i]) / 2 === count) {
      reult = i;
      break;
    } else {
      count += nums[i];
    }
  }
  return reult;
};
// @lc code=end
