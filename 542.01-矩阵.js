/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  // 建立一个二维数组，填充记录结果值
  // 1，1维
  const m = mat.length;
  const n = mat[0].length;

  const res = new Array(m).fill(0).map((item) => new Array(n).fill(-1));
  const queues = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 记录二维数组里面所有为0的最短距离，最短距离都是0
      if (mat[i][j] === 0) {
        res[i][j] = 0;
        // 为0的都入队列，然后以这个0遍历他的上下左右节点，, slice 0 只是个clone
        queues.push([i, j]);
      }
    }
  }

  // 建立坐标,就左右上下坐标
  const pos = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  let num = 0;

  while (queues.length) {
    let len = queues.length;
    // 对整个列进行遍历。没遍历一次，num长度+1
    num++;
    for (let i = 0; i < len; i++) {
      const [x, y] = queues.shift();
      // 当前x,y往上下左右进行遍历,即 x +- 1 y +-1,可以对应我们建立的pos坐标
      for (let [xx, yy] of pos) {
        // 真实对应上下左右后的下标
        let posX = x + xx;
        let posY = y + yy;
        // 必须在边界内，
        if (posX < 0 || posX >= m || posY < 0 || posY >= n) continue;
        // -1代表之前没有进行过赋值计算
        if (res[posX][posY] === -1) {
          res[posX][posY] = num;
          queues.push([posX, posY]);
        }
      }
    }
  }
  return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = updateMatrix;
// @after-stub-for-debug-end
