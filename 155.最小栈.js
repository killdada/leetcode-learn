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
    // 入栈的时候把最小值赋值给最后一个元素，这样可以始终保存后入栈的始终是最小的，即stack是降序，然后每次出栈，最小的肯定是最后一个
    this.stack.push({
      value: item,
      min: this.stack.length === 0 ? item : Math.min(item, this.getMin()),
    });
    return true;
  }
  pop() {
    if (!this.stack.length) return false;
    this.stack.pop();
    return true;
  }
  top() {
    if (!this.stack.length) return false;
    return this.stack[this.stack.length - 1].value;
  }
  getMin() {
    if (!this.stack.length) {
      return false;
    }
    return this.stack[this.stack.length - 1].min;
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

// @after-stub-for-debug-begin
module.exports = MinStack;
// @after-stub-for-debug-end
