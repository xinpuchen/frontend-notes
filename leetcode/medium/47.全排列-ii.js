/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (50.88%)
 * Likes:    104
 * Dislikes: 0
 * Total Accepted:    12.8K
 * Total Submissions: 24.5K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 *
 * 示例:
 *
 * 输入: [1,1,2]
 * 输出:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (nums.length <= 1) {
    return [nums];
  }
  const array = [];
  for (let index = 0; index < nums.length; index++) {
    const arr = nums.slice();
    const el = arr.splice(index, 1)[0];
    permuteUnique(arr).forEach(e => {
      e.unshift(el);
      if (array.findIndex(ele => isEqArr(e, ele)) === -1)
        array.push(e);
    });
  }
  return array;
};

function isEqArr(a1, a2) {
  let i = 0;
  while (i < a1.length || i < a2.length) {
    if (a1[i] !== a2[i])
      return false;
    i++;
  }
  return true;
}

