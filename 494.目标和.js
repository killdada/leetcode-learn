/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  // 满足的个数
  let count = 0;

  function findLoop(nums, target, index) {
    if (index === nums.length - 1) {
      // 说明递归完了所有的元素,目标数 + - 等于当前数
      // 如果是0，并且target===0，那么count计数应该+2 +- = 0
      if (nums[index] === 0 && target === 0) {
        count += 2;
      } else if (target === nums[index] || target === -nums[index]) {
        // 总和等于目标，计数++
        count++;
      }
    } else {
      // 递归,目标 + - 当前数
      // 如果是0只需要递归一次 +- 都是0
      findLoop(nums, target + nums[index], index + 1);
      findLoop(nums, target - nums[index], index + 1);
    }
  }
  // 从index 0 开始，默认和为0
  findLoop(nums, target, 0);

  return count;
};
// @lc code=end
