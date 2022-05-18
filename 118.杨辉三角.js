/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows == 1) return [[1]];
  const result = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      result.push([1]);
    } else {
      const temp = [];
      for (let j = 0; j <= i; j++) {
        // 首尾都为1，中间的等于上一行的 j-1 + j 这二个数的和
        const prevLine = result[i - 1];
        temp.push(j === 0 || j === i ? 1 : prevLine[j] + prevLine[j - 1]);
      }
      result.push(temp);
    }
  }
  return result;
};
// @lc code=end
