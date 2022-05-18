/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 二层循环粗暴解决
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = nums.length - 1; j > i; j--) {
  //     if (nums[j] + nums[i] === target) {
  //       console.log("tt", [i, j]);
  //       return [i, j];
  //     }
  //   }
  // }
  // map 或者 object解决 ，map映射记录下标, value 作为key，i作为value 少了一层，比较每一个数字只访问了一次
  let obj = {};
  // i 从1开始即可
  for (let i = 0; i <= nums.length; i++) {
    const a = nums[i];
    const b = target - a;
    // 之前记录过这个value，直接返回
    if (typeof obj[b] !== "undefined") {
      return b > a ? [i, obj[b]] : [obj[b], i];
    }
    // 记录这个map表，value => key, i => value
    obj[a] = i;
  }
};
// @lc code=end
