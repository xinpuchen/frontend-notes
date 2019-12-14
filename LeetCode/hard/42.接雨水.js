/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (42.04%)
 * Likes:    415
 * Dislikes: 0
 * Total Accepted:    14.5K
 * Total Submissions: 33K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 *
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢
 * Marcos 贡献此图。
 *
 * 示例:
 *
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 *
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let n = 0;
  let index = 0;
  let limit = height.length;
  const max = Math.max(...height);
  const maxIndex = height.indexOf(max);
  if (max <= 0 || maxIndex === -1) {
    return n;
  }
  const maxBefore = Math.max(...height.slice(0, maxIndex));
  const maxBeforeIndex = height.indexOf(maxBefore);
  if (maxBefore > 0 && maxBeforeIndex !== -1) {
    n += (maxIndex - maxBeforeIndex - 1) * maxBefore;
    index = maxBeforeIndex + 1;
    if (maxBeforeIndex > 1) {
      n += trap(height.slice(0, maxBeforeIndex + 1));
    }
  } else {
    index = maxIndex + 1;
  }
  const maxAfter = Math.max(...height.slice(maxIndex + 1));
  const maxAfterIndex = height.lastIndexOf(maxAfter);
  if (maxAfter > 0 && maxAfterIndex !== -1) {
    n += (maxAfterIndex - maxIndex - 1) * maxAfter;
    limit = maxAfterIndex;
    if (maxAfterIndex < height.length - 2) {
      n += trap(height.slice(maxAfterIndex));
    }
  }
  for (; index < limit; index++) {
    if (index !== maxIndex) n -= height[index];
  }
  return n;
};
