/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 *
 * https://leetcode-cn.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (17.55%)
 * Total Accepted:    11.2K
 * Total Submissions: 62.7K
 * Testcase Example:  '10\n3'
 *
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 *
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 *
 * 示例 1:
 *
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 *
 * 示例 2:
 *
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 *
 * 说明:
 *
 *
 * 被除数和除数均为 32 位有符号整数。
 * 除数不为 0。
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31,  2^31 − 1]。本题中，如果除法结果溢出，则返回 2^31 − 1。
 *
 *
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const f = (dividend >= 0 ^ divisor >= 0) === 1;
  let dd = Math.abs(dividend);
  let dr = Math.abs(divisor);
  let i = dr === 0 ? NaN : 0;

  while (dd >= dr) {
    let t = dr;
    let dt = 1;
    while (dd >= (t << 1) && (t << 1) > 0) {
      t <<= 1;
      dt <<= 1;
    }
    dd -= t;
    i += dt;
  }
  return f && i !== 0 ? -setOver(i, f) : setOver(i);
};

function setOver(i, f) {
  return i < 2 ** 31 || f && i <= 2 ** 31 ? i : 2 ** 31 - 1;
  // return i < 2 ** 31 ? i : 2 ** 31 - 1;
}

// console.log(divide(10, 3)); // 3
// console.log(divide(0, -3)); // 0
// console.log(divide(1, -1)); // -1
// console.log(divide(-1, 1)); // -1
// console.log(divide(7, -3)); // -2
// console.log(divide(7, -3)); // -2
// console.log(divide(-7, 3)); // -2
// console.log(divide(-7, -3)); // 2
// console.log(divide(2147483647, 1)); // 2147483647
// console.log(divide(-2147483648, 1)); // -2147483648 题目数据问题
// console.log(divide(-2147483648, 2)); // -1073741824
// console.log(divide(-2147483648, -1)); // 2147483647

