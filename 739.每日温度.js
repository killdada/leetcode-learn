/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // [73, 74, 75, 71, 69, 72, 76, 73];
  // 栈的情况
  // 73 74
  // 74 75
  // 75
  // 75 71
  // 75 71 69
  // 75 71 72
  // 75 72
  // 75 72 76
  // 75 76
  // 76
  // 76 73
  if (!temperatures.length) return [];
  if (temperatures.length === 1) return [0];
  // stack直接记录下标,后续value,可以通过下标拿 (下标的好处是方便计算最后的天数)
  let stack = [0];
  // 记录填充值,直接用0填充,这样最后栈里多出来的默认就是0
  let result = new Array(temperatures.length).fill(0);
  for (let i = 1; i < temperatures.length; i++) {
    const item = temperatures[i];
    // 下一个入栈的和栈顶比较,如果大于栈顶,那么栈顶出,接着继续和栈顶比较,如果依然满足,那么栈顶接着出,直到栈顶大于当前元素不再判断,直接把当前元素推入栈顶即可, (每个栈顶出的时候记录下他的i的位置)
    while (item > temperatures[stack[stack.length - 1]]) {
      // 栈顶 < 当前数,出栈,并且更新 result,result 等于 当前下标 - 栈里记录下标
      let indexTop = stack.pop();
      result[indexTop] = i - indexTop;
    }
    // 所以的栈顶都大于当前数了,把当前数,(下标)入栈
    stack.push(i);
  }
  return result;
};

// @lc code=end
