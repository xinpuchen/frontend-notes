/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 *
 * https://leetcode-cn.com/problems/maximal-rectangle/description/
 *
 * algorithms
 * Hard (41.31%)
 * Likes:    145
 * Dislikes: 0
 * Total Accepted:    4.4K
 * Total Submissions: 10.1K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * 给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
 *
 * 示例:
 *
 * 输入:
 * [
 * ⁠ ["1","0","1","0","0"],
 * ⁠ ["1","0","1","1","1"],
 * ⁠ ["1","1","1","1","1"],
 * ⁠ ["1","0","0","1","0"]
 * ]
 * 输出: 6
 *
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  let maxArea = 0;
  let i = 0,
    j = 0;
  while (i < matrix.length) {
    maxArea = Math.max(maxArea, maximalRectangleWithVertex(matrix, [i, j]));
    if (j >= matrix[i].length - 1) {
      j = 0;
      i++;
    } else {
      j++;
    }
  }
  return maxArea;
};

function maximalRectangleWithVertex(matrix, [x, y]) {
  if (matrix[x][y] === '0') return 0;
  let area = 0;
  let height = matrix[x].length;
  for (let i = 0; i + x < matrix.length && matrix[i + x][y] !== '0'; i++) {
    let j = y + 1;
    while (j < matrix[i + x].length && matrix[i + x][j] !== '0') {
      j++;
    }
    height = Math.min(height, j - y);
    area = Math.max(area, height * (i + 1));
  }
  return area;
}
