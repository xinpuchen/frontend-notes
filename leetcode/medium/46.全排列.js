/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (66.81%)
 * Likes:    277
 * Dislikes: 0
 * Total Accepted:    26.1K
 * Total Submissions: 37.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 *
 * 示例:
 *
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length <= 1) {
    return [nums];
  }
  const array = [];
  for (let index = 0; index < nums.length; index++) {
    const arr = nums.slice();
    const el = arr.splice(index, 1)[0];
    permute(arr).forEach(e => {
      e.unshift(el);
      array.push(e);
    });
  }
  return array;
};
