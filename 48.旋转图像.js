/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function (matrix) {
  /**
   * [1,2,3],
   * [4,5,6],
   * [7,8,9]
   *
   * step1: 调换对角顺序，调换的原则是下边 a 左侧下标 + b右侧下标 = a右侧下标 + b左侧下标 = length - 1，
   * 比如 [0,0] => [n-1, n-1]  [0,1] => [n-1, n-2]
   * [9,6,3],
   * [8,5,2],
   * [7,4,1]
   *
   * step2: 调换列顺序，即每一列，上下颠倒
   * 比如 321 => 123 对应的下标是 [0, n-1] => [n-1, n-1] 、 [1, n-1] => [n-2, n-1]、 [n-1, n-1] => [1, n-1]
   * 即 颠倒列，右侧下标不变（列不变），二个数字左侧下标行的位置对调，二者和为 n -1 的进行调换
   * [7,4,1],
   * [8,5,2],
   * [9,6,3]
   *
   */
  const n = matrix.length;
  // 1：对角交换
  for (let i = 0; i < n; i++) {
    // 注意对角线转换，第二轮循环j < n-j,对角线兑换 i + j的兑换
    for (let j = 0; j < n - i; j++) {
      // 二个值满足：a左侧 + b右侧下标和，a右侧下标 + b左侧下标 和为 n - 1的进行交换
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][n - 1 - i];
      matrix[n - 1 - j][n - 1 - i] = temp;
    }
  }
  // 2：列顺序颠倒
  for (let i = 0; i < n; i++) {
    // 注意调换列元素的遍历第二轮的for
    for (let j = 0; j < n / 2; j++) {
      // 满足二个左侧下标和，二个右侧下标和为 n - 1的进行交换
      const temp = matrix[j][i];
      matrix[j][i] = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = temp;
    }
  }
};
// @lc code=end
