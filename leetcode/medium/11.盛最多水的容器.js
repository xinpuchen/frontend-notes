/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 *
 * https://leetcode-cn.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (53.74%)
 * Total Accepted:    39.4K
 * Total Submissions: 71.8K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为
 * (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 *
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 *
 *
 *
 * 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 *
 *
 *
 * 示例:
 *
 * 输入: [1,8,6,2,5,4,8,3,7]
 * 输出: 49
 *
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  return Math.max(...height.map(getcurrMaxArr));
};

function calcArea(h, w) {
  return h * w;
}

function getcurrMaxArr(e, i, a) {
  if (e <= 0)
    return 0;
  let index = Math.max(a.length - i - 1, i);
  for (; index > 0; index--) {
    const ix = i - index;
    const iy = i + index;
    const x = ix >= 0 ? a[ix] : 0;
    const y = iy < a.length ? a[iy] : 0;
    if (x >= e || y >= e)
      return calcArea(e, index);
  }
  return 0;
}

// console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49

