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
  // function findLoop(nums, target, index, sum) {
  //   if (index === nums.length - 1) {
  //     // 说明递归完了所有的元素
  //     if (target === sum) {
  //       // 总和等于目标，计数++
  //       count++;
  //     }
  //   } else {
  //     // 递归,sum加入当前的和，当前和可以是 + 也可以是 -
  //     findLoop(nums, target, index + 1, sum  + nums[index]);
  //     findLoop(nums, target, index + 1, sum - nums[index]);
  //   }
  // }
  // // 从index 0 开始，默认和为0
  // findLoop(nums, target, 0, 0);
  // 这个跟上面差不多只是少了个变量
  function findLoop(nums, target, index) {
    if (index === nums.length - 1) {
      // 说明递归完了所有的元素,目标数 + - 等于当前数
      if (Math.abs(target) === nums[index]) {
        // 总和等于目标，计数++
        count++;
      }
    } else {
      // 递归,目标 + - 当前数
      findLoop(nums, target + nums[index], index + 1);
      findLoop(nums, target - nums[index], index + 1);
    }
  }
  // 从index 0 开始，默认和为0
  findLoop(nums, target, 0);
  return count;
};
// @lc code=end
