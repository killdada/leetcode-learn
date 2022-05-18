/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// / 完全 平方数
// 动态规划
// 动态规划的原则，
// 比如 n 拆分一个平方根以后 n - i* i = n1
// 拆分后的n1按题目要求也是平方数最小，因此可以一直缩小区间
// 状态转移方程，d(1)... d(n) 都是代表解的最小个数

//             d(11-1) + 1
//             d(11-4) + 1
// d1 d2 ...   d(11-9) + 1  d11
//  c i代表n，j从1开始++必须小于等于i  d(11-4) + 1的次数(即4) = d(11)， 需要从上面找最小值
// 1 <= i <= n
// j = 1 j *j <= i

// const ss = (n) => {
//   // 初始化一个n为长度，全部填充为0的数组
//   let d = [...new Array(n)].fill(0);
//   for (let i = 1; i <= n; i++) {
//     // 最差的可能就是 d(n) 等于n个1相加 ，即 d(1) = i d(2) = 2 d(n) = n
//     d[i] = i;
//     for (let j = 1; j * j <= i; j++) {
//       d[i] = Math.min(d[i], d[i - j * j] + 1);
//     }
//   }
//   return d[n];
// };

// 动态规划不好理解，那么转成bfs

// n = 13 第一层

// n - 1= 12; n - 4 = 9; n - 9 = 4

// n - 1 = 11,n-4=8,n-9=3; n - 1 = 8, n - 4 = 5, n- 9 = 0(满足); n - 1 = 3，n -4 = 0 (也满足，前面那个满足就退出2了)

// 17
// n - 1 = 16; n - 4 = 13
// 9 + 4 + 4;

// const ss = (n) => {
//   const queues = [n];
//   let visited = new Set();
//   let count = 0;
//   while (queues.length) {
//     count++;
//     for (let j = 0; j <= queues.length; j++) {
//       const queue = queues.shift();
//       // 下一层的所有的可能
//       for (let i = 1; i * i <= queue; i++) {
//         const next = queue - i * i;
//         if (next === 0) {
//           // 找到满足的了
//           return count;
//         }
//         if (!visited.has(next)) {
//           // 不满足并且没有遍历过
//           visited.add(next);
//           queues.push(next);
//         }
//       }
//     }
//   }
// };

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 判断是否为完全平方数
  const isPerfectSquare = (x) => {
    const y = Math.floor(Math.sqrt(x));
    return y * y == x;
  };

  // 判断是否能表示为 4^k*(8m+7)
  const checkAnswer4 = (x) => {
    while (x % 4 == 0) {
      x /= 4;
    }
    return x % 8 == 7;
  };
  if (isPerfectSquare(n)) {
    return 1;
  }
  if (checkAnswer4(n)) {
    return 4;
  }
  for (let i = 1; i * i <= n; i++) {
    let j = n - i * i;
    if (isPerfectSquare(j)) {
      return 2;
    }
  }
  return 3;
};

// const queues = [n];
// let visited = new Set();
// let count = 0;
// while (queues.length) {
//   count++;
//   for (let i = 0, len = queues.length; i < len; i++) {
//     const queue = queues.shift();
//     // 下一层的所有的可能
//     for (let j = 1; j * j <= queue; j++) {
//       const next = queue - j * j;
//       if (next === 0) {
//         // 找到满足的了
//         return count;
//       }
//       if (!visited.has(next)) {
//         // 不满足并且没有遍历过
//         visited.add(next);
//         queues.push(next);
//       }
//     }
//   }
// }
// return -1;
// 初始化一个n为长度，全部填充为0的数组
// let d = [...new Array(n)].fill(0);
// for (let i = 1; i <= n; i++) {
//   // 最差的可能就是 d(n) 等于n个1相加 ，即 d(1) = i d(2) = 2 d(n) = n
//   d[i] = i;
//   for (let j = 1; j * j <= i; j++) {
//     d[i] = Math.min(d[i], d[i - j * j] + 1);
//   }
// }
// return d[n];
// };
// @lc code=end
