/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// BFS
// 想象成一棵树
//  "0000"; // 第一层
// 拨动转盘，可以把某个数字向上向下拨动，有以下可能
// "1000" "9000" "0100" "0900" "0010" "0090"  "0009" "0001" // 第二层
// 同样的思路往下拨动，第二层每一个可能都开始生长开支，，一种往下走

// 其中注意二个点，
// 1:分散开支过程中，可能部分可能存在重叠，重叠过的不要额外再处理
// 2: 题目加了限制，对于deadends里面的数组就是死锁，遇到死锁提前返回即可

// 如果所有可能的树分支里面有满足的密码，说明找到了，返回当前树的层级，找不到的话返回 -1

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  // // 不需要拨动直接开锁
  if (target === "0000") return 0;

  // deadends里面有'0000' 那么直接挂掉,因为我们就是从这个开始
  if (deadends.includes("0000")) return -1;

  const history = new Set();
  let queues = [];
  queues.push("0000");
  history.add("0000");

  let count = 0;

  function wrapper(str, type = "upper") {
    const result = [];
    for (let i = 0; i < str.length; i++) {
      let array = str.split("");
      let item = Number(str[i]);
      // 向上转动
      if (type === "upper") {
        if (item === 9) {
          item = 0;
        } else {
          item++;
        }
      } else {
        // 向下转动
        if (item === 0) {
          item = 9;
        } else {
          item--;
        }
      }
      // 转动后的数字位置更改
      array.splice(i, 1, item);
      const data = array.join("");
      // 对应再queues和set里面的不要添加进去,即死锁还有转动过的数据直接跳过
      if (history.has(data) || deadends.includes(data)) continue;
      result.push(data);
      history.add(data);
    }
    return result;
  }

  // 队列长度不为空
  while (queues.length) {
    count++;
    // 上一层树枝的长度
    let length = queues.length;
    // let nextFloor = [];

    for (let i = 0; i < length; i++) {
      const currentVal = queues.shift();
      // 基于某个值 遍历得到的该值扩散的下一层该值产生的子树的所有的可能情况
      let currentValFloor = [].concat(
        wrapper(currentVal, "upper"),
        wrapper(currentVal, "down")
      );

      // 拨动一次以后下一层的可能里面有没有解锁的
      const hasTarget = currentValFloor.some((item) => item === target);

      // 哈哈我解锁了，返回需要拨动的次数
      if (hasTarget) return count;

      // 这里直接推入队列，并不会影响个数的增加，因为for循环还没结束，如果不好理解可以考虑使用nextFloor的形式
      queues = queues.concat(currentValFloor);

      // // 没解锁成功，哎，把基于这个值产生的分叉树枝推送下一层数组
      // nextFloor = nextFloor.concat(currentValFloor);
    }
    // // 没解锁成功，下一层的全部推进队列
    // queues = nextFloor;
  }
  return -1;

  // 双向bfs失败，躺平不挣扎了，88
  // 因为知道目标位置，可以考虑双向bfs，有交集的时候说明可以找到，并返回次数
  // 不需要拨动直接开锁
  // if (target === "0000") return 0;
  // let queues1 = ["0000"];
  // let queues2 = [target];
  // const map1 = new Map();
  // const map2 = new Map();
  // // 记录节点当前层数, key 节点 value 层数
  // map1.set("0000", 0);
  // map2.set(target, 0);
  // function wrapper(str, type = "upper") {
  //   const result = [];
  //   for (let i = 0; i < str.length; i++) {
  //     let array = str.split("");
  //     let item = Number(str[i]);
  //     // 向上转动
  //     if (type === "upper") {
  //       if (item === 9) {
  //         item = 0;
  //       } else {
  //         item++;
  //       }
  //     } else {
  //       // 向下转动
  //       if (item === 0) {
  //         item = 9;
  //       } else {
  //         item--;
  //       }
  //     }
  //     // 转动后的数字位置更改
  //     array.splice(i, 1, item);
  //     const data = array.join("");
  //     result.push(data);
  //   }
  //   return result;
  // }
  // function updateQueue(queue, cur, other) {
  //   for (let i = 0; i < queue.length; i++) {
  //     const current = queue.shift();
  //     // 当前遍历节点记录需要的层数
  //     const step = cur.get(current);
  //     const nums = [].concat(
  //       wrapper(current, "upper"),
  //       wrapper(current, "down")
  //     );
  //     for (let j = 0; j < nums.length; j++) {
  //       // 死锁或者已经遍历
  //       if (cur.has(nums[j]) || deadends.includes(nums[j])) {
  //         continue;
  //       }
  //       // 另外一个队列里面已经遍历过，说明有集合，二个层数相加再+1就是最后的层
  //       if (other.has(nums[j])) {
  //         return other.get(nums[j]) + step + 1;
  //       } else {
  //         cur.set(nums[j], step + 1);
  //         queue.push(nums[j]);
  //       }
  //     }
  //   }
  //   return -1;
  // }
  // while (queues1.length && queues2.length) {
  //   let t = -1;
  //   // 拿队列长度最低的进行遍历
  //   if (queues1.length <= queues2.length) {
  //     t = updateQueue(queues1, map1, map2);
  //   } else {
  //     t = updateQueue(queues2, map2, map1);
  //   }
  //   // 层数不为-1，说明重叠了
  //   if (t !== -1) {
  //     return t;
  //   }
  // }
  // return -1;
};
// @lc code=end
