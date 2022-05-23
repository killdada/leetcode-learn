/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  // 行
  const m = image.length;
  // 列
  const n = image[0].length;
  // 初始对标颜色，从这个对标颜色上下左右遍历，如果颜色等于初始颜色，那么都用 newColor进行覆盖
  const originColor = image[sr][sc];
  // 队列，加入起始位置
  const origin = [sr, sc];
  const queues = [origin];
  const visited = new Set();

  function fillColor(array) {
    const [i, j] = array;
    // 边界点，或者是当前颜色和对标颜色不等，直接返回
    if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] !== originColor)
      return;

    const key = JSON.stringify(array);

    // 已经遍历过返回
    if (visited.has(key)) return;
    // 添加遍历
    visited.add(key);
    // 填充颜色
    image[i][j] = newColor;
    // 其他往上下左右对标
    queues.push([i + 1, j]);
    queues.push([i - 1, j]);
    queues.push([i, j + 1]);
    queues.push([i, j - 1]);
  }

  while (queues.length) {
    const queue = queues.shift();
    fillColor(queue);
  }
  return image;
};
// @lc code=end
