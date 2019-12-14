/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 *
 * https://leetcode-cn.com/problems/rotate-image/description/
 *
 * algorithms
 * Medium (60.43%)
 * Likes:    216
 * Dislikes: 0
 * Total Accepted:    24K
 * Total Submissions: 38.8K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个 n × n 的二维矩阵表示一个图像。
 *
 * 将图像顺时针旋转 90 度。
 *
 * 说明：
 *
 * 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
 *
 * 示例 1:
 *
 * 给定 matrix =
 * [
 * ⁠ [1,2,3],
 * ⁠ [4,5,6],
 * ⁠ [7,8,9]
 * ],
 *
 * 原地旋转输入矩阵，使其变为:
 * [
 * ⁠ [7,4,1],
 * ⁠ [8,5,2],
 * ⁠ [9,6,3]
 * ]
 *
 *
 * 示例 2:
 *
 * 给定 matrix =
 * [
 * ⁠ [ 5, 1, 9,11],
 * ⁠ [ 2, 4, 8,10],
 * ⁠ [13, 3, 6, 7],
 * ⁠ [15,14,12,16]
 * ],
 *
 * 原地旋转输入矩阵，使其变为:
 * [
 * ⁠ [15,13, 2, 5],
 * ⁠ [14, 3, 4, 1],
 * ⁠ [12, 6, 8, 9],
 * ⁠ [16, 7,10,11]
 * ]
 *
 *
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const xl = matrix.length - 1;
  const yl = matrix[0].length - 1;
  let x = Math.ceil(matrix.length / 2);
  let y = ~~(matrix[0].length / 2);
  for (let index = 0; index < x * y; index++) {
    const xi = ~~(index / x);
    const yi = index % x;
    let t = matrix[xi][yi];
    matrix[xi][yi] = matrix[xl - yi][xi];
    matrix[xl - yi][xi] = matrix[xl - xi][yl - yi];
    matrix[xl - xi][yl - yi] = matrix[yi][yl - xi];
    matrix[yi][yl - xi] = t;
  }
};
