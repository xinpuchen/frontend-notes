/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 *
 * https://leetcode-cn.com/problems/powx-n/description/
 *
 * algorithms
 * Medium (31.60%)
 * Likes:    105
 * Dislikes: 0
 * Total Accepted:    19K
 * Total Submissions: 57.8K
 * Testcase Example:  '2.00000\n10'
 *
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 *
 * 示例 1:
 *
 * 输入: 2.00000, 10
 * 输出: 1024.00000
 *
 *
 * 示例 2:
 *
 * 输入: 2.10000, 3
 * 输出: 9.26100
 *
 *
 * 示例 3:
 *
 * 输入: 2.00000, -2
 * 输出: 0.25000
 * 解释: 2^-2 = 1/2^2 = 1/4 = 0.25
 *
 * 说明:
 *
 *
 * -100.0 < x < 100.0
 * n 是 32 位有符号整数，其数值范围是 [−2^31, 2^31 − 1] 。
 *
 *
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  // return Math.pow(x, n);
  if (x < 0) {
    if (n % 2 === 0) {
      return myPow(-x, n);
    } else {
      return -myPow(-x, n);
    }
  } else if (n < 0) {
    return myPow(1 / x, -n);
  } else if (n === 0) {
    return 1;
  }
  if (x === 0) {
    if (n > 0) {
      return 0;
    } else if (n === 0) {
      return 1;
    } else {
      return Infinity;
    }
  } else if (x === 1) {
    return 1;
  }

  if (n === 1) {
    return x;
  } else {
    let t = ~~(n / 2);
    return myPow(x * x, t) * myPow(x, n - 2 * t);
  }
};
