/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 *
 * https://leetcode-cn.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (52.64%)
 * Likes:    239
 * Dislikes: 0
 * Total Accepted:    22.7K
 * Total Submissions: 41.9K
 * Testcase Example:  '3\n2'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 *
 * 问总共有多少条不同的路径？
 *
 *
 *
 * 例如，上图是一个7 x 3 的网格。有多少可能的路径？
 *
 * 说明：m 和 n 的值均不超过 100。
 *
 * 示例 1:
 *
 * 输入: m = 3, n = 2
 * 输出: 3
 * 解释:
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向右 -> 向下
 * 2. 向右 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向右
 *
 *
 * 示例 2:
 *
 * 输入: m = 7, n = 3
 * 输出: 28
 *
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (m === 1 || n === 1) {
    return 1;
  }
  if (m === 2 || n === 2) {
    return Math.max(m, n);
  }
  return m >= n ? accumulation(m, n - 3) : accumulation(n, m - 3);
};

function accumulation(n, x) {
  let s = OBJECT[`${n}-${x}`] || 0;
  if (s !== 0) {
    return s;
  }
  if (x === 0) {
    s = ((n + 1) * n) / 2;
  } else {
    let m = n;
    while (m > 0) {
      s += accumulation(m, x - 1);
      m--;
    }
  }
  OBJECT[`${n}-${x}`] = s;
  return s;
}
var OBJECT = {};

// console.log(uniquePaths(2, 1)); // 1 1
// console.log(uniquePaths(2, 2)); // 2
// console.log(uniquePaths(2, 3)); // 3
// console.log(uniquePaths(3, 1)); // 1 1
// console.log(uniquePaths(3, 2)); // 3 2+1
// console.log(uniquePaths(3, 3)); // 6 3+2+1
// console.log(uniquePaths(3, 4)); // 10 4+3+2+1
// console.log(uniquePaths(3, 5)); // 15 5+4+3+2+1
// console.log(uniquePaths(3, 6)); // 21 6+5+4+3+2+1
// console.log(uniquePaths(3, 7)); // 28 7+6+5+4+3+2+1
// console.log(uniquePaths(4, 1)); // 1 1
// console.log(uniquePaths(4, 2)); // 4 2+1 1
// console.log(uniquePaths(4, 3)); // 10 3+2+1 2+1 1
// console.log(uniquePaths(4, 4)); // 20 4+3+2+1 3+2+1 2+1 1
// console.log(uniquePaths(4, 5)); // 35 5+4+3+2+1 4+3+2+1 3+2+1 2+1 1
// console.log(uniquePaths(5, 1)); // 1
// console.log(uniquePaths(5, 2)); // 5 4
// console.log(uniquePaths(5, 3)); // 15 10
// console.log(uniquePaths(5, 4)); // 35 20
// console.log(uniquePaths(5, 5)); // 70 35
// console.log(uniquePaths(38, 10)); // 1101716330 Time Limit Exceeded
