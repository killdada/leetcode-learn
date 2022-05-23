/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// 这里的填充就跟dfs一样
// const fill = (nums, i, j, queues) => {
//   const m = nums.length;
//   const n = nums[0].length;
//   // 越界,直接return
//   if (i < 0 || j < 0 || i >= m || j >= n) return;
//   // 如果遍历遇到了水，那么return
//   if (nums[i][j] === "0") return;
//   // 入队列即可
//   queues.push(i, j);
// };

// const bfs = (nums, i, j) => {
//   // 用水覆盖
//   nums[i][j] = "0";
//   // 建立一个队列，队列记录的是i,j,当前的i,j
//   const queues = [[i, j]];
//   while (queues.length) {
//     // 先进先出,拿队列第一项，
//     const [i, j] = queues.shift();
//     // 拿队列第一项，上下左右，因此遍历，平铺,传入当前队列
//     fill(nums, i - 1, j, queues);
//     fill(nums, i + 1, j, queues);
//     fill(nums, i, j + 1, queues);
//     fill(nums, i, j - 1, queues);
//   }
// };

// const numIslands = function (nums) {
//   const m = nums.length;
//   const n = nums[0].length;
//   let count = 0;
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (nums[i][j] === "1") {
//         // 遇到岛屿数量+1，然后进行广度遍历
//         count++;
//         // 广度遍历
//         bfs(nums, i, j);
//       }
//     }
//   }
//   return count;
// };

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */

const bfs = (nums, i, j) => {
  // 用水覆盖
  nums[i][j] = "0";

  // 建立一个队列，队列记录的是i,j,当前的i,j
  const queues = [[i, j]];

  function fill(nums, i, j) {
    const m = nums.length;
    const n = nums[0].length;
    // 越界,直接return
    if (i < 0 || j < 0 || i >= m || j >= n) return;
    if (nums[i][j] === "1") {
      // 遇到了岛屿1那么入队列，（前面的一层1处理赋值为0以后，后面的岛屿开始赋值为0，先进先出）
      queues.push([i, j]);
      // 需要把该岛屿覆盖水设置为0，主要是为了避免重复计算同一个位置导致出现问题
      nums[i][j] = "0";
    }
  }

  while (queues.length) {
    // 先进先出,拿队列第一项，
    const [i, j] = queues.shift();
    // 拿队列第一项，上下左右，因此遍历，平铺,传入当前队列
    fill(nums, i - 1, j);
    fill(nums, i + 1, j);
    fill(nums, i, j + 1);
    fill(nums, i, j - 1);
  }
};

const numIslands = function (nums) {
  const m = nums.length;
  const n = nums[0].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (nums[i][j] === "1") {
        // 遇到岛屿数量+1，然后进行广度遍历
        count++;
        // 广度遍历
        bfs(nums, i, j);
      }
    }
  }
  return count;
};

// function dfs(nums, i, j) {
//   const m = nums.length;
//   const n = nums[0].length;
//   // 越界,直接return,或者遇到了水
//   if (i < 0 || j < 0 || i >= m || j >= n || nums[i][j] === "0") return;
//   // 不是水，把上下左右连贯的岛屿都用水覆盖掉 （即这是一大片岛屿组成的孤岛）
//   nums[i][j] = "0";
//   // 其他的，上下左右一直递归遍历，
//   dfs(nums, i - 1, j);
//   dfs(nums, i + 1, j);
//   dfs(nums, i, j - 1);
//   dfs(nums, i, j + 1);
// }

// var numIslands = function (nums) {
//   const m = nums.length;
//   const n = nums[0].length;
//   let count = 0;
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (nums[i][j] === "1") {
//         // 遇到岛屿数量+1，然后进行深度遍历
//         count++;
//         // 深度遍历
//         dfs(nums, i, j);
//       }
//     }
//   }
//   return count;
// };
// @lc code=end

// @after-stub-for-debug-begin
module.exports = numIslands;
// @after-stub-for-debug-end
