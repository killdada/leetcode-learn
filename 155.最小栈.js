/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

class MinStack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
    return true;
  }
  pop() {
    if (!this.stack.length) return false;
    this.stack.pop();
    return true;
  }
  top() {
    if (!this.stack.length) return false;
    return this.stack.pop();
  }
  getMin() {
    if (!this.stack.length) {
      return false;
    }
    return this.stack.reduce((prev, cur) => {
      if (typeof prev === "undefined") return cur;
      return cur < prev ? cur : prev;
    }, undefined);
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
