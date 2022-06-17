/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  // a b c b d
  // a - b 没有重复 长度为2
  // a - b - c  没有重复 长度为3
  // a - b -c - b 重复，移动左指针，直到没有重复
  // c - b 没有重复  长度为2
  //  c- b - d   没有重复  长度为3
  // 最大长度3
  let n = s.length;
  if (n === 0) return 0;
  // map存储当前遍历滑动窗口的
  const map = new Map();
  // 左指针
  let left = 0;
  // 右指针
  let right = 0;
  // 最大不重复的长度
  let max = 1;
  while (right < n) {
    // 剩余没遍历的长度 + 历史记录的map长度已经小于最大长度，那么直接跳出循环 （即使+后面所有的数字都不会大于最大的，没必要额外遍历）
    if (n - right - 1 + map.size < max) break;
    const value = s[right];
    if (map.has(value)) {
      // 重复了，开始处理左指针，
      // 左侧里面是哪个重复的值，拿到他的下标
      const index = map.get(value);
      // 删除left到当前重复值这段距离map里面的内容
      while (left <= index) {
        map.delete(s[left]);
        left++;
      }
      // 并且把当前的right推入，right往下走
      map.set(s[right], right);
      right++;
    } else {
      // 没有重复，右指针移动
      map.set(s[right], right);
      max = Math.max(map.size, max);
      right++;
    }
  }
  return max;
};

// @lc code=end
