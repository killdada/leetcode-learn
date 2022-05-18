/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (Object.prototype.toString.call(strs).toLowerCase() !== "[object array]")
    return "";
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let result = "";

  // 推出数组的第一个，以第一个为标准，遍历其他的数组值
  const str = strs.shift();

  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    // 后续数组的每一项对应的字符下标位置都满足当前值的情况，那么放入result中
    if (strs.every((strItem) => strItem[i] === item)) {
      result += item;
    } else {
      // 只要有一个不满足，直接退出循环
      break;
    }
  }

  return result;
};
// @lc code=end
