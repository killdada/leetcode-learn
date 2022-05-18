/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  // 递推,上一个的值
  const row = getRow(rowIndex - 1);
  // 结构
  //   1
  //  1 2 1
  // 1 3 3 1
  // 1 4 6 4 1
  const result = new Array(rowIndex + 1).fill(1).map((_, index) => {
    if (index === 0 || index === rowIndex) return 1;
    // // 中间的s数字等于上一次值的和
    return row[index] + row[index - 1];
  });
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = getRow;
// @after-stub-for-debug-end
