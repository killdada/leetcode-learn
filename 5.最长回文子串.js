/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string}
 * @return {string}
 */
var longestPalindrome = function (str) {
  let length = str.length;
  if (length === 1) return str; // 满足的最大回文长度

  let maxlength = 0; // 满足的最大回文的开始下标
  let starti = 0;

  function isLoop(i, j) {
    if (i === j) return true; // aba; // i =0 ;j =1 不满足 // i = 0; j =2  while判断条件 // i = 1； j = 1 while判断条件 // a b b a // i = 0 ; j = 3  while判断条件 // i = 1; j = 2 while判断条件 // i = 2; j = 1  while判断条件,退出
    while (i < j && str[i] === str[j]) {
      i++;
      j--;
    } // 满足回文;
    return i >= j;
  } // 暴力破解

  for (let i = 0; i < length; i++) {
    for (let j = i + maxlength; j < length; j++) {
      // 如果是回文，那么更新值
      if (isLoop(i, j)) {
        let l = j - i + 1; // 满足的回文长度大于最大回文长度，那么更新下
        if (l > maxlength) {
          maxlength = l;
          starti = i;
        }
      }
    }
  }
  return str.slice(starti, starti + maxlength);
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = longestPalindrome;
// @after-stub-for-debug-end
