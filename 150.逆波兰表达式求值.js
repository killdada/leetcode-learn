/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    // 数字直接入栈
    if (!["+", "-", "*", "/"].includes(token)) {
      // 注意转数字
      stack.push(Number(token));
      continue;
    }
    // 非数字，取出二个栈顶，计算值，然后把计算后的值推入栈
    const last = stack.pop();
    const last1 = stack.pop();
    let res;
    switch (token) {
      case "+":
        res = last1 + last;
        break;
      case "-":
        res = last1 - last;
        break;
      case "*":
        res = last1 * last;
        break;
      case "/":
        res =
          last1 / last <= 0
            ? Math.ceil(last1 / last)
            : Math.floor(last1 / last);
        break;
      default:
        break;
    }
    // 计算后的值入栈
    stack.push(res);
  }
  // 最后出栈就是我们需要的值
  return stack.pop();
};

// @lc code=end
