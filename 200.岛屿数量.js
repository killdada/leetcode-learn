/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// const DDFS = (nums, i, j) => {
//   const m = nums.length;
//   const n = nums[0].length;
//   // 越界,直接return
//   if (i < 0 || j < 0 || i >= m || j >= n) return;
//   // 如果遍历遇到了水，那么return
//   if (nums[i][j] === 0) return;
//   // 不是水，把上下左右连贯的岛屿都用水覆盖掉 （即这是一大片岛屿组成的孤岛）
//   nums[i][j] = 0;
//   // 其他的，上下左右一直递归遍历，
//   DDFS(nums, i - 1, j);
//   DDFS(nums, i, j - 1);
//   DDFS(nums, i + 1, j);
//   DDFS(nums, i, j + 1);
// };

// const oo = function (nums) {
//   const m = nums.length;
//   const n = nums[0].length;
//   let count = 0;
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (nums[i][j] === 1) {
//         // 遇到岛屿数量+1，然后进行深度遍历
//         count++;
//         // 深度遍历
//         DDFS(nums, i, j);
//       }
//     }
//   }
//   return count;
// };

// 这里的填充就跟ddfs一样
// const fill = (nums, i, j, queues) => {
//   const m = nums.length;
//   const n = nums[0].length;
//   // 越界,直接return
//   if (i < 0 || j < 0 || i >= m || j >= n) return;
//   // 如果遍历遇到了水，那么return
//   if (nums[i][j] === 0) return;
//   nums[i][j] = "0";
//   // 如队列即可
//   queues.push(i, j);
// };

// const BBFS = (nums, i, j) => {
//   // 用水覆盖
//   nums[i][j] = 0;
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

// const oo = function (nums) {
//   const m = nums.length;
//   const n = nums[0].length;
//   let count = 0;
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (nums[i][j] === 1) {
//         // 遇到岛屿数量+1，然后进行深度遍历
//         count++;
//         // 深度遍历
//         BBFS(nums, i, j);
//       }
//     }
//   }
//   return count;
// };

const DDFS = (nums, i, j) => {
  const m = nums.length;
  const n = nums[0].length;
  // 越界,直接return
  if (i < 0 || j < 0 || i >= m || j >= n) return;
  // 如果遍历遇到了水，那么return
  if (nums[i][j] === 0) return;
  // 不是水，把上下左右连贯的岛屿都用水覆盖掉 （即这是一大片岛屿组成的孤岛）
  nums[i][j] = 0;
  // 其他的，上下左右一直递归遍历，
  DDFS(nums, i - 1, j);
  DDFS(nums, i, j - 1);
  DDFS(nums, i + 1, j);
  DDFS(nums, i, j + 1);
};

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (nums) {
  const m = nums.length;
  const n = nums[0].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (nums[i][j] === 1) {
        // 遇到岛屿数量+1，然后进行深度遍历
        count++;
        // 深度遍历
        DDFS(nums, i, j);
      }
    }
  }
  return count;
};
// @lc code=end
