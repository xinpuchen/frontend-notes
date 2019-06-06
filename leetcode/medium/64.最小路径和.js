/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (58.84%)
 * Likes:    204
 * Dislikes: 0
 * Total Accepted:    16.9K
 * Total Submissions: 27.6K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 *
 * 说明：每次只能向下或者向右移动一步。
 *
 * 示例:
 *
 * 输入:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 *
 *
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  var OBJECT = {};
  return getMinPathSum(grid, 0, 0, OBJECT);
};

function getMinPathSum(grid, x, y, OBJECT) {
  let s = OBJECT[`${x}-${y}`];
  if (!isNaN(s)) {
    return s;
  }
  if (y + 1 < grid[x].length) {
    s = getMinPathSum(grid, x, y + 1, OBJECT);
  }
  if (x + 1 < grid.length) {
    s = isNaN(s) ?
          getMinPathSum(grid, x + 1, y, OBJECT) :
          Math.min(s, getMinPathSum(grid, x + 1, y, OBJECT));
  }
  s = (s || 0) + grid[x][y];
  OBJECT[`${x}-${y}`] = s;
  return s;
}
