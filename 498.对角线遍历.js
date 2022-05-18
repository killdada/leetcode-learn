/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
let findDiagonalOrder = function (mat) {
  if (mat.length === 0) return [];
  // 看他的图划线，找规律
  // 1：行 + 列为偶数向上遍历 （注意临界点）
  // 2：行 + 列为奇数向下遍历（注意临界点）
  const m = mat.length;
  const n = mat[0].length;
  // 创建一个m*n的结果数组，然后遍历一一把值放进来
  let result = new Array(m * n);
  let i = 0;
  let j = 0;
  // 一共需要遍历结果数组的长度，然后i,j根据 1，2分析的移动
  for (let k = 0; k < result.length; k++) {
    // 当前位置推入数组
    result[k] = mat[i][j];
    if ((i + j) % 2 === 0) {
      // 偶数向上遍历
      if (j === n - 1) {
        // 走到最后一列，往下移动一行
        i++;
      } else if (i === 0) {
        // 走到第一行，列++ 向右移动
        j++;
      } else {
        // 其他斜向上，行 - 1，列 + 1
        i--;
        j++;
      }
    } else {
      // 奇数向下移动
      if (i === m - 1) {
        // 移动到了左下角，往右移动
        j++;
      } else if (j === 0) {
        // 移动到了左边，往下移动
        i++;
      } else {
        // 斜向下，行 + 1， 列 - 1
        j--;
        i++;
      }
    }
  }
  return result;
};

// @lc code=end
