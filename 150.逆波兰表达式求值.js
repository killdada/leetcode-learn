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
    if (!["+", "-", "*", "/"].includes(token)) {
      stack.push(Number(token));
      continue;
    }
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
    stack.push(res);
  }
  return stack.pop();
};

// @lc code=end
