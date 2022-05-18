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
  // 3 [ a 2 [ c
  //  ] 第一个 ]
  // temp = 'c'  n = 2 'cc' temp连续的字母重复n次入栈
  // 3 [ a cc
  // ] 第二个 ]
  // temp =  'acc' n = 3
  // accaccacc
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    if (item !== "]") {
      stack.push(item);
      continue;
    }
    let temp = "";
    // 遇到 ] 把之前的栈里面的遇到的第一个的 [ ，[**] 里面的重复 [前面的数字次数，重复的值和入栈，
    while (stack.length > 1) {
      const s = stack.pop();
      if (/[a-zA-Z]+/.test(s)) {
        // 其他字母，把结果拼接到tem前面
        temp = s + temp;
      } else if (/\d+/.test(s)) {
        // 重置temp
        temp = "";
        // 数字， 3[, 2[ 数字后面一般紧跟着[,这个时候把temp重复 3、2次，入栈
        stack.push(temp.repeat(s));
      }
    }
  }
  return stack.pop();
};
// @lc code=end
