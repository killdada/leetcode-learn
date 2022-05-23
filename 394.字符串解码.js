/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (str) {
  // 32[a]2[bc]
  // 3 numStr '3'
  // 2 numStr 32'
  // [
  // 1: 组合numStr推入 numStack [32] 开启下一轮字母重复前把之前的res的计算结果存储到 strStack ['']
  // 2 并分别重置 numStr = '' res = ''
  // a res = 'a'  numStack [32] strStack ['']
  // ] 配对。res = strSatck上一次的值 + 当前的 res * numStack 即 aaa***aa (32次)
  // 2  numStr '2'
  //  [ 重复操作结果 numStack [2] strStack [ aaa***aa (32次)]
  // b res = 'b'
  // c res = 'bc'
  // ] 配对 2*bc    aaa***aa  + bcbc

  const numStack = [];
  const strStack = [];
  let numStr = "";
  let res = "";

  for (let i = 0; i < str.length; i++) {
    const s = str[i];
    if (/[a-zA-Z]+/.test(s)) {
      // 字母追加给结果
      res += s;
    } else if (/\d+/.test(s)) {
      // 数字追加
      numStr += s;
    } else if (s === "[") {
      // 需要开启下一轮重复之旅之前，把之前计算的结果存储大字符栈内，并重置当前res =''，开始下一轮的str字符串累积
      strStack.push(res);
      // numStr转数字入数字栈， 存在 '23'这种
      numStack.push(Number(numStr));
      // 重置numstr
      numStr = "";
      res = "";
    } else if (s === "]") {
      // 开始配对
      const num = numStack.pop();
      // 当前结果 = res重复num次 + 之前存储的值作为结果
      res = strStack.pop() + res.repeat(num);
    }
  }
  return res;
};
// @lc code=end
