/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let setZeroes = function (matrix) {
  // 思路1：使用额外变量和存储空间，第一次遍历记录所有的0的位置，第二次遍历原始数组如果位置有重叠设置为0
  // 思路2：不用额外存储空间，
  // 1：第一行第一列为基准，记录0的位置，
  // 2：遍历数组，根据1记录的位置设置对应的位置为0
  // 3：计算第一行第一列的基准全为0的情况 （即第一步记录的是否全为0）

  /**
   * 如
   * [1,1,1],
   * [1,0,1],
   * [1,1,1],
   * step1: 第一行第一列本身没有0，firstRow = false firstCol = false
   * 中间发现一个0 下标 [1, 1] 把这个下标对应记录更新到原数据的第一行第一列 [0,1] [1, 0] 0
   * [1,0,1],
   * [0,0,1],
   * [1,1,1],
   * step2：从第二行第二列开始遍历（不要从第一行第一列开始，这个是基准），用之前记录的第一行第一列的位置为参考，计算其他位置是否为0
   * [1,0,1],
   * [0,0,0],
   * [1,0,1],
   * step3: 第一行第二列没有0，不需要计算
   *
   * 例子2:
   * [1,1,1],
   * [0,1,1],
   * [1,1,1],
   * step1: 第一列有0，行没有0 firstCol = true，firstRow = false
   * [0,1,1],
   * [0,1,1],
   * [1,1,1],
   * step2:
   * [0,1,1],
   * [0,0,0],
   * [1,1,1],
   * step3: firstCol = true
   * [0,1,1],
   * [0,0,0],
   * [0,1,1],
   */

  if (matrix.length === 0) return matrix;

  const m = matrix.length;
  const n = matrix[0].length;
  // 时间复杂度 O(m * n), 空间复杂度 O(1)
  // 第一行是否应该全部为0;
  let firstRow = false;
  // 第一列是否应该全部为0
  let firstCol = false;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) {
          firstRow = true;
        }
        if (j === 0) {
          firstCol = true;
        }
        // 把这个为0的位置记录到基准值，第一行第一列，往第一行、第一列贴,也就是思路1的临时变成对照表
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }
  // 基于第一行第一列的基准值，开始遍历设置其他位置是否为0
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 之前记录的基准位置，只要存在一个0，那么该值就应该设置为0
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // 处理第一行第一列
  if (firstRow) {
    // 以列长度遍历
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }

  if (firstCol) {
    // 以m为遍历，行长度
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
};
// @lc code=end
