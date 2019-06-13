/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (71.67%)
 * Likes:    261
 * Dislikes: 0
 * Total Accepted:    21.9K
 * Total Submissions: 29.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 *
 * 说明：解集不能包含重复的子集。
 *
 * 示例:
 *
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if (OBJECT[nums.toString()])
    return OBJECT[nums.toString()];
  const array = [];
  array.push(nums.slice());
  for (let index = 0; index < nums.length; index++) {
    const temp = subsets([].concat(nums.slice(0, index), nums.slice(index + 1)));
    temp.forEach(e => {
      if (array.every(o => o.toString() !== e.toString()))
        array.push(e);
    });
  }
  OBJECT[nums.toString()] = array;
  return array;
};
var OBJECT = {};
