/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (65.72%)
 * Likes:    123
 * Dislikes: 0
 * Total Accepted:    12.2K
 * Total Submissions: 17.9K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 *
 * 示例:
 *
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 *
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const array = [];
  if (k === 0) return array;
  for (let index = n; index > 0; index--) {
    if (k === 1) {
      array.push([index]);
    } else {
      const temp = combine(index - 1, k - 1);
      temp.forEach(e => {
        e.push(index);
        array.push(e);
      });
    }
  }
  return array;
};
