/*
 * @lc app=leetcode.cn id=841 lang=javascript
 *
 * [841] 钥匙和房间
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
// [[1], [2], [3], []];
var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  // 第一个房间加入队列
  const queues = rooms[0];
  // 0号房间加入观察过的历史
  visited.add(0);

  // 第一个房间加入访问过集合
  while (queues.length) {
    const queue = queues.shift();
    visited.add(queue);
    // 当前出队列，后续进入拿到其他房间的钥匙
    const room = rooms[queue] || [];
    room.forEach((item) => {
      if (!visited.has(item)) {
        queues.push(item);
      }
    });
  }
  return visited.size === rooms.length;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = canVisitAllRooms;
// @after-stub-for-debug-end
