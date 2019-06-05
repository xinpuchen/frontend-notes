/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode-cn.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (71.25%)
 * Likes:    102
 * Dislikes: 0
 * Total Accepted:    10.3K
 * Total Submissions: 14.1K
 * Testcase Example:  '3'
 *
 * 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 *
 * 示例:
 *
 * 输入: 3
 * 输出:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 8, 9, 4 ],
 * ⁠[ 7, 6, 5 ]
 * ]
 *
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const array = new Array(n).fill().map(() => new Array(n));
  let i = j = f = 0;
  let index = 1;
  while (index <= n * n) {
    array[i][j] = index++;
    if (i === f && j < n - f - 1) {
      j++;
    } else if (j === n - f - 1 && i < n - f - 1) {
      i++;
    } else if (i === n - f - 1 && j > f) {
      j--;
    } else if (j === f && i > f + 1) {
      i--;
    } else if (j === f && i === f + 1) {
      f++;
      j++;
    }
  }
  return array;
};

