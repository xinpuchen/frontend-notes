/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (34.10%)
 * Likes:    160
 * Dislikes: 0
 * Total Accepted:    14.9K
 * Total Submissions: 41.8K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 *
 * 示例 1:
 *
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 *
 *
 * 示例 2:
 *
 * 输入:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const array = [];
  let i = (j = f = 0);
  while (
    matrix.length > 0 &&
    matrix[0].length > 0 &&
    array.length < matrix.length * matrix[0].length
  ) {
    array.push(matrix[i][j]);
    if (i === f && j < matrix[i].length - f - 1) {
      j++;
    } else if (j === matrix[i].length - f - 1 && i < matrix.length - f - 1) {
      i++;
    } else if (i === matrix.length - f - 1 && j > f) {
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

// spiralOrder([]);
// spiralOrder([[1,2],[3,4]]);
// spiralOrder([[1,2,3],[4,5,6],[7,8,9]]);
// spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);
