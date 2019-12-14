/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 *
 * https://leetcode-cn.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (62.69%)
 * Likes:    266
 * Dislikes: 0
 * Total Accepted:    18.5K
 * Total Submissions: 28.7K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 *
 * candidates 中的数字可以无限制重复被选取。
 *
 * 说明：
 *
 *
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。
 *
 *
 * 示例 1:
 *
 * 输入: candidates = [2,3,6,7], target = 7,
 * 所求解集为:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 *
 *
 * 示例 2:
 *
 * 输入: candidates = [2,3,5], target = 8,
 * 所求解集为:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 *
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates = candidates.sort((a, b) => a - b);
  const array = [];
  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i] > target) {
      break;
    } else if (candidates[i] === target) {
      array.push([candidates[i]]);
    } else {
      array.push(
        ...combinationSum(candidates.slice(i), target - candidates[i])
          .filter(e => e.length > 0)
          .map(e => {
            e.unshift(candidates[i]);
            return e;
          }),
      );
    }
  }
  return array;
};
