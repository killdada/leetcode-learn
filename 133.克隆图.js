/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  // 下面的是深度优先遍历的方式
  // if (!node) return;
  // const visited = new Map();
  // const dfs = (n) => {
  //   // console.log(n.val);
  //   const nCopy = new Node(n.val);
  //   visited.set(n, nCopy);
  //   (n.neighbors || []).forEach((ne) => {
  //     if (!visited.has(ne)) dfs(ne);
  //     nCopy.neighbors.push(visited.get(ne));
  //   });
  // };
  // dfs(node);
  // return visited.get(node);
  if (!node) return;
  const visited = new Map();
  visited.set(node, new Node(node.val));
  const q = [node];
  while (q.length) {
    const n = q.shift();
    (n.neighbors || []).forEach((ne) => {
      if (!visited.has(ne)) {
        q.push(ne);
        visited.set(ne, new Node(ne.val));
      }
      visited.get(n).neighbors.push(visited.get(ne));
    });
  }
  return visited.get(node);
};
// @lc code=end
