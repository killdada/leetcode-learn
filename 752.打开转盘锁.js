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
  // if (target === "0000") return 0;
  // const history = new Set();
  // let queues = [];
  // queues.push(["0000"]);
  // history.add("0000");
  // let count = 0;

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
  //     // 对应再queues和set里面的不要添加进去,即死锁还有转动过的数据直接跳过
  //     if (history.has(data) || deadends.includes(data)) continue;
  //     result.push(data);
  //     history.add(data);
  //   }
  //   return result;
  // }

  // // 队列长度不为空，并且当前队列历史里面没有那么需要接着遍历
  // while (!history.has(target) && queues.length) {
  //   // 队列长度不为空，并且队列里面没有目标值 ，一直循环
  //   // 取出队列里面的第一个数，然后用这个数波动转盘生成树的下一层，下一层入队列
  //   count++;
  //   const currentFloor = queues.shift();

  //   // 下一层树枝所有的可能情况
  //   let nextFloor = [];
  //   currentFloor.forEach((item) => {
  //     nextFloor = nextFloor.concat(
  //       wrapper(item, "upper"),
  //       wrapper(item, "down")
  //     );
  //   });
  //   if (nextFloor.length) {
  //     queues.push(nextFloor);
  //   } else {
  //     // 死锁，直接返回-1
  //     count = -1;
  //   }
  // }
  // return count;

  // 因为知道目标位置，可以考虑双向bfs，有交集的时候说明可以找到，并返回次数
  // 不需要拨动直接开锁
  if (target === "0000") return 0;
  let queues1 = ["0000"];
  let queues2 = [target];
  const map1 = new Map();
  const map2 = new Map();
  // 记录节点当前层数, key 节点 value 层数
  map1.set("0000", 0);
  map2.set(target, 0);

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
      result.push(data);
    }
    return result;
  }

  function updateQueue(queue, cur, other) {
    for (let i = 0; i < queue.length; i++) {
      const current = queue.shift();
      // 当前遍历节点记录需要的层数
      const step = cur.get(current);
      const nums = [].concat(
        wrapper(current, "upper"),
        wrapper(current, "down")
      );
      for (let j = 0; j < nums.length; j++) {
        // 死锁或者已经遍历
        if (cur.has(nums[j]) || deadends.includes(nums[j])) {
          continue;
        }
        // 另外一个队列里面已经遍历过，说明有集合，二个层数相加再+1就是最后的层
        if (other.has(nums[j])) {
          return other.get(nums[j]) + step + 1;
        } else {
          cur.set(nums[j], step + 1);
          queue.push(nums[j]);
        }
      }
    }
    return -1;
  }

  while (queues1.length && queues2.length) {
    let t = -1;
    // 拿队列长度最低的进行遍历
    if (queues1.length <= queues2.length) {
      t = updateQueue(queues1, map1, map2);
    } else {
      t = updateQueue(queues2, map2, map1);
    }
    // 层数不为-1，说明重叠了
    if (t !== -1) {
      return t;
    }
  }

  return -1;
};
// @lc code=end
