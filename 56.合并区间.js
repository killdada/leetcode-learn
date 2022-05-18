/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // isArray
  if (Object.prototype.toString.call(intervals) !== "[object Array]") {
    throw new Error("传入的参数不是数组，请检查！");
  }
  // 数组长度小于等于1
  if (intervals.length <= 1) {
    return intervals;
  }
  // 对数组进行排序
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      // 左区域不等。左区域进行升序
      return a[0] - b[0];
    }
    //  左区域相等，比较右区域，也是升序
    return a[1] - b[1];
  });
  // 结果，把第一个推入进去
  let result = [intervals[0]];
  // 从第一个区间开始
  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    // 如果当前的左侧区域大于prev的右侧区域 即 [1,2] [3,6]的情况，此时满足不重合
    if (intervals[i][0] > prev[1]) {
      // 不重合，把当前推入到result
      result.push(intervals[i]);
      // 并把prev往后移动一位比较
      prev = intervals[i];
    } else {
      // 重合，即 [1,3] [2,6]的情况，当前pre的右侧区域取最大值，直接更改实际result里面的该元素位置也是更新过了的，引用类型！
      prev[1] = Math.max(prev[1], intervals[i][1]);
    }
  }

  return result;
};
// @lc code=end
