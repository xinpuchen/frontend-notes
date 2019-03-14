/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.87%)
 * Total Accepted:    92.8K
 * Total Submissions: 291K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let str = Number(isOver(x)).toString(10);
  if (str === '0')
    return 0;
  let flag = 0;
  if (str[0] === '-') {
    flag = 1;
    str = str.substring(1);
  }
  const num = Number(str.split('').reverse().join(''));
  return isOver(flag === 1 ? -num : num);

  function isOver(x) {
    if (Math.pow(2, 31) > x && x >= Math.pow(-2, 31))
      return x;
    return 0;
  }
};

console.log(reverse(-123)); // -321
console.log(reverse(1534236469)); // 0

