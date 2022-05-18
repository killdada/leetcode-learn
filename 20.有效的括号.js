/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 消消乐
  // 遇到 { [ ( 进,其他的右括号进行消消乐对比抵消
  let stack = [];
  const mapObj = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    // debugger;
    if (["{", "(", "["].includes(item)) {
      // 左括号入栈
      stack.push(item);
    } else if (!stack.length || stack[stack.length - 1] !== mapObj[item]) {
      // 不匹配,栈中没有元素
      return false;
    } else {
      // 配对,出栈
      stack.pop();
    }
  }
  return !stack.length;
};
// @lc code=end
